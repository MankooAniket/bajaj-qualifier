/**
 * BFHL REST API Server
 * Main entry point for the application
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const config = require('./config/config');
const routes = require('./routes/routes');
const { requestLogger, notFoundHandler, errorHandler } = require('./middleware/middleware');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: config.LIMITS.REQUEST_SIZE_LIMIT }));
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
app.use('/', routes);
app.use(notFoundHandler);
app.use(errorHandler);

const server = app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
    console.log(`Official email: ${config.OFFICIAL_EMAIL}`);
    console.log(`Gemini API configured: ${!!config.GEMINI_API_KEY && config.GEMINI_API_KEY !== 'your_gemini_api_key_here'}`);

});

process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

module.exports = app;