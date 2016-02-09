
# form-controls

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Retrieve a list of [control elements](https://github.com/micro-js/form-elements) from a form

## Installation

    $ npm install @f/form-controls

## Usage

```js
var controls = require('@f/form-controls')

function serialize (form) {
  return controls
    .reduce(function (acc, ctrl) {
      acc[ctrl.name] = ctrl.value
      return acc
    }, {})
}
```

## API

### formControls(form)

- `form` - An [HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement).

**Returns:** An array of input controls within `form`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/form-controls.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/form-controls
[git-image]: https://img.shields.io/github/tag/micro-js/form-controls.svg
[git-url]: https://github.com/micro-js/form-controls
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/form-controls.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/form-controls
