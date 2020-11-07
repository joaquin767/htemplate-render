import { throws } from "assert";
import { exception } from "console";
import { chdir } from "process";

const glob = require("glob")
const Handlebars = require("handlebars");
const fs   = require('fs');
const path = require('path')
export function cli(args) {
  const envFile = require("./" + args[2])
  chdir(args[3])
  glob("**/*.{conf,yml,js,yaml}",{ignore: "node_modules/**/*.*"}, function (er, files) {
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      console.log(element);
      // Get file absolute path
      const fullPath = path.resolve(element);
      // Rename template to a temp file
      fs.renameSync(fullPath, fullPath + ".temp");
      // Read temp file
      const templateFile = fs.readFileSync("./" + element + ".temp", 'utf8');
      const template = Handlebars.compile(templateFile);
      // Render template
      const renderedTemplate = template(envFile);
      fs.writeFile(fullPath, renderedTemplate, err =>{
        if(err){
          throw exception(err.message)
        }
      })
      fs.unlink(fullPath + ".temp", (err) => {
        if(err){
          throw exception(err.message)
        }
      });
    }
  })
}