const { findParenthesisIndices, getPairs, getSubStrs } = require('./parenthesisParserModule.js');

module.exports ={
  seperateParenthesis(str) {
    let parenthesisIndices = findParenthesisIndices(str)
    return getSubStrs(
      str,
      getPairs(
        parenthesisIndices
      )
    )
  }
}