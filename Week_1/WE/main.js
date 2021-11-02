/* const sayHelloTo = require('./myModule');
console.log('sayHelloTo: ', sayHelloTo);
sayHelloTo('Bernie'); */
const capitalizeString = function(array, length, index) {
  let output = '';
  //uppercase first character
  let substr = array[index];
  output = substr[0].toUpperCase();
  output += substr.slice(1, substr.length);
  //base case: when index = length
  if (index === length) {
    return output;
  } else {
    output += ' ' + capitalizeString(array, length, index + 1);
  }
  return output;
};

const titleCase = function(string) {
  //return '' if string is empty
  if (string === '') return '';
  //convert string to lower case and split into array
  string = string.toLowerCase().split(' ');
  //console.log(string);
  let length = string.length - 1;
  //recursively go through array and return back each substring capitalized
  return capitalizeString(string, length, 0);
};

console.log(titleCase('WHAT HAPPENS HERE'));