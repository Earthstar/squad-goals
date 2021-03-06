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
            expect(person.work).to.equal(0);
        });

        it('initializes interests', function() {
            const person = new Person();
            expect(person.interests).to.be.ok;
        });
    });

    describe('generate', function() {
        it('can generate a random person', function() {
            const person = Person.generate();
            expect(person.name).to.be.ok;
            expect(person.work).to.be.ok;
            expect(person.trust).to.be.ok;
            expect(person.enthusiasm).to.be.ok;
        });
    });
});