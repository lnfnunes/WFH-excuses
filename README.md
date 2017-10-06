# WFH-excuses
Working from Home excuses generator

> Funny excuses generator to use when you have to Work From Home (#WFH).

[![NPM][npm-image] ][npm-url]

[![npm version][version-image]][version-url]
[![Build Status][ci-image]][ci-url]
[![Coverage Status][coverage-image]][coverage-url]

![#WFH](https://media.tenor.com/images/9516072e24d292492bfb7975a1b0c774/tenor.gif)

## Usage
```js
const wfh = require('wfh-excuses')()
console.log(wfh.pick());     // random excuse in default language (en)
console.log(wfh.pick('pt')); // random excuse in custom language (pt)
```

### Initialize with custom language
```js
const wfh = require('wfh-excuses')('pt') // Set default to 'pt'
console.log(wfh.pick());     // random excuse in default language (pt)
console.log(wfh.pick('en')); // random excuse in custom language (en)
```

## License
[ISC License](LICENSE.md) © Leandro Nunes

**Support:** if you find any problems, [open issue](https://github.com/lnfnunes/wfh-excuses/issues)

[npm-image]: https://nodei.co/npm/wfh-excuses.svg?downloads=true
[npm-url]: https://npmjs.org/package/wfh-excuses
[version-image]: https://badge.fury.io/js/wfh-excuses.svg
[version-url]: https://badge.fury.io/js/wfh-excuses
[ci-image]: https://travis-ci.org/lnfnunes/WFH-excuses.svg?branch=master
[ci-url]: https://travis-ci.org/lnfnunes/WFH-excuses
[coverage-image]: https://coveralls.io/repos/github/lnfnunes/WFH-excuses/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/lnfnunes/WFH-excuses?branch=master
