import React from 'react';
import PropTypes from 'prop-types';

function Toggle ({onToggle}){
    return (
        <button onClick={onToggle}>Toggle</button>
    );
}

Toggle.propTypes = {
    onToggle: PropTypes.func.isRequired
};

export default Toggle;