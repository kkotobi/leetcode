/**
 * @description Takes an integer and reverses it, the int is a signed 32 bit max
 * Given
 *  Example 1:
 *    Input: 123
 *    Output: 321
 *
 *  Example 2:
 *    Input: -123
 *     Output: -321
 *
 *  Example 3:
 *    Input: 120
 *    Output: 21
 *
 * @param number {number}
 * @returns {number}
 */
function reverse(number) {
  const reversedNumber = Number(
    Math.abs(number)
      .toString()
      .split('')
      .reverse().join('')
  ) * Math.sign(number);
  return (reversedNumber <= 0x7fffffff && reversedNumber >= -0x80000000) ? reversedNumber : 0;
}

module.exports = reverse;