import test from 'ava';

import Device from '..';


test('Use Promise', t => {
    const device = new Device();

    const val = device.derive();

    t.is(typeof val.then, 'function');
});


test('Pass arguments', async t => {
    const hopar = new Device('exo');

    t.is(await hopar.derive(), 'exo');
});


test('Throw all devices', async t => {
    let exo = new Device('exo'),
        hopar = new Device(exo);

    t.is(await hopar.derive(), 'exo');
});
