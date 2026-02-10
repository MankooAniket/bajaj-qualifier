# BFHL REST API - Modular Architecture

A robust, production-ready REST API with modular architecture implementing Fibonacci, Prime, LCM, HCF, and AI integration using Google Gemini.

## Project Structure

```
bfhl-api/
├── config/
│   └── config.js                 # Configuration and constants
├── controllers/
│   ├── bfhlController.js         # BFHL endpoint business logic
│   └── healthController.js       # Health endpoint logic
├── middleware/
│   └── middleware.js             # Custom middleware (logging, errors)
├── routes/
│   └── routes.js                 # API route definitions
├── utils/
│   ├── ai.js                     # Google Gemini AI integration
│   ├── fibonacci.js              # Fibonacci sequence generation
│   ├── math.js                   # LCM and HCF calculations
│   └── prime.js                  # Prime number operations
├── validators/
│   ├── inputValidator.js         # Main validator coordinator
│   ├── fibonacciValidator.js     # Fibonacci input validation
│   ├── primeValidator.js         # Prime input validation
│   ├── lcmValidator.js           # LCM input validation
│   ├── hcfValidator.js           # HCF input validation
│   └── aiValidator.js            # AI input validation
├── server.js                     # Main application entry point
├── package.json                  # Dependencies and scripts
├── .gitignore                    # Git ignore rules
```

## API Endpoints

### 1. GET /health

**Response:**
```json
{
  "is_success": true,
  "official_email": "aniket0110.be23.email@chitkara.edu.in"
}
```

### 2. POST /bfhl

#### Examples with all 5 operations

**Fibonacci:**
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"fibonacci": 7}'
```
Response: `{"is_success": true, "official_email": "...", "data": [0,1,1,2,3,5,8]}`

**Prime:**
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"prime": [2,4,7,9,11]}'
```
Response: `{"is_success": true, "official_email": "...", "data": [2,7,11]}`

**LCM:**
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"lcm": [12,18,24]}'
```
Response: `{"is_success": true, "official_email": "...", "data": 72}`

**HCF:**
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"hcf": [24,36,60]}'
```
Response: `{"is_success": true, "official_email": "...", "data": 12}`

**AI:**
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"AI": "What is the capital city of Maharashtra?"}'
```
Response: `{"is_success": true, "official_email": "...", "data": "Mumbai"}`

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Google Gemini API key

### Quick Start

1. **Clone and install:**
```bash
git clone <your-repo-url>
cd bfhl-api
npm install
```

2. **Get Gemini API Key from https://aistudio.google.com**

3. **Configure environment:**
```bash
touch .env
# Edit .env with your email and API key
```

4. **Run:**
```bash
npm start
```

## Error Handling

All errors return proper HTTP status codes with structured responses:

| Status | Meaning | Example |
|--------|---------|---------|
| 200 | Success | Valid request processed |
| 400 | Bad Request | Invalid input, wrong type |
| 404 | Not Found | Invalid endpoint |
| 500 | Server Error | Internal processing error |
| 503 | Service Unavailable | AI API down |

## Security

- Helmet.js security headers
- CORS enabled
- Request size limits (10mb)
- Input validation on all requests
- No sensitive data in error messages
- Environment variables for secrets

## Tech Stack

- Node.js + Express.js
- Google Gemini API
- Helmet.js (Security)
- Axios (HTTP client)
- Modular architecture

