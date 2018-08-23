import React from 'react';
import PropTypes from 'prop-types';
import { toggle } from '../actions/index';
import { connect } from 'react-redux'; 

class Toggle extends React.Component {
    render() {
        return (
            <button toggled='false' onClick={() => this.props.store.dispatch(toggle())}>Toggle</button>
        )
    }
    
}
Toggle.propTypes = {
    toggled: PropTypes.bool.isRequired
};


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
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(Toggle); 