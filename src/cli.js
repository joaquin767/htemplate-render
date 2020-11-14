
import { chdir } from "process";
import arg from 'arg';
import inquirer from 'inquirer';
const glob = require("glob")
const Handlebars = require("handlebars");
const fs = require('fs');
const path = require('path')
function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--help': Boolean,
      '-h': '--help'
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    envFile: args._[0],
    dir: args._[1]
    // runInstall: args['--install'] || false,
  };
}
async function promptForMissingOptions(options) {
  const defaultDir = './';
  const defaultEnvFile = './default.json';
  const questions = [];
  if (!options.envFile) {
    questions.push({
      type: 'string',
      name: 'envFile',
      message: 'Please type the relative path from the envFile(JSON only)',
      default: defaultEnvFile
    });
  }
  if (!options.dir) {
    questions.push({
      type: 'string',
      name: 'dir',
      message: 'Please type the relative path from the directory to render',
      default: defaultDir
    });
  }
  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    dir: options.dir || answers.dir,
    envFile: options.envFile || answers.envFile
  };

  //  if (!options.git) {
  //    questions.push({
  //      type: 'confirm',
  //      name: 'git',
  //      message: 'Initialize a git repository?',
  //      default: false,
  //    });
  //  }
}
export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  console.log(options);
  const envFile = require(process.cwd() + "/" + options.envFile);
  console.log(envFile);
  chdir(options.dir);
  glob("**/*.{conf,yml,js,yaml}", { ignore: "node_modules/**/*.*" }, function (er, files) {
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      console.log(element);
      // Get file absolute path
      const fullPath = path.resolve(element);
      // Rename template to a temp file
      fs.renameSync(fullPath, fullPath + ".temp");
      // Read temp file
      const templateFile = fs.readFileSync(process.cwd() + "/" + element + ".temp", 'utf8');
      const template = Handlebars.compile(templateFile);
      // Render template
      const renderedTemplate = template(envFile);
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
