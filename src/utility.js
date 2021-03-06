'use strict';

module.exports = {
    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    getRandomInt: function getRandomInt(max, min = 0) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};