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
$ npm install -g google-blocked
$ blocked COMMAND
running command...
$ blocked (--version)
google-blocked/1.0.2 darwin-x64 node-v16.15.0
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

_See code: [dist/commands/hello/index.ts](https://github.com/cuimingda/google-blocked/blob/v1.0.2/dist/commands/hello/index.ts)_

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
<!-- commandsstop -->
