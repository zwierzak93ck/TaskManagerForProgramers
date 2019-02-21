import React, { Component } from 'react';
import { Sidebar } from '../../components/layout/Siedebar';
import { connect } from 'react-redux';
import  { Navbar }  from '../../components/layout/Navbar';

import { signOut } from '../../store/actions/authActions';

class NavbarContainer extends Component {

    render() {
        return (
            <Navbar handleToggle={this.handleToggle}
            isLoggedIn={this.props.isLoggedIn}
            signOut={this.props.signOut}
            />
        );
    }

    handleToggle = () => {
        this.props.toggleDrawer();
    }

    signOut = () => {
        this.props.signOut()
    }
}

const mapStateToProps = (state) => {
    console.log(state)
return {
    drawerOpen: state.drawerOpen,
    isLoggedIn: state.firebase.auth.isEmpty
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDrawer: () => { dispatch({type:'TOGGLE_DRAWER'}) },
        signOut: () => {dispatch(signOut())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);