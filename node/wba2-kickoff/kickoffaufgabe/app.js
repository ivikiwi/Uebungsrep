var fs = require('fs');

fs.readFile(__dirname+"/wolkenkratzer.json", function(err, data) {
            if (err) throw err;

              var infos = JSON.parse(data.toString());

              for(var i in infos.wolkenkratzer) {
              console.log(infos.wolkenkratzer[i].name);
              console.log(infos.wolkenkratzer[i].stadt);
              console.log(infos.wolkenkratzer[i].hoehe);
            }


 });
