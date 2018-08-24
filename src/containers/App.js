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
                <h1 className="title">{ this.props.toggled ? 'String Reverser' : 'FizzBuzz' }</h1>
                <hr/>
                <Toggle toggled={this.props.toggled} onClick={this.props.onToggleClick()} />
                <hr/>
                <UserInput toggled={this.props.toggled} />
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