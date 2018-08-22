import React from 'react';
import PropTypes from 'prop-types';

class Toggle extends React.Component {
    render() {
        return (
            <button onClick={() => onToggleClick()}>Toggle</button>
        )
    }
    
}
Toggle.propTypes = {
    onToggleClick: PropTypes.func.isRequired,
    toggled: PropTypes.bool.isRequired
};

export default Toggle;