'use strict';

class Activity {
    constructor() {
        this.participants = [];
        this.name = ''
    }

    addParticipant(person) {
        this.participants.push(person);
    }

    isComplete() {}

    timeIncrement() {}

    getPrompt() {}
}

module.exports = Activity;