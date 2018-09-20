import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Timer from '../components/Timer';
import {START_TIMER, STOP_TIMER} from 'redux-timer-middleware';
import { Button } from 'react-bootstrap';
class App extends React.Component {
    constructor(props){
        super(props)
        this.state =  {
            isOn: false,
            time: 0
        }
    }
    render() {
        return (
            <div className="container main-container">
                <div className="row h-100">
                    <div className="col-sm-12 align-self-center">
                        <div className = "w-25 mx-auto">
                            <Timer  isOn={this.props.isOn} 
                                    time={this.props.time} 
                                    onTimerStart={this.props.onTimerStart()}
                                    onTimerStop={this.props.onTimerStop()}/>
                            <Button className="toggle-button" bsStyle="primary"
                                onClick={ this.props.onTimerStart() }>
                                Start
                            </Button>
                            <Button className="toggle-button" bsStyle="primary"
                                onClick={ this.props.onTimerStop() }>
                                Stop
                            </Button>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isOn: state.isOn,
        time: state.time,
    }  
}
const mapDispatchToProps = (dispatch) => ({
    onTimerStart() {
        return () => {
            dispatch({
                type: START_TIMER,
                payload: {
                    actionName: 'STARTED_TIMER',
                    timerName: 'timer'
                }   
            });
        }
    },
    onTimerStop() {
        return () => {
            dispatch({
                type: STOP_TIMER,
                payload: {
                    actionName: 'STOPPED_TIMER',
                    timerName: 'timer'
                }
            });
        }
    }
});

App.PropTypes = {
    onTimerStart: PropTypes.func.isRequired,
    onTimerStop: PropTypes.func.isRequired,
    isOn: PropTypes.bool.isRequired,
    time: PropTypes.number.isRequired 
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 