/**
 * BFHL Controller Module
 * Handles business logic for the /bfhl endpoint
 */

const config = require('../config/config');
const { validateInput } = require('../validators/inputValidator');
const { generateFibonacci } = require('../utils/fibonacci');
const { filterPrimes } = require('../utils/prime');
const { calculateLCM, calculateHCF } = require('../utils/math');
const { queryAI } = require('../utils/ai');

/**
 * Process BFHL request
 * @param {object} req
 * @param {object} res
 */
async function processBFHL(req, res) {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                is_success: false,
                error: config.ERRORS.EMPTY_BODY
            });
        }

        const validKeys = ['fibonacci', 'prime', 'lcm', 'hcf', 'AI'];
        const keys = Object.keys(req.body);
        const operationKey = keys.find(key => validKeys.includes(key));

        if (!operationKey) {
            return res.status(400).json({
                is_success: false,
                error: config.ERRORS.INVALID_KEY
            });
        }

        if (keys.length > 1) {
            return res.status(400).json({
                is_success: false,
                error: config.ERRORS.MULTIPLE_KEYS
            });
        }

        const inputValue = req.body[operationKey];

        const validation = validateInput(operationKey, inputValue);
        if (!validation.valid) {
            return res.status(400).json({
                is_success: false,
                error: validation.error
            });
        }

        let data;

        switch (operationKey) {
            case 'fibonacci':
                data = generateFibonacci(inputValue);
                break;

            case 'prime':
                data = filterPrimes(inputValue);
                break;

            case 'lcm':
                data = calculateLCM(inputValue);
                break;

            case 'hcf':
                data = calculateHCF(inputValue);
                break;

            case 'AI':
                try {
                    data = await queryAI(inputValue);
                } catch (aiError) {
                    return res.status(503).json({
                        is_success: false,
                        error: aiError.message
                    });
                }
                break;
        }

        res.status(200).json({
            is_success: true,
            official_email: config.OFFICIAL_EMAIL,
            data: data
        });

    } catch (error) {
        console.error('Error processing BFHL request:', error);

        if (error instanceof SyntaxError) {
            return res.status(400).json({
                is_success: false,
                error: config.ERRORS.INVALID_JSON
            });
        }

        res.status(500).json({
            is_success: false,
            error: config.ERRORS.INTERNAL_ERROR
        });
    }
}

module.exports = {
    processBFHL
};