const initialState = {
    isOn: false,
    time: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STARTED_TIMER':
           return Object.assign({}, state, {
                time: state.time + 1,
                isOn: true
            })
        case 'STOPPED_TIMER':
            return Object.assign({}, state, {
                isOn: false
            })       
        default:
            return state;
    }
    
}
export default reducer;