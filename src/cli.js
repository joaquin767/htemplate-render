const glob = require("glob")
const Handlebars = require("handlebars");
const fs   = require('fs');
const path = require('path')
export function cli(args) {
    glob("**/*.{conf,yml}",{ignore: "node_modules/**/*.*"}, function (er, files) {
      for (let index = 0; index < files.length; index++) {
        const element = files[index];
        console.log(element);
        const fullPath = path.resolve(element)
        // Rename template to a temp file
        fs.renameSync(fullPath, fullPath + ".temp")
        const envFile = require("./" + process.argv[2])
        const templateFile = fs.readFileSync("./" + element + ".temp", 'utf8');
        
        const template = Handlebars.compile(templateFile);
        const parsedTemplate = template(envFile);
        console.log(parsedTemplate);
        fs.writeFile(fullPath, parsedTemplate, err =>{})
        fs.unlink(fullPath + ".temp", (err) => {})
      }
    })
}