import React from 'react';
import PropTypes from 'prop-types';


function FizzBuzz (number) {
    let text;
    if (number % 3 == 0 && number % 5 == 0) {
        text = 'FizzBuzz';
    } else if (number % 3 == 0) {
        text = 'Fizz';
    }else if (number % 5 == 0) {
        text = 'Buzz';
    }
    return text;
} 
export default FizzBuzz;
    

