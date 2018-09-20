import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap'

class UserInput extends React.Component  {
    constructor(props){
        super(props);

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            currentText: '',
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
            this.setState ({ output: StringReverse(this.state.currentText), currentText: '' });
        } else {
            if(isNaN(parseInt(this.state.currentText, 10)) ||
                this.state.currentText < 1 ||
                this.state.currentText > 100) {
                this.setState ({ output: FIZZBUZZ_PROMPT, currentText: '' });
                
            } else {
                this.setState ({ output: FizzBuzz(this.state.currentText), currentText: '' });
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
    output: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        
    }  
}

export default connect(mapStateToProps)(UserInput); 



