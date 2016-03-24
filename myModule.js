var fs = require('fs');

module.exports = function(para1, para2){

  fs.readdir(para1,function(err, list){

    list = list.filter(function(val){
      return (val.indexOf(para2) > -1);
    });

    for(var i = 0; i < list.length; i++){
      console.log(list[i]);
    }
  });

}
