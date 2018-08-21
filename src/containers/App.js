import React from 'react';
import PropTypes from 'prop-types';

import UserInput from '../components/UserInput';
import FizzBuzz from '../utils/FizzBuzz';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputNumber: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true});
    }
    
    handleChange(event) {
        this.setState({ inputNumber: event.target.value });
    }

    renderText(text){
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
    render(){
        const {inputNumber, submitted} = this.state;
        if(submitted){
            return FizzBuzz(inputNumber); 
        }
        return (
            <UserInput 
            onSend={this.handleSubmit}
            onTextChange={this.handleChange}
            currentText={inputNumber}
            />
        );
    }
}

export default App;
