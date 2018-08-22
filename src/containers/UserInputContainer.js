import React from 'react';
import UserInput from '../components/UserInput';
import { connect } from 'react-redux';
import { submit, change } from '../actions/index';
import {bindActionCreators} from 'redux';



const UserInputContainer = ({currentText, messageText}) => {
    return (
        <UserInput 
            onSubmit={ (e) => {
                e.preventDefault()
                submit(currentText)
            }}
            onChange={ (e) => {
                e.preventDefault()
                change(currentText)
            }}
            currentText={currentText}
            messageText={messageText}
        />
    ) 
}

const getMessageText = (state) => {
    switch(state.toggled){
        case true:
            return 'Please input a string to see it reversed.'
        case false:
            return 'Please input a number between 1 and 100.'
        default:
            return 'Please input a number between 1 and 100.'
    }
    
}

const mapStateToProps = (state) => {
    return {
        currentText: state.currentText,
        submitted: state.submitted,
        messageText: getMessageText(state)

    }
    
}
const mapDispatchToProps = (dispatch) => {
    bindActionCreators(
        {
            submit,
            change
        }, 
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInputContainer); 
