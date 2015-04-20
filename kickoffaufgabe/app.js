var fs = require('fs');

fs.readFile(__dirname+"/wolkenkratzer.json", function(err, data) {
            if (err) throw err;

              var infos = JSON.parse(data.toString());

              for(var i in infos.wolkenkratzer) {
              console.log(chalk.red('Name: ') + infos.wolkenkratzer[i].name);
              console.log("Stadt: " + infos.wolkenkratzer[i].stadt);
              console.log("Höhe: " + infos.wolkenkratzer[i].hoehe);
              console.log("----------------------");
            }


 });
