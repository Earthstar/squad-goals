const chai = require('chai');
const expect = chai.expect;

const Person = require('./../src/person');


describe('Person', function() {
    describe('constructor', function() {
        it('can be constructed', function() {
            const person = new Person();
            expect(person).to.be.ok;
        });

        it('initializes property work', function() {
            const person = new Person();
            expect(person.work).to.be.ok;
        });

        it('initializes interests', function() {
            const person = new Person();
            expect(person.interests).to.be.ok;
        })
    });

});