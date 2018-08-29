import React, { Component } from 'react';

class ApiService extends Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
    }


    componentDidMount() {
        fetch ('http://0.0.0.0:5000/todos')
            .then(response => {
                return response.json();
            }).then(data => {
                let todos = data.response.map((todo) => {
                    return (
                        <div>
                            <p>{todo}</p>
                        </div>
                    )
                })
                this.setState ({ todos: todos });
            })
    }
    render() {
        return (
            <div>
                {this.state.todos} 
            </div>
        )
    }

}


export default ApiService;