const fs = require('fs');
/*

var readStream = fs.createReadStream('Jack.txt', 'utf8');

readStream.on('data', function (chunk) {
    console.log(chunk);
    fs.createWriteStream('newFile.txt',).write(chunk)

});*/

//fs.unlink('Jack.txt', function () {
  fs.rmdir('newDir', function () {
      
  });
