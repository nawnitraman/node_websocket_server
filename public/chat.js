// Make connection
//var socket = io.connect('http://192.168.1.143:4000');  // io is a global object included with socket.io

// Notice that I’m not specifying any URL when I call io(), since it defaults to trying to connect to the host that serves the page.
var socket = io();

// Query DOM
// var output = document.querySelector('#output');
// var handle = document.querySelector('#handle');
// var message = document.querySelector('#message');
// var sendButton = document.querySelector('#send');
// var feedback = document.querySelector('#feedback');

// Emit events
// sendButton.addEventListener('click', function() {
//   socket.emit('chat', {
//     message:  message.value,     // .value b/c it's an <input> field
//     handle: handle.value
//   })
//
// })

// message.addEventListener('keypress', function() {
//   socket.emit('typing', {
//     handle: handle.value
//   })
// })

// Listen for events coming from server code
// ...socket is one instance of the websocket in this particular client
// socket.on('chat', function(data) {
//   output.innerHTML += `<p><strong>${data.handle}: </strong>${data.message}</p>`;
//
//   // and clear the "... is typing..."
//   feedback.innerHTML = '';
// })
//
// socket.on('typing', (data) => {
//   feedback.innerHTML = `<p><em>${data.handle} is typing a message...</em></p>`;
// })



socket.on('memory', function(data1) {
  var chart_memory = new CanvasJS.Chart("chartContainer_memory", {
  	animationEnabled: false,
    theme: "dark1",
  	title: {
  		text: "Memory Utilization"
  	},
  	data: [{
  		type: "doughnut",
      animationEnabled: false,
      zoomEnabled:true,
  		startAngle: 0,
  		yValueFormatString: "##0.00\"%\"",
  		indexLabel: "{label} {y}",
  		dataPoints: [
  			{y: data1.os, label: "os"},
  			{y: data1.sqlserver, label: "sqlserver"},
  			{y: data1.chrome, label: "chrome"},
  			{y: data1.free, label: "free"}
  		]
  	}]
  });
  chart_memory.render();
});



socket.on('cpu', function(data1) {
  var chart_cpu = new CanvasJS.Chart("chartContainer_cpu", {
  	animationEnabled: false,
    theme: "dark1",
  	title: {
  		text: "CPU Utilization"
  	},
  	data: [{
  		type: "doughnut",
      animationEnabled: false,
  		startAngle: 0,
  		yValueFormatString: "##0.00\"%\"",
  		indexLabel: "{label} {y}",
  		dataPoints: [
  			{y: data1.os, label: "os"},
  			{y: data1.sqlserver, label: "sqlserver"},
  			{y: data1.chrome, label: "chrome"},
  			{y: data1.free, label: "free"}
  		]
  	}]
  });
  chart_cpu.render();
});

socket.on('diskspace', function(data1) {
  var chart_diskspace = new CanvasJS.Chart("chartContainer_diskspace", {
  	animationEnabled: false,
    theme: "dark1",
  	title: {
  		text: "Disk Space Utilization"
  	},
  	data: [{
  		type: "doughnut",
      animationEnabled: false,
  		startAngle: 0,
  		yValueFormatString: "##0.00\"%\"",
  		indexLabel: "{label} {y}",
  		dataPoints: [
  			{y: data1.os, label: "os"},
  			{y: data1.sqlserver, label: "sqlserver"},
  			{y: data1.chrome, label: "chrome"},
  			{y: data1.free, label: "free"}
  		]
  	}]
  });
  chart_diskspace.render();
});
