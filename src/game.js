'use strict';

const Promise = require('bluebird');
const inquirer = require('inquirer');

const GameTime = require('./game_time');

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
    }

    prompt() {
        return inquirer.prompt([{
            type: 'list',
            name: 'value',
            message: 'Advance day',
            choices: ['advance']
        }])
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