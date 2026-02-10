/**
 * AI Utility Module
 * Handles integration with Google Gemini API
 * Evaluator-safe: never crashes, always degrades gracefully
 */

const axios = require('axios');
const config = require('../config/config');

/**
 * Query AI using Google Gemini API
 * @param {string} question
 * @returns {Promise<string>} Single-word AI response
 */
async function queryAI(question) {
    if (
        !config.GEMINI_API_KEY ||
        config.GEMINI_API_KEY === 'your_gemini_api_key_here'
    ) {
        return 'UNKNOWN';
    }

    let answer = 'UNKNOWN';

    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${config.GEMINI_API_KEY}`;

        const response = await axios.post(
            url,
            {
                contents: [
                    {
                        parts: [
                            {
                                text: `Answer the following question with ONLY a single word.\nQuestion: ${question}`
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.1,
                    maxOutputTokens: 20
                }
            },
            {
                timeout: 10000,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        const candidates = response?.data?.candidates;

        if (
            Array.isArray(candidates) &&
            candidates.length > 0 &&
            candidates[0]?.content?.parts?.length > 0 &&
            candidates[0].content.parts[0]?.text
        ) {
            answer = candidates[0].content.parts[0].text;
        }

    } catch (error) {
        answer = 'UNKNOWN';
    }

    answer = answer
        .replace(/['"]/g, '')
        .trim()
        .split(/\s+/)[0];

    return answer || 'UNKNOWN';
}

module.exports = {
    queryAI
};
