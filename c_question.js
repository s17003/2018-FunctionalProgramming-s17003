const R = require('ramda');
var stdin = require('fs').readFileSync('/dev/stdin', 'utf8');

(stdin => {
  // Define Function

  // Declare Variable
  const inputs  = stdin.toString().trim().split('\n');

  // Main Procedure
  const result = ((lines) => {

    return lines;

  })(inputs);

  const jyanken = result;
  R.invertObj(jyanken);

  // first Number
  var line = inputs[0];
  var cols = line.split(' ').map(Number);

  var a_victory = 0;
  var b_victory = 0;

  // jyanken pattern
  var a_victory = 0;
  var b_victory = 0;
  for (var i = 1; i < cols[0] + 1; i++) {
      var pattern = R.split(' ', jyanken[i]);
      var a = pattern[0];
      var b = pattern[1];
      if ((a == 'g' && b == 'c') || (a == 'c' && b == 'p') || (a == 'p' && b == 'g')) {
          a_victory += 1;
      } else if ((b == 'g' && a == 'c') || (b == 'c' && a == 'p') || (b == 'p' && a == 'g')) {
          b_victory += 1;
      } else {
          a_victory += 0;
          b_victory += 0;
      }
  }

  console.log(a_victory);
  console.log(b_victory);

})(require('fs').readFileSync('/dev/stdin', 'utf8'));
