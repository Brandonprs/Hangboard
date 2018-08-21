import React from 'react';
import PropTypes from 'prop-types';

function UserInput ({onSend, onTextChange, inputNumber}){
    return (
        <form onSubmit={onSend}>
            <label>
                Please input a number between 1 and 100:
                <input type="text" value={inputNumber} onChange={onTextChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

UserInput.propTypes = {
    onSend: PropTypes.func.isRequired,
    onTextChange: PropTypes.func.isRequired,
    inputNumber: PropTypes.string
};

UserInput.defaultProps = {
    currentText: ''
};
  
export default UserInput;



