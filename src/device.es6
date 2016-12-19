let result = x => typeof x == 'function' ? x() : x;

class Device {
    constructor (...args) {
        this.args = args;
    }

    /**
     * Generate a value
     * @returns {Promise}
     * @public
     */
    derive () {
        let awaitIndex = this.index;

        // no cache
        if (!awaitIndex)
            this.index =
            awaitIndex = this.init(...this.args); // lazy

        let yieldNext = args => {
                let next = res => {
                        // use if `Device` to get result
                        if (res instanceof Device)
                            res = res.derive();

                        return Promise.resolve(res);
                    };

                return this.next(...args) // spread arguments
                    .then(next);
            };

        return awaitIndex.then(yieldNext);
    }

    /**
     * Get next value
     * @param {...Array} args resolved on init
     * @returns {Promise}
     * @private
     */
    next (...args) {
        return Promise.resolve(...args);
    }

    /**
     * Initialize
     * @param  {...Array} args from constructor
     * @returns {Promise<Array>}
     * @private
     */
    init (...args) {
        // pass arguments as array
        return Promise.resolve(args);
    }

    /**
     * Check if is finished
     * @returns {Boolean}
     * @private
     */
    done () {
        // infinite
        return false;
    }

    // Sugar
    get [Symbol.toStringTag] () {
        return this.constructor.name;
    }

    // Behave as iterable
    * [Symbol.iterator] () {
        while (!result(this.done))
            yield this.valueOf();
    }

    valueOf () {
        return this.derive();
    }
}

module.exports = Device;
