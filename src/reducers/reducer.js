import {createStore} from 'redux';

const inputChanger = (state = 0, action) => {
    if (action.type === 'SUBMIT') {
        return action.value;
    } else {
        return state;
    }
    
}

const store = createStore(inputChanger);
const render = () => {
    document.body.innerText = store.getState();
}
store.subscribe (render);
render();