import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
            this.setState ({ output: FizzBuzz(this.state.currentText) });
        }
    }

    render () {
        const {
            currentText,
            output,
        } = this.state;
        return (
            <div className="input-form">
                <h4>{ this.props.toggled ? STRING_REVERSER_PROMPT : FIZZBUZZ_PROMPT }</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={currentText} onChange={this.handleTextChange} />
                    </label>
                    <input type="submit" value="Submit" />
                    <h2>{output}</h2>
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



