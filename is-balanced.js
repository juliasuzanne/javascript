function isBalanced(s) {
  if (s !== "") {
    if (s.includes("()")) {
      s = s.replace("()", "");
      return isBalanced(s);
    } else if (s.includes("{}")) {
      s = s.replace("{}", "");
      return isBalanced(s);
    } else if (s.includes("[]")) {
      s = s.replace("[]", "");
      return isBalanced(s);
    } else {
      return "NO";
    }
  }
  return "YES";
}

console.log(isBalanced("{{)[](}}"));
// console.log(isBalanced("{[(])}"));
console.log(isBalanced("{{[[(())]]}}"));
