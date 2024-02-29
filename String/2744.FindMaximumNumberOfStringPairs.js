/**
 * URL of this problem
 * https://leetcode.com/problems/find-maximum-number-of-string-pairs/
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
	let counter = 0;

	for (let i = 0; i < words.length - 1; i++) {
		for (let j = i + 1; j < words.length; j++) {
			if (words[i] === words[j].split("").reverse().join("")) {
				counter++;
			}
		}
	}

	return counter;
};
