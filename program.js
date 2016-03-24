
var fs = require('fs');
var myModule = require ('./myModule.js')
var http = require ('http');
var bl = require ('bl');
var net = require('net');
var strftime = require('strftime')


var port = process.argv[2];

var server = net.createServer(function (socket) {
  // socket handling logic
  var nowDate = new Date();
  var formatDate = strftime('%F %H:%M',nowDate);
  socket.end(formatDate + '\n');
});
server.listen(port);




/*

http.get(process.argv[2], function(res){

    res.pipe(bl(function (err, data) {
      console.log(data.toString());
    }));

    //response.on("data", function (data) { /* ... })
});
*/
