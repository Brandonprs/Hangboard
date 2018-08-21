import React from 'react';


import UserInput from '../components/UserInput';
import Toggle from '../components/Toggle';
import FizzBuzz from '../utils/FizzBuzz';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputNumber: '',
            submitted: false,
            fizz: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this); 
        
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
    }
    
    handleChange(event) {
        this.setState({ inputNumber: event.target.value, submitted: false });
    }

    handleToggle(event) {
        this.setState({ fizz: !this.state.fizz });
        console.log(this.state.fizz);
    }

    
    render() {
        const {inputNumber, submitted} = this.state;

        return (
            <React.Fragment>
                <Toggle onToggle={this.handleToggle} />       
                <UserInput 
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                    currentText={inputNumber}
                />
                <p>{ submitted ? inputNumber : ''}</p> 
            </React.Fragment>
        );
    }
}

export default App;
