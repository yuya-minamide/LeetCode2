/**
 * URL of this problem
 * https://leetcode.com/problems/find-words-containing-character/
 */

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
	const result = [];

	for (let i = 0; i < words.length; i++) {
		const charArr = words[i].split("");
		for (let j = 0; j < charArr.length; j++) {
			if (charArr[j] === x) {
				result.push(i);
				break;
			}
		}
	}

	return result;
};
