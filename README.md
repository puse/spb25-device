# Device

Base class for random devices

### Example

~~~js
const Device = require('spb25-device');

const random = x => Math.floor(Math.random() * x);

class RandomNatural extends Device {
    next (limit) {
        return super.next(random(limit));
    }
    init (limit) {
        return super.init(limit);
    }
}

let die = new RandomNatural(10);

die.derive().then(console.log); // '6'
~~~


## Install

~~~sh
npm install spb25-device
~~~

## API

- `.derive()`

### License

MIT License
