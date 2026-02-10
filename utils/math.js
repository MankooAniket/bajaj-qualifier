/**
 * LCM and HCF/GCD Utility Module
 * Handles calculation of Least Common Multiple and Highest Common Factor
 */

/**
 * Calculate GCD (Greatest Common Divisor) of two numbers using Euclidean algorithm
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

/**
 * Calculate LCM (Least Common Multiple) of two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function lcm(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / gcd(a, b);
}

/**
 * Calculate HCF (Highest Common Factor) of an array of numbers
 * @param {number[]} arr
 * @returns {number}
 */
function calculateHCF(arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((acc, val) => gcd(acc, val));
}

/**
 * Calculate LCM of an array of numbers
 * @param {number[]} arr
 * @returns {number}
 */
function calculateLCM(arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((acc, val) => lcm(acc, val));
}

module.exports = {
    gcd,
    lcm,
    calculateHCF,
    calculateLCM
};