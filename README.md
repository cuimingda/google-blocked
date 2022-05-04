oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @cuimingda/blocked
$ blocked COMMAND
running command...
$ blocked (--version)
@cuimingda/blocked/1.0.1 darwin-x64 node-v16.15.0
$ blocked --help [COMMAND]
USAGE
  $ blocked COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`blocked hello PERSON`](#blocked-hello-person)
* [`blocked hello world`](#blocked-hello-world)
* [`blocked help [COMMAND]`](#blocked-help-command)
* [`blocked plugins`](#blocked-plugins)
* [`blocked plugins:install PLUGIN...`](#blocked-pluginsinstall-plugin)
* [`blocked plugins:inspect PLUGIN...`](#blocked-pluginsinspect-plugin)
* [`blocked plugins:install PLUGIN...`](#blocked-pluginsinstall-plugin-1)
* [`blocked plugins:link PLUGIN`](#blocked-pluginslink-plugin)
* [`blocked plugins:uninstall PLUGIN...`](#blocked-pluginsuninstall-plugin)
* [`blocked plugins:uninstall PLUGIN...`](#blocked-pluginsuninstall-plugin-1)
* [`blocked plugins:uninstall PLUGIN...`](#blocked-pluginsuninstall-plugin-2)
* [`blocked plugins update`](#blocked-plugins-update)

## `blocked hello PERSON`

Say hello

```
USAGE
  $ blocked hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/cuimingda/blocked/blob/v1.0.1/dist/commands/hello/index.ts)_

## `blocked hello world`

Say hello world

```
USAGE
  $ blocked hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `blocked help [COMMAND]`

Display help for blocked.

```
USAGE
  $ blocked help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for blocked.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `blocked plugins`

List installed plugins.

```
USAGE
  $ blocked plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ blocked plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `blocked plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ blocked plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ blocked plugins add

EXAMPLES
  $ blocked plugins:install myplugin 

  $ blocked plugins:install https://github.com/someuser/someplugin

  $ blocked plugins:install someuser/someplugin
```

## `blocked plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ blocked plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ blocked plugins:inspect myplugin
```

## `blocked plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ blocked plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ blocked plugins add

EXAMPLES
  $ blocked plugins:install myplugin 

  $ blocked plugins:install https://github.com/someuser/someplugin

  $ blocked plugins:install someuser/someplugin
```

## `blocked plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ blocked plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ blocked plugins:link myplugin
```

## `blocked plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ blocked plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ blocked plugins unlink
  $ blocked plugins remove
```

## `blocked plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ blocked plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ blocked plugins unlink
  $ blocked plugins remove
```

## `blocked plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ blocked plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ blocked plugins unlink
  $ blocked plugins remove
```

## `blocked plugins update`

Update installed plugins.

```
USAGE
  $ blocked plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
