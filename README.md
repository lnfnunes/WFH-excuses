# WFH-excuses
Working from Home excuses generator

> Funny excuses generator to use when you have to Work From Home (#WFH).

[![Build Status](https://travis-ci.org/lnfnunes/WFH-excuses.svg?branch=master)](https://travis-ci.org/lnfnunes/WFH-excuses)
[![Coverage Status](https://coveralls.io/repos/github/lnfnunes/WFH-excuses/badge.svg?branch=master)](https://coveralls.io/github/lnfnunes/WFH-excuses?branch=master)

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
