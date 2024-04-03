function isPalindrome(str) {

  if (str.length === 1)
    return true;

  let result = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  for (let i = 0; i < result.length; i++) {
    if (result[i] !== result[result.length - i - 1])
      return false;
  }

  return true;
}


console.log(isPalindrome('A man, a plan, a canal: Panama'));