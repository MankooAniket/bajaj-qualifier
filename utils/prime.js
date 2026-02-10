/**
 * Prime Numbers Utility Module
 * Handles prime number detection and filtering
 */

/**
 * Check if a number is prime
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

/**
 * Filter prime numbers from an array
 * @param {number[]} arr
 * @returns {number[]}
 */
function filterPrimes(arr) {
    return arr.filter(num => isPrime(num));
}

module.exports = {
    isPrime,
    filterPrimes
};