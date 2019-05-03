function isPalindrome(s) {

  var stringReverse = s.split("").reverse().join("").replace(/ /g, "");
  s = s.replace(/ /g, "");
  return s == stringReverse;
}

module.exports = isPalindrome;
