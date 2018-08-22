const reducer = (state = [], action) => {
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