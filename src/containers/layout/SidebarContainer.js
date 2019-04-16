import React, { Component } from 'react';
import { Sidebar } from '../../components/layout/Siedebar';
import { connect } from 'react-redux';

class SidebarContainer extends Component {

    handleToggle = () => {
        this.props.toggleDrawer();
    }

    render() {
        return (
            <Sidebar
                open={this.props.drawerOpen}
                handleToggle={this.handleToggle}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        drawerOpen: state.drawerOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDrawer: () => { dispatch({ type: 'TOGGLE_DRAWER' }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);