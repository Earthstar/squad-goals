'use strict';

const _ = require('lodash');

const INTERESTS = ['sports', 'gaming'];

class Interest {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
}

class Person {
    constructor({
                    name = '',
                    work = 0,
                    trust = 0,
                    enthusiasm = 0,
    } = {}) {
        this.name = name;
        this.work = work;
        this.trust = trust;
        this.enthusiasm = enthusiasm;

        this.interests = _.map(INTERESTS, (interestName) => new Interest(interestName, 0));

        this.relationship = 0;
    }


    /**
     * @param {String} interest
     * @return {Number} level of interest
     */
    getInterest(interest) {
        return 0;
    }

}

module.exports = Person;