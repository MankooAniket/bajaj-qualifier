require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    OFFICIAL_EMAIL: process.env.OFFICIAL_EMAIL,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,

    LIMITS: {
        FIBONACCI_MAX: 1000,
        PRIME_ARRAY_MAX: 10000,
        LCM_ARRAY_MAX: 100,
        HCF_ARRAY_MAX: 100,
        AI_QUESTION_MAX_LENGTH: 500,
        REQUEST_SIZE_LIMIT: '10mb'
    },

    ERRORS: {
        EMPTY_BODY: 'Request body is required',
        INVALID_KEY: 'Request must contain exactly one of: fibonacci, prime, lcm, hcf, AI',
        MULTIPLE_KEYS: 'Request must contain exactly one operation key',
        GEMINI_NOT_CONFIGURED: 'Gemini API key not configured',
        GEMINI_RATE_LIMIT: 'AI API rate limit exceeded',
        GEMINI_TIMEOUT: 'AI API timeout',
        GEMINI_ERROR: 'AI API error',
        ENDPOINT_NOT_FOUND: 'Endpoint not found',
        INTERNAL_ERROR: 'Internal server error',
        INVALID_JSON: 'Invalid JSON format'
    }
};