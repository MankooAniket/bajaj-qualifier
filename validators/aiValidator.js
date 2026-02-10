/**
 * AI Validator Module
 * Validates input for AI question processing
 */

const config = require('../config/config');

/**
 * Validate AI input
 * @param {*} value
 * @returns {object}
 */
function validateAI(value) {
    if (typeof value !== 'string') {
        return {
            valid: false,
            error: 'AI requires a string question'
        };
    }

    if (value.trim().length === 0) {
        return {
            valid: false,
            error: 'AI question cannot be empty'
        };
    }

    if (value.length > config.LIMITS.AI_QUESTION_MAX_LENGTH) {
        return {
            valid: false,
            error: `AI question too long (max ${config.LIMITS.AI_QUESTION_MAX_LENGTH} characters)`
        };
    }

    return { valid: true };
}

module.exports = {
    validateAI
};