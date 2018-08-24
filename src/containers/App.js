import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Toggle from '../components/Toggle';
import UserInput from '../components/UserInput';

 
class App extends React.Component {
    constructor(props){
        super(props)

        this.state =  {
            toggled: false
        }
    }
    render() {
        return (
            <div className="container main-container">
                <div className="row h-100">
                    <div className="col-sm-12 align-self-center">
                        <div className = "w-25 mx-auto">
                            <h1 className="title">{ this.props.toggled ? 'String Reverser' : 'FizzBuzz' }</h1>
                            <Toggle toggled={this.props.toggled} onClick={this.props.onToggleClick()} />
                            <UserInput toggled={this.props.toggled} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        toggled: state.toggled
    }  
}

const mapDispatchToProps = (dispatch) => ({
    onToggleClick() {
        return () => {
            dispatch(toggle());
        };
    }
});

App.propTypes = {
    toggled: PropTypes.bool.isRequired,
    onToggleClick: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 