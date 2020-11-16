Handlebars template render
===============

Provide an easy, direct and powerful way to renderize an entire directory of templates using handlebars templates (with all the benefits that this implies). All the features of the templetes from handlebars are available to renderize

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/htemplate-render.svg)](https://npmjs.org/package/htemplate-render)
[![Downloads/week](https://img.shields.io/npm/dw/htemplate-render.svg)](https://npmjs.org/package/htemplate-render)
[![License](https://img.shields.io/npm/l/htemplate-render.svg)](https://github.com/joaquin767/template-parser/htemplate-render/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g htemplate-render
$ htemplate-render COMMAND
running command...
$ htemplate-render (-v|--version|version)
htemplate-render/0.0.4 linux-x64 node-v10.19.0
$ htemplate-render --help [COMMAND]
USAGE
  $ htemplate-render COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`htemplate-render help [COMMAND]`](#htemplate-render-help-command)
* [`htemplate-render render`](#htemplate-render-render)

## `htemplate-render help [COMMAND]`

display help for htemplate-render

```
USAGE
  $ htemplate-render help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `htemplate-render render`

Render an entire directory

```
USAGE
  $ htemplate-render render

OPTIONS
  -d, --dir=dir          (Required) directory to render
  -e, --envFile=envFile  (Required) environment file in JSON format
  --dry-run              render only and avoid the modification of the templates

DESCRIPTION
  ...
  Provide the relative directory path with -d
  Also provide a file with all the environments variables in JSON format with -e
  The entire directory will be scanned and all the templates  will be renderized if is necessary
  By default all the templates will be modified. Use the flag --dry-run to only renderize but not update
  the files.
```

_See code: [src/commands/render.js](https://github.com/joaquin767/htemplate-render/blob/v0.0.4/src/commands/render.js)_
<!-- commandsstop -->
## Example:
### Template:
![Screenshot_20201116_080336](https://user-images.githubusercontent.com/47214308/99245450-5b225180-27e2-11eb-9fc2-7cea5fca67c2.png)
### Env file in JSON format:
![Screenshot_20201116_083636](https://user-images.githubusercontent.com/47214308/99248236-e30a5a80-27e6-11eb-91d7-61ce2a4608f5.png)
### Renderized file:
![Screenshot_20201116_083826](https://user-images.githubusercontent.com/47214308/99248382-1e0c8e00-27e7-11eb-8f03-adc4821fba0e.png)
