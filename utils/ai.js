/**
 * AI Utility Module
 * Handles integration with Google Gemini API
 */

const axios = require('axios');
const config = require('../config/config');

/**
 * Query AI using Google Gemini API
 * @param {string} question
 * @returns {Promise<string>}
 * @throws {Error}
 */
async function queryAI(question) {
    if (!config.GEMINI_API_KEY || config.GEMINI_API_KEY === 'your_gemini_api_key_here') {
        throw new Error(config.ERRORS.GEMINI_NOT_CONFIGURED);
    }

    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${config.GEMINI_API_KEY}`;

        const response = await axios.post(url, {
            contents: [{
                parts: [{
                    text: `Answer the following question with ONLY a single word or short phrase (maximum 3 words). Do not provide explanations or additional context.\n\nQuestion: ${question}\n\nAnswer:`
                }]
            }],
            generationConfig: {
                temperature: 0.1,
                maxOutputTokens: 20,
            }
        }, {
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.data?.candidates?.[0]?.content?.parts?.[0]?.text) {
            let answer = response.data.candidates[0].content.parts[0].text.trim();

            answer = answer.split('\n')[0].trim();
            answer = answer.replace(/['"]/g, '');

            const words = answer.split(' ');
            answer = words.slice(0, 3).join(' ');

            return answer;
        }

        throw new Error('Invalid AI response format');

    } catch (error) {
        if (error.response?.status === 429) {
            throw new Error(config.ERRORS.GEMINI_RATE_LIMIT);
        }
        if (error.code === 'ECONNABORTED') {
            throw new Error(config.ERRORS.GEMINI_TIMEOUT);
        }
        throw new Error(error.message || config.ERRORS.GEMINI_ERROR);
    }
}

module.exports = {
    queryAI
};
