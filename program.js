
var fs = require('fs');
var myModule = require ('./myModule.js')
var http = require ('http');
var bl = require ('bl');
var net = require('net');
var strftime = require('strftime');
var map = require('through2-map');
var url = require('url');


var port = process.argv[2];
var filePath = process.argv[3];


var server = http.createServer(function(req,res){
    res.writeHead(200, { 'content-type': 'text/json' });

    var urlStore = url.parse(req.url, true);
    //console.log(urlStore);

    if (req.method === 'GET'){
        if(urlStore.pathname === '/api/parsetime') {
          //console.log(urlStore.query.iso);
          var d = new Date(urlStore.query.iso);
          var hours = d.getHours();
          var min  = d.getMinutes();
          var sec = d.getSeconds();
          //console.log(hours + ', ' + min + ', ' + sec)
          res.end(JSON.stringify({
            hour: hours,
            minute: min,
            second: sec
          }));

        }

        if(urlStore.pathname ===  '/api/unixtime') {
          var d = new Date(urlStore.query.iso);
          var unixT = (d.getTime());

          res.end(JSON.stringify({
            unixtime: unixT
          }));

        }
    }


});

server.listen(port);



/*
Create TCP Server

var server = net.createServer(function (socket) {
  // socket handling logic
  var nowDate = new Date();
  var formatDate = strftime('%F %H:%M',nowDate);
  socket.end(formatDate + '\n');
});
server.listen(port);

*/


/*

http.get(process.argv[2], function(res){

    res.pipe(bl(function (err, data) {
      console.log(data.toString());
    }));

    //response.on("data", function (data) { /* ... })
});
*/
