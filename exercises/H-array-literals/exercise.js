/*
  Array literals
  --------------
  Declare some variables assigned to arrays of values
*/

var numbers = []; // add numbers from 1 to 10 into this array
var mentors = []; // Create an array with the names of the mentors: Daniel, Irina and Rares

for(let i = 1 ; i <= 10 ; i++)
  {
    numbers[i] = i;
  }
mentors[0] = 'Daniel';
mentors[1] = 'Irina';
mentors[2] = 'Rares';
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(numbers);
console.log(mentors);

/* 
  EXPECTED RESULT
  ---------------
  [1,2,3,4,5,6,7,8,9,10]
  ['Daniel', 'Irina', 'Rares']
*/
