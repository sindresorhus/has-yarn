# has-yarn [![Build Status](https://travis-ci.org/sindresorhus/has-yarn.svg?branch=master)](https://travis-ci.org/sindresorhus/has-yarn)

> Check if [Yarn](https://yarnpkg.com) is used in a project or installed on the machine.

Useful for tools that needs to know whether to use `yarn` or `npm` to install dependencies.

- When checking whether a project is using yarn, it checks if a `yarn.lock` file is present in the working directory.

- When checking if yarn is installed on the machine it executes a silent shell command to check if yarn has been installed on the machine or not.

## Install

```
$ npm install has-yarn
```

## Usage

```
.
├── foo
│   └── package.json
└── bar
    ├── package.json
    └── yarn.lock
```

```js
const hasYarn = require('has-yarn');

hasYarn('foo');
//=> false

hasYarn('bar');
//=> true

// with options object
hasYarn({onMachine : true});
//=> true if yarn is installed on the machine otherwise false.

```

## API

### hasYarn([cwd | options])

Returns a `boolean`.

#### cwd

Type: `string` <br>

Default: `process.cwd()`

Current working directory.

#### options

Type: `object`<br>

##### options.onMachine

Type: `boolean`<br>

If set to true, will check if yarn is installed on the machine otherwise will fallback to `hasYarn` in the current working directory.

```js
hasYarn({onMachine : false}); // is the same as
hasYarn();

```

## Related

- [has-yarn-cli](https://github.com/sindresorhus/has-yarn-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
