/**
 * Fibonacci Validator Module
 * Validates input for Fibonacci sequence generation
 */

const config = require('../config/config');

/**
 * Validate Fibonacci input
 * @param {*} value
 * @returns {object}
 */
function validateFibonacci(value) {
    if (!Number.isInteger(value)) {
        return {
            valid: false,
            error: 'Fibonacci requires an integer'
        };
    }

    if (value < 0) {
        return {
            valid: false,
            error: 'Fibonacci requires a non-negative integer'
        };
    }

    if (value > config.LIMITS.FIBONACCI_MAX) {
        return {
            valid: false,
            error: `Fibonacci limit exceeded (max ${config.LIMITS.FIBONACCI_MAX})`
        };
    }

    return { valid: true };
}

module.exports = {
    validateFibonacci
};