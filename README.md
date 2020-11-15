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
htemplate-render/0.0.1 linux-x64 node-v10.19.0
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

_See code: [src/commands/render.js](https://github.com/joaquin767/htemplate-render/blob/v0.0.1/src/commands/render.js)_
<!-- commandsstop -->
