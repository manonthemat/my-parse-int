function myParseInt(input) {
  if (arguments.length !== 1)
    return Number.NaN;
  var re = /^\s*\d+\s*$/;
  input += '';
  if (input.match(re))
    return parseInt(input);
  return Number.NaN;
}

module.exports = myParseInt;
