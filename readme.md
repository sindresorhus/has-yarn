# has-yarn

> Check if a project is using [Yarn](https://yarnpkg.com)

Useful for tools that needs to know whether to use `yarn` or `npm` to install dependencies.

It checks for a `yarn.lock` file in the given directory or any of its parent directories (useful for Yarn workspaces).

## Install

```sh
npm install has-yarn
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
import hasYarn from 'has-yarn';

hasYarn('foo');
//=> false

hasYarn('bar');
//=> true

// In a Yarn workspace
hasYarn('bar/packages/some-package');
//=> true
```

## API

### hasYarn(cwd?)

Returns a `boolean` of whether the project uses Yarn.

#### cwd

Type: `string`\
Default: `process.cwd()`

The directory to check. The search also walks up parent directories until the filesystem root.

## Related

- [has-yarn-cli](https://github.com/sindresorhus/has-yarn-cli) - CLI for this module
