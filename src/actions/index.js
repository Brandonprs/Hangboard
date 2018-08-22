export function submit (text) {
    return {
        type: 'CLICKED_SUBMIT',
        text,
        submitted: true  
    };
}
export function change (text) {
    return {
        type: 'CHANGED',
        text,
        submitted: false
    };
}
export function toggle () {
    return {
        type: 'TOGGLED'
    };
}