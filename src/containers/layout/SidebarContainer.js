import React, {  Component } from 'react';
import { Sidebar } from '../../components/layout/Siedebar';
import { connect } from 'react-redux';

class SidebarContainer extends Component {
    

    render() {
        return (
            <Sidebar open={this.props.drawerOpen} handleToggle={this.handleToggle}/>
        );
    }

    handleToggle = () => {
        this.props.toggleDrawer();
    }
}

const mapStateToProps = (state) => {
    return {
        drawerOpen: state.drawerOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDrawer: () => { dispatch({type:'TOGGLE_DRAWER'}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);