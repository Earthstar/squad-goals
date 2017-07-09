'use strict';

class Activity {
    constructor({
                    participants = [],
                    name = ''
    } = {}) {
        this.participants = participants;
        this.name = name
    }

    addParticipant(person) {
        this.participants.push(person);
    }

    isComplete() {}

    timeIncrement() {}

    getPrompt() {}
}

module.exports = Activity;