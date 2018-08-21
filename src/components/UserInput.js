import React from 'react';
import PropTypes from 'prop-types';

function UserInput ({onSubmit, onChange, inputNumber}){
    return (
        <form onSubmit={onSubmit}>
            <label>
                Please input a number between 1 and 100:
                <input type="text" value={inputNumber} onChange={onChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

UserInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    inputNumber: PropTypes.string
};

UserInput.defaultProps = {
    currentText: ''
};
  
export default UserInput;



