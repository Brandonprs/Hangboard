import React from 'react';
import Toggle from '../components/Toggle';
import { connect } from 'react-redux';
import { toggle } from '../actions/index';

const ToggleContainer = ({toggle, toggled}) => {
    return (
        <Toggle 
            toggled={toggled}
            onToggle={() => toggle()}
        />
    );
    
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
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(ToggleContainer); 
