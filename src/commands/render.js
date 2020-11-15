const {Command, flags} = require('@oclif/command')
const path = require('path')
const fs = require('fs')
const glob = require("glob")
const Handlebars = require("handlebars");

class RenderCommand extends Command {
  async run() {
    const {flags} = this.parse(RenderCommand)
    if (!flags.dir || !flags.envFile) {
      this._help();
    }

    const directory = path.resolve(flags.dir)
    const environmentFile = require(path.resolve(flags.envFile))
    process.chdir(directory)
    this.log(process.cwd())
    glob("**/*.{conf,yml,js,yaml}", { ignore: "node_modules/**/*.*" }, function (er, files) {
      for (let index = 0; index < files.length; index++) {
        const element = files[index];
        // Get file absolute path
        const fullPath = path.resolve(element);
        // Rename template to a temp file
        fs.renameSync(fullPath, fullPath + ".temp");
        // Read temp file
        const templateFile = fs.readFileSync(process.cwd() + "/" + element + ".temp", 'utf8');
        const template = Handlebars.compile(templateFile);
        // Render template
        const renderedTemplate = template(environmentFile);
        fs.writeFile(fullPath, renderedTemplate, err => {
          if (err) {
            throw err
          }
        })
        fs.unlink(fullPath + ".temp", (err) => {
          if (err) {
            throw err
          }
        });
      }
    })
  }
}

RenderCommand.description = `Render an entire directory
...
Provide the relative directory path with -d
Also provide a file with all the environments variables in JSON format with -e
The entire directory will be scanned and all the templates  will be renderized if is necessary
By default all the templates will be modified. Use the flag --dry-run to only renderize but not update
the files.
`

RenderCommand.flags = {
  dir: flags.string({char: 'd', description: '(Required) directory to render'}),
  envFile: flags.string({char: 'e', description: '(Required) environment file in JSON format'}),
  'dry-run': flags.boolean({description: 'render only and avoid the modification of the templates'})
}

module.exports = RenderCommand
