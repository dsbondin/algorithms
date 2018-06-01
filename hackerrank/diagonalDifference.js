// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(a) {
    const n = a.length;
    let dia1 = 0, dia2 = 0;
    for (let i = 0; i < n; i++) {
        dia1 += a[i][i];
        dia2 += a[i][n - i - 1];
    }
    return Math.abs(dia1 - dia2);
}
