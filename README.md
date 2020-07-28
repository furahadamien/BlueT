
# BlueT (Node.js Bluetooth Low Energy)

_Short for Bluetooth tracker, [`bluet`](https://github.com/furahadamien/BlueT) is a node.js package that decodes data packecyts from BLE beacons. The package is build on top of a raspberry pi microprocessor but can also be run on arduino. The current version builds on MacOS and uses [`noble-mac]() which depends on an unstable mac binding in [`noble`](https://github.com/sandeepmistry/noble)._

Because the package has the noble-mac dependency, it provides an added functionlity to the one provided by  noble mac bindings using the official [CoreBluetooth API](https://developer.apple.com/documentation/corebluetooth).

## System Requirements
 * Node.js v6.14.2 or later.
 * macOS 10.7 or later

 ### OS X
 * install [Xcode](https://itunes.apple.com/ca/app/xcode/id497799835?mt=12)

 ## Installation
 run `npm install bluet --save`

## Usage
require `bluet`
```javascript
const bluet = require('bluet');
```

License
-------

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.