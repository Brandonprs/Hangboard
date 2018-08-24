const initialState = {
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