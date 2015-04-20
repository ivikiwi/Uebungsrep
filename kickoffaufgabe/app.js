var fs = require('fs');
var chalk = require('chalk');

fs.readFile(__dirname+"/wolkenkratzer.json", function(err, data) {
            if (err) throw err;

              var infos = JSON.parse(data.toString());

              infos.wolkenkratzer.sort(function(a,b) {
                if (a.hoehe > b.hoehe) {
                  return 1;
                }
                if (a.hoehe < b.hoehe) {
                  return -1;
                }
                return 0;
              });

              fs.writeFile(__dirname+"/sorted_wolkenkratzer.json", JSON.stringify(infos), function(err) {
                if (err) throw err;

                for(var i in infos.wolkenkratzer) {
                  console.log(chalk.red('Name: ') + chalk.green(infos.wolkenkratzer[i].name));
                  console.log(chalk.red('Stadt: ') + chalk.green(infos.wolkenkratzer[i].stadt));
                  console.log(chalk.red('Höhe: ') + chalk.green(infos.wolkenkratzer[i].hoehe));
                  console.log("----------------------");
                }

            });

 });
