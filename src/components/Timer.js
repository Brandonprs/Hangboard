import React from 'react';

class Timer extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <h2>{this.props.time}</h2>
            </div>
        )
    }

}
export default Timer; 