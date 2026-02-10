/**
 * Routes Module
 * Defines API routes and maps them to controllers
 */

const express = require('express');
const router = express.Router();

const { healthCheck } = require('../controllers/healthController');
const { processBFHL } = require('../controllers/bfhlController');

// Health check endpoint
router.get('/health', healthCheck);

// Main BFHL endpoint
router.post('/bfhl', processBFHL);

module.exports = router;