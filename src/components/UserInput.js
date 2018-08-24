import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap'
import FizzBuzz from '../utils/FizzBuzz';
import StringReverse from '../utils/StringReverse';

const FIZZBUZZ_PROMPT = 'Please input a number between 1 and 100';
const STRING_REVERSER_PROMPT = 'Please input a string to be reversed';


class UserInput extends React.Component  {
    constructor(props){
        super(props);

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            currentText: '',
            toggled: false,
            output: ''
          };

    }

    handleTextChange(e) {
        const message = e.target.value;
        this.setState ({ currentText : message });
    }

    handleSubmit(e) {
        
        e.preventDefault();
        if(this.props.toggled) {
            this.setState ({ output: StringReverse(this.state.currentText) });
        } else {
            if(isNaN(parseInt(this.state.currentText, 10)) ||
                this.state.currentText < 1 ||
                this.state.currentText > 100) {
                this.setState ({ output: FIZZBUZZ_PROMPT });
            } else {
                this.setState ({ output: FizzBuzz(this.state.currentText) });
            }
        }
        
    }

    render () {
        const {
            currentText,
            output
        } = this.state;
        return (
            <div className="input-form">
                <h4>{ this.props.toggled ? STRING_REVERSER_PROMPT : FIZZBUZZ_PROMPT }</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input className="input-form-input" type="text" value={currentText} onChange={this.handleTextChange} />
                    </label>
                    <Button className="submit-button" bsStyle="submit" type="submit" value="Submit">Submit</Button>
                    <h6 className={(output === FIZZBUZZ_PROMPT ? 'error' : '')}>{output}</h6>
                </form>
            </div>
        )   
    }
}


UserInput.propTypes = {
    currentText: PropTypes.string,
    toggled: PropTypes.bool.isRequired,
    output: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        toggled: state.toggled
    }  
}

export default connect(mapStateToProps)(UserInput); 



