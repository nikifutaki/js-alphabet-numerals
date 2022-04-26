const alphabets = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
];

export const num2Ab = (num) => {
  if(typeof num !== 'number') {
    throw new TypeError('Argument must be a number');
  }

  if(!Number.isInteger(num)){
    throw new RangeError('The number must be an integer');
  }

  if(num < 1) {
    throw new RangeError('The number must be 1 or more');
  }

  if(num > 2147483647) {
    throw new RangeError('The number must be less than 2147483647');
  }

  let mod;
  let result = '';

  while(num)
  {
    mod = (num - 1) % 26;
    result = alphabets[mod]+result;
    num = (num - mod - 1)/26;
  }
  
  return result;
}

export const ab2Num = (num) => {
  if(typeof num !== 'string') {
    throw new TypeError('Argument must be a string');
  }

  if(!num.match(/^[A-Z]+$/)){
    throw new RangeError('Argument should consist only of uppercase alphabets');
  }

  if(num.length > 7){
    throw new RangeError('The string must be in the range up to A-ZZZZZZZ');
  }

  num = num.split("").reverse().join("");
  let result = 0;

  for(let i=0;i<num.length;i++){
    result += (alphabets.indexOf(num[i])+1) * (26**i);
  }
  
  return result;
}