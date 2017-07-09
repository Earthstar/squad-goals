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
    constructor() {
        this.name = '';
        this.work = 0;
        this.trust = 0;
        this.enthusiasm = 0;

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