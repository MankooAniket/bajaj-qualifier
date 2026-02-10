/**
 * LCM Validator Module
 * Validates input for Least Common Multiple calculation
 */

const config = require('../config/config');

/**
 * Validate LCM input
 * @param {*} value
 * @returns {object}
 */
function validateLCM(value) {

    if (!Array.isArray(value)) {
        return {
            valid: false,
            error: 'LCM requires an array of integers'
        };
    }

    if (value.length === 0) {
        return {
            valid: false,
            error: 'LCM array cannot be empty'
        };
    }

    if (value.length > config.LIMITS.LCM_ARRAY_MAX) {
        return {
            valid: false,
            error: `LCM array too large (max ${config.LIMITS.LCM_ARRAY_MAX})`
        };
    }

    if (!value.every(num => Number.isInteger(num) && num !== 0)) {
        return {
            valid: false,
            error: 'LCM array must contain only non-zero integers'
        };
    }

    return { valid: true };
}

module.exports = {
    validateLCM
};