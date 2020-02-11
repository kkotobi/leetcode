/**
 * @description - Finds 2 numbers inside the `numbers` array that added together equal to the `target` int
 * Given nums = [2, 7, 11, 15], target = 9    returns -> [0, 1]
 * @param numbers - array of integers
 * @param target - integer
 * @returns {boolean|(any|number)[]}
 */
function twoSum(numbers = [], target = 0) {
  const numMap = new Map();
  const totalNumbers = numbers.length;
  let diff = 0;

  for (let i = 0; i < totalNumbers; i++) {
    diff = target - numbers[i];
    if (numMap.has(diff)) {
      return [numMap.get(diff), i];
    }
    numMap.set(numbers[i], i); //e.g: 2:0 , 7:1, 11:2 15:3
  }

  return false;
}

module.exports = twoSum;