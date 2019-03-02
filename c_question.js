const R = require('ramda');

(stdin => {

  // convert code
  const convert = list => R.map(c => parseInt(R
    .replace('g', 0, c)
    .replace('c', 1, c)
    .replace('p', 2, c)), list, 10)

  // judge code

  const judge = (a, b) => R.modulo(R.add(R.subtract(b, a), 3), 3);

  // countWinLose code

  const countWinLose = f => ((acc, [car, cdr]) => {
    acc[f(car, cdr)] += 1
    return acc
  })
  // inputs code
  const inputs = R.split('\n', stdin);
  // Main code
  const result = ((N, matrix) => {
    const countTable = [0, 0, 0]
    const countadd = countWinLose(judge)
    return R.map(convert, matrix)
      .reduce(countadd, countTable)
      .slice(1, Infinity, countTable)
  })(inputs.shift(), R.map(v => v.split(' '), inputs));

  console.log(R.join('\n', result));

})(require('fs').readFileSync('/dev/stdin', 'utf8'));



