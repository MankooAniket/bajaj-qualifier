/**
 * Prime Validator Module
 * Validates input for prime number filtering
 */

const config = require('../config/config');

/**
 * Validate Prime input
 * @param {*} value
 * @returns {object}
 */
function validatePrime(value) {

    if (!Array.isArray(value)) {
        return {
            valid: false,
            error: 'Prime requires an array of integers'
        };
    }

    if (value.length === 0) {
        return {
            valid: false,
            error: 'Prime array cannot be empty'
        };
    }

    if (value.length > config.LIMITS.PRIME_ARRAY_MAX) {
        return {
            valid: false,
            error: `Prime array too large (max ${config.LIMITS.PRIME_ARRAY_MAX})`
        };
    }

    if (!value.every(num => Number.isInteger(num))) {
        return {
            valid: false,
            error: 'Prime array must contain only integers'
        };
    }

    return { valid: true };
}

module.exports = {
    validatePrime
};