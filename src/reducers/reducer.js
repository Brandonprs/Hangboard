const STRING_REVERSE_TEXT = 'Change to String Reversal.';

const initialState = {
    currentText: '',
    messageText: STRING_REVERSE_TEXT,
    submitted: false,
    toggled: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLED':
            return Object.assign({}, state, {
                toggled: !state.toggled
            })    
        default:
            return state;
    }
    
}


export default reducer;