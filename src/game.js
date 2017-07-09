'use strict';

const Promise = require('bluebird');
const inquirer = require('inquirer');

const GameTime = require('./game_time');
const Conversation = require('./conversation');

function promiseWhile(condition, action) {
    const resolver = Promise.defer();

    const loop = function() {
        if (!condition()) {
            return resolver.resolve();
        }
        return Promise.resolve()
        .then(() => {
            return action();
        })
        .then(function() {
            return loop()
        })
        .catch(resolver.reject);
    };

    process.nextTick(loop);

    return resolver.promise;
}

class Game {
    constructor() {
        this.gameTime = new GameTime();
        this.activity = new Conversation();
    }

    prompt() {
        return inquirer.prompt(this.activity.getPrompt());
    }

    update() {
        this.gameTime.incrementDate();
    }

    render() {
        console.log(`The day is: ${this.gameTime.date}`)
    }

    main() {
        this.render();
        return promiseWhile(() => {
            return this.gameTime.date < 2;
        }, () => {
            return this.prompt()
            .then((answers) => {
                this.update(answers);
                this.render();
            });
        })
        .then(() => {
            console.log('the game is over')
        })
    }
}

module.exports = Game;