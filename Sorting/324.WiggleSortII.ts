/**
 * URL of this problem
 * https://leetcode.com/problems/wiggle-sort-ii/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
	const sortedNums = nums.slice().sort((a, b) => a - b);

	const n = nums.length;
	const mid = Math.floor((n + 1) / 2);
	const smallHalf = sortedNums.slice(0, mid);
	const largeHalf = sortedNums.slice(mid);

	for (let i = 0; i < nums.length; i++) {
		nums[i] = i % 2 === 0 ? smallHalf.pop() : largeHalf.pop();
	}
};
