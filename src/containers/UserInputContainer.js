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
