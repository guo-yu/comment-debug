## comment-debug ![NPM version](https://img.shields.io/npm/v/comment-debug.svg?style=flat) 

a debug helper base on comment-macro.

### Installation
```bash
$ npm install comment-debug
```

### Example
```js
var commentDebug = require('comment-debug');
var converter = new commentDebug();

// Start process
converter.process('//: <myNamespace> var `a` is {a}');

// => 'debug('comment-debug:myNamespace')("var `a` is 3")'
```
Test the example convert file in `./example` folder, or by command `npm run example`.
this command will build the dist file `./example/example.out.js`, you can check out the file to understand what had happend.

```bash
$ npm run example
$ npm test
```

### Cli
This module provides command line interface:

```bash
$ comment-debug \
  example.js example2.js \
  -v '{{}}' \
  -n '[]' \
  -o ./dist \
```

#### Cli options:
- `-o`: Custom the target output folder based on `cwd`, by default, dist files will be created in the same `cwd`.
- `-n`: Custom `subNamespaceMarker`, by default, it is `<>`.
- `-v`: Custom `varsMarker`, by default, it is `{}`.

### API
check this file: `index.js`

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2014 turing &lt;o.u.turing@Gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor](https://raw.githubusercontent.com/turingou/docor/master/docor.png)
built upon love by [docor](https://github.com/turingou/docor.git) v0.2.0