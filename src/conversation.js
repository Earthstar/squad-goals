'use strict';

const Activity = require('./activity');

class Conversation extends Activity {
    constructor() {
        super();
        this.name = 'Conversation';
    }

    getChoices() {}

    getTopic() {}

    getPrompt() {
        return [{
            type: 'list',
            name: 'person',
            message: 'Talk to:',
            choices: ['Jack', 'Jill']
        }, {
            type: 'list',
            name: 'subject',
            message: 'About:',
            choices: ['Sports', 'Games']
        }];
    }
}

module.exports = Conversation;