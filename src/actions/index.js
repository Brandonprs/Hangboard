export function toggle () {
    return {
        type: 'TOGGLED'
    };
}

export function getTodos() {
    return {
        type: 'GET_TODOS'
    };
}

export function getTodosError() {
    return {
        type: 'GET_TODOS_ERR'
    };
}

export function getTodosSuccess() {
    return {
        type: 'GET_TODOS_SUCCESS'
    };
}