/**
 * Middleware Module
 * Contains custom middleware functions
 */

const config = require('../config/config');

/**
 * Request logging middleware
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
function requestLogger(req, res, next) {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
}

/**
 * 404 Not Found handler
 * @param {object} req
 * @param {object} res
 */
function notFoundHandler(req, res) {
    res.status(404).json({
        is_success: false,
        error: config.ERRORS.ENDPOINT_NOT_FOUND
    });
}

/**
 * Global error handler
 * @param {Error} err
 * @param {object} req
 * @param {object} res
 * @param {function} next 
 */
function errorHandler(err, req, res, next) {
    console.error('Unhandled error:', err);

    res.status(err.status || 500).json({
        is_success: false,
        error: err.message || config.ERRORS.INTERNAL_ERROR
    });
}

module.exports = {
    requestLogger,
    notFoundHandler,
    errorHandler
};