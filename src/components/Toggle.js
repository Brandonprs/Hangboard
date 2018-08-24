import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { toggle } from '../actions/index';
import { connect } from 'react-redux'; 

const FIZZBUZZ_TEXT = 'FizzBuzz';
const STRING_REVERSE_TEXT = 'String Reversal';

class Toggle extends React.Component {
    render() {
        return (
            <Button bsStyle="primary" 
                toggled={this.props.toggled} 
                onClick={this.props.onToggleClick()}>
                { this.props.toggled ? 'Change to ' + FIZZBUZZ_TEXT : 'Change to ' + STRING_REVERSE_TEXT }
            </Button>
        )
    }  
}
Toggle.propTypes = {
    toggled: PropTypes.bool.isRequired,
    onToggleClick: PropTypes.func
};


const mapStateToProps = (state) => {
    return {
        toggled: state.toggled
    }  
}

const mapDispatchToProps = (dispatch) => ({
    onToggleClick() {
        return () => {
            dispatch(toggle());
        };
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Toggle); 