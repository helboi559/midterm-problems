//input: 2 nums
//output: boolean(if num1 divisible by num2)
function isEvenlyDivisible(num1,num2) {
  return num1 % num2 === 0;
}
//input:num
//output: half the square
function halfSquare(num) {
  return (num*num)/2;
}
//input:string
//output:boolean(str > 15 chars)
function isLong(str) {
  return str.length >= 15;
}
//input:str
//output:new str with exclamation/added/removed
function exclaim(str) {
  //delete all exclamation points
  //redo word with one exclamation point
  let newStr = ""
  for(let char of str) {
    if (char !== "!") {
      newStr += char
    }
  }
  return newStr + "!"
}
//input:str words
//output:count of words
function countWords(str) {
  let wordsCount = str.split(' ').length
  return wordsCount
}
//input:str
//output:boolean(contains at least one digit)
function containsDigit(str) {
  if(str === '') {
    return false
  }
  
  let nums = "0123456789"
  for(let i = 0 ; i < str.length ; i++) {
    if(nums.indexOf(str[i]) > -1) {
      return true
    }    
  }
  return false
}
//input:str(chars)
//output:boolean(at least on)
function containsLowerCase(str) {
  if(str === '') {
    return false
  }
  let alpha = "abcdefghijklmnopqrstuvwxyz"
  
  for(let i = 0 ; i < str.length ; i++) {
    if(alpha.indexOf(str[i]) > -1) {
      return true
    }
  }
  return false
}

function containsUpperCase(str) {
  if(str === '') {
    return false
  }
  let alpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
  
  for(let i = 0 ; i < str.length ; i++) {
    if(alpha.indexOf(str[i]) > -1) {
      return true
    }
  }
  return false
}
//input: str chars
//output: bool(nonAlphaNumberic char exists)
function containsNonAlphanumeric(str) {
  //regex: using test method(returns bool), everything in the bracket is "not" annotated by the "^", chars ranging from lower case to upper case and nums
  const nonAlphaNum = /[^a-zA-Z0-9]/.test(str)
  return nonAlphaNum
}

function containsSpace(str) {
  //regex: using test method(returns bool), white-space chars syntax "\s", returns true or false based on the test method
  const hasWhiteSpace = /\s/.test(str)
  return hasWhiteSpace
}
//input: num(float or whole)
//output: arr of nums (positive)
function digits(num1) {
   //convert to a str 
  let str = num1.toString()
  //remove non-numbers by collecting them to a new list
  let digits = '0123456789'
  let onlyNums = ''
  for(let i = 0 ; i < str.length ; i++) {
    if(digits.indexOf(str[i]) > -1) {
      onlyNums += str[i]
    }
  }
  let toNumber = onlyNums.split('').map(num => Number(num));
  return toNumber
}
//input:str
//output: new str based on length
function truncate(str) {
  if(str.length < 15) {
    return str
  } else{
    str = str.slice(0,8)
    return str + '...'
  } 
}
//input: str
//output: at least 1 char of each class(boolean)
function isValidPassword(str) {
  //identify potential conditions and create lists to collect characters
  let nums = '0123456789';
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let lower = 'abcdefghijklmnopqrstuvwxyz'
  let hasNums = ''
  let hasLower = ''
  let hasUpper = ''
  let nonAlphaNum = ''
  
  //iterate chars 
  for(let i = 0 ; i < str.length ; i++) {
    //if any empty space exists it will be false
    if (str[i] === ' ') {
      return false
    } 
    //seperate chars to different lists
    if(nums.includes(str[i])){
      hasNums += str[i]
    } else if (lower.includes(str[i])){
      hasLower += str[i]
    } else if (upper.includes(str[i])) {
      hasUpper += str[i]
    } else {
      nonAlphaNum += str[i]
    }
  
  }
  //if all lists are not empty return true
  if((hasUpper.length > 0) && (hasLower.length > 0) && (hasNums.length > 0) && (nonAlphaNum.length > 0)) {
    return true
  }
  //otherwise it will always be false
  return false
}
//input:movie titles(arr)
//output:specific movie titles
//get mov len w/o '!'
//remove ! with multiple "!"
function onlyPunchy(arr) {
  //create new arr to collect titles
  let punchy = [];
  //iterate titles 
  for(let i = 0 ; i < arr.length ; i++) {
    //remove "!" from all titles
    let title = arr[i].split('');
    // new word to replace with old word
    let removed = '';
    //check each char in word
    for(let j = 0 ; j < title.length ; j++) {
      //if char is not an ! , add char to new word
      if(title[j] !== '!') {
        removed += title[j]
      }
    }
    //identify word length < 15
      //add to new list with ! added
    if (removed.length < 15) {
      punchy.push(removed + '!')
    }
    
  }
  return punchy
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}