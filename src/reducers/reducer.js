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

const reducer = (state = {currentText: '', submitted: false, messageText: 'Please input a number between 1 and 100.', toggled: false }, action) => {
    switch (action.type) {
        case 'CLICKED_SUBMIT':
            return [
                ...state,
                {
                    currentText: action.text,
                    submitted: state.submitted,
                    toggled: state.toggled
                }
            ];
        case 'TOGGLED':
            return [
                ...state,
                {
                    currentText: state.currentText,
                    messageText: getMessageText(state),
                    submitted: state.submitted,
                    toggled: !state.toggled
                }
            ];
        case 'CHANGED':
            console.log(state);
            return [
                ...state,
                {
                    currentText: action.text,
                    submitted: false,
                    toggled: state.toggled
                }
                
            ]
            
        default:
            return state;
    }
}


export default reducer;