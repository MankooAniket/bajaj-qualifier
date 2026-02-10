/**
 * Health Controller Module
 * Handles health check endpoint
 */

const config = require('../config/config');

/**
 * Health check handler
 * @param {object} req
 * @param {object} res
 */
function healthCheck(req, res) {
    res.status(200).json({
        is_success: true,
        official_email: config.OFFICIAL_EMAIL
    });
}

module.exports = {
    healthCheck
};