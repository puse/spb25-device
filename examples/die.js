const Device = require('../index');

let urv = () => Math.random() || urv();
    random = size => Math.floor(urv() * size);

class Die extends Device {
    next (entries, size) {
        let i = random(size);

        return super.next(entries[i]);
    }

    init (arr) {
        return super.init(arr, arr.length);
    }
}


let die = new Die(['A', 'B', 'C']);

let i = 0, p,
    d = [];

for (p of die)
    if (i++ < 10)
        d.push(p);
    else
        break;

Promise.all(d).then(console.log);
// [ 'C', 'C', 'B', 'A', 'A', 'B', 'B', 'C', 'C', 'A' ]
// [ 'B', 'C', 'C', 'B', 'C', 'C', 'B', 'A', 'C', 'C' ]
// [ 'B', 'A', 'B', 'A', 'C', 'A', 'B', 'A', 'C', 'A' ]
