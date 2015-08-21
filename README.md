`except` lets you return a copy of an object with specific properties removed/blacklisted

# Installation

`npm install @aweary/except`


# Usage

```js
var except = require('@aweary/except')

var obj = { x: 1, y: 2, z: 3}
except(obj, 'x')
/* > { y: 2, z: 3 } */
except(obj, 'x y')
/* > { z: 3 } */
except(obj, ['x', 'y'])
/* > { z: 3 } */
