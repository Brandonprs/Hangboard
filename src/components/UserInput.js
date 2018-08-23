import React from 'react';
import PropTypes from 'prop-types';
import { change } from '../actions/index'; 

class UserInput extends React.Component  {
    constructor(props){
        super(props);
        
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <form onSubmit={() => this.props.store.submit}>
                <label>
                    <p>{this.props.messageText}</p>
                    <input type="text" value={this.props.currentText} onChange={this.handleChange} />
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



