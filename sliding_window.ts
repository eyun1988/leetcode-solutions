/**
 * Sliding Window Technique
 * We have an array and we slap a subset of the array with window
 * [a,b,c,d,e,f,g,h,i,j]
 *    |_______|
 *
 * Our window is from b to f.
 *
 * We ask ourselves is this the best that we can do?
 *
 * We slide our window until the end of the array and
 * find the "best" solution.
 *
 * Let's look at an algorithm problem.
 * Maximum sum of a contiguous subarray of size 3.
 *
 * We have Maximum and size of 3.
 * These are our constraints. Max and 3.
 *
 * Since we're trying to maximize a value then we can
 * initialize a variable with negative infinity which is
 * the worst possible answer.
 * Create our window of 3.
 * Then set our max to the first 3 elements.
 *
 * Slide the window and check the next 3 elements once you
 * slide it over by one until the end of the array.
 */

const maxContiguousSubArray = (nums: number[], size: number): number => {
  const len = nums.length;
  let max = Number.NEGATIVE_INFINITY;
  let sum = 0;
  // for (let i = 0; i < len - 2; i++) {
  //   sum = nums[i] + nums[i + 1] + nums[i + 2];
  //   if (sum > max) {
  //     max = sum;
  //   }
  // }
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i >= size - 1) {
      max = Math.max(max, sum);
      sum -= nums[i - (size - 1)];
    }
  }
  return max;
};

console.log(maxContiguousSubArray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3));

/**
 * Let recongize these problems in the wild.
 * - Tips:
 *      Things we iterate over 'sequentially'
 *          - contiguous sequence of elements
 *          - strings, arrays, linked list
 *      Trying to find a min, max, shortest, longest, or contained.
 *          - maybe we need to calculate/record something
 *
 * Question variants
 * Fixed length
 * - max sum subarray of size k
 *
 * Dynamic variant
 * - dynamic length
 *      smallest sum >= to some value S
 *
 * Dynamic variant w/ Auxillary Data Structure
 * - longest substring w/ no more than k distinct character/value
 * - strong permutations
 *
 *
 * Commonalities?
 * - everything grouped sequentially
 * - keywords: subarray, substring
 * - long/smallest/contains/max/min
 */

/**
 * Now try smallest subarray with given sum
 */

const minContiguousSubArray = (nums: number[], size: number): number => {
  let min = Number.POSITIVE_INFINITY;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i >= size - 1) {
      min = Math.min(min, sum);
      sum -= nums[i - (size - 1)];
    }
  }
  return min;
};

console.log(minContiguousSubArray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3));

const smallestSubArrayGivenSum = (
  nums: number[],
  targetSum: number
): number => {
  let minWindowSize = Number.POSITIVE_INFINITY;
  let currentWindowSum = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    currentWindowSum += nums[windowEnd];
    while (currentWindowSum >= targetSum) {
      minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1);
      currentWindowSum -= nums[windowStart];
      windowStart++;
    }
  }
  return minWindowSize;
};

console.log(smallestSubArrayGivenSum([4, 2, 2, 7, 8, 1, 2, 8, 10], 8));
