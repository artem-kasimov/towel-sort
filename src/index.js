module.exports = function towelSort(matrix) {
    let sorted = [];

    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) sorted = [...sorted, ...matrix[i]];
            else sorted = [...sorted, ...matrix[i].reverse()];
        }
    }

    return sorted;
};
