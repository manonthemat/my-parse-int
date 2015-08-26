function myParseInt(input) {
  if (arguments.length !== 1)
    return Number.NaN;
  return /^\s*\d+\s*$/.test(input) ? +input : NaN;
}

module.exports = myParseInt;
