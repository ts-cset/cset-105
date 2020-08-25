/**
 * NUMERAL SYSTEMS
 *
 * CSET-105: Intro to Web Apps
 */

/**
 * Create a random decimal number
 *
 * @param {number} max - Upper limit, exclusive, defaults to 10
 * @return {number}
 */
const randomDecimal = (max = 10) => {
  return Math.floor(Math.random() * max);
};


/**
 * Create a random binary number as string
 *
 * @param {number} digits - Number of binary digits, defaults to 4
 * @return {string}
 */
const randomBinary = (digits = 4) => {
  return Array(digits).fill().map(_ => randomDecimal(2)).join('');
};


/**
 * Convert binary number to decimal
 *
 * @param {string} bits - String to convert
 * @return {number}
 */
const binaryToDecimal = (bits) => parseInt(bits, 2);


/**
 * Convert decimal number to binary
 *
 * @param {number} num - Number to convert
 * @return {string}
 */
const decimalToBinary = (num) => num.toString(2);


module.exports = {
  randomDecimal,
  randomBinary,
  binaryToDecimal,
  decimalToBinary,
};
