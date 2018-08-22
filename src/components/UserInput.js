import React from 'react';
import PropTypes from 'prop-types';

class UserInput extends React.Component  {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <label>
                    <p>{this.props.messageText}</p>
                    <input type="text" value={this.props.currentText} onChange={this.props.onChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )    
    }
}

UserInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    currentText: PropTypes.string,
    messageText: PropTypes.string.isRequired
};

UserInput.defaultProps = {
    currentText: '',
    messageText: 'Please input a number between 1 and 100'
};
  
export default UserInput;



