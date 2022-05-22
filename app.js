//define a function, give it its parameters
//using conditonals for error message instead of letting it print unddefined
function q(num_1, num_2, operand){
   if (operand === '+') {
      return num_1 + num_2;
   } else if (operand === '-') {
      return num_1 - num_2;
   } else if (operand === '/') {
      return num_1 / num_2
   } else if (operand === '*') {
      return num_1 * num_2;
   } else if (operand === '%') {
      return num_1 % num_2;
   } else {
      console.log('please input a valid math symbol')
   }
}
// console.log(q(39, 33, '+'))