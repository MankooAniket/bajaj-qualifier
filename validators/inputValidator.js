/**
 * Main Input Validator Module
 * Coordinates validation across all operation types
 */

const { validateFibonacci } = require('./fibonacciValidator');
const { validatePrime } = require('./primeValidator');
const { validateLCM } = require('./lcmValidator');
const { validateHCF } = require('./hcfValidator');
const { validateAI } = require('./aiValidator');

/**
 * Validate input based on operation key
 * @param {string} key
 * @param {*} value
 * @returns {object}
 */
function validateInput(key, value) {
    switch (key) {
        case 'fibonacci':
            return validateFibonacci(value);

        case 'prime':
            return validatePrime(value);

        case 'lcm':
            return validateLCM(value);

        case 'hcf':
            return validateHCF(value);

        case 'AI':
            return validateAI(value);

        default:
            return {
                valid: false,
                error: 'Invalid operation key'
            };
    }
}

module.exports = {
    validateInput
};