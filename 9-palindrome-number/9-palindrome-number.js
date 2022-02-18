var isPalindrome = function (x) {
  let t = x.toString();
  let p = [...t];
  if (p.length % 2 === 0) {
    let half1 = p.splice(0, p.length / 2);
    p = p.reverse();
    if (half1.toString() === p.toString()) {
      return true;
    } else {
      return false;
    }
  } else {
    let half1 = p.splice(0, p.length / 2);
    p.shift();
    p = p.reverse();
    if (half1.toString() == p.toString()) {
      return true;
    } else {
      return false;
    }
  }
};

