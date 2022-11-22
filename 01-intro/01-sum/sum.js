function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Not valid operand')

  }
  return a + b
}

module.exports = sum;
