'use strict';

const _ = require('lodash');

const Person = require('./person');

class Population {
    constructor({people = []}) {
        this.people = people;
    }

    static generate(size) {
        let people = [];
        _.times(size, () => {
            people.push(Person.generate());
        });
        return new Population({people})
    }

    addPerson(person) {
        this.people.push(person)
    }
}

module.exports = Population;