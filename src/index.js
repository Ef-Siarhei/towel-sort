module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return []
    } else {
        for (let i = 1; i < matrix.length; i += 2) {
            matrix[i].sort((a, b) => b - a)
        }
        return matrix.flat()
    }
}
