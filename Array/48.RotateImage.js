/**
 * URL of this problem
 * https://leetcode.com/problems/rotate-image/
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
	const matrixLng = matrix.length;

	for (let i = 0; i < matrixLng; i++) {
		for (let j = i + 1; j < matrixLng; j++) {
			[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
		}
	}

	for (let i = 0; i < matrixLng; i++) {
		matrix[i].reverse();
	}
};
