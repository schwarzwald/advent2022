module.exports = input => [...input].findIndex((v, i, arr) => i > 2 && new Set(arr.slice(i - 13, i + 1)).size == 14) + 1;