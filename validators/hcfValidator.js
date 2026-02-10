/**
 * HCF Validator Module
 * Validates input for Highest Common Factor calculation
 */

const config = require('../config/config');

/**
 * Validate HCF input
 * @param {*} value
 * @returns {object}
 */
function validateHCF(value) {

    if (!Array.isArray(value)) {
        return {
            valid: false,
            error: 'HCF requires an array of integers'
        };
    }

    if (value.length === 0) {
        return {
            valid: false,
            error: 'HCF array cannot be empty'
        };
    }

    if (value.length > config.LIMITS.HCF_ARRAY_MAX) {
        return {
            valid: false,
            error: `HCF array too large (max ${config.LIMITS.HCF_ARRAY_MAX})`
        };
    }

    if (!value.every(num => Number.isInteger(num))) {
        return {
            valid: false,
            error: 'HCF array must contain only integers'
        };
    }

    return { valid: true };
}

module.exports = {
    validateHCF
};