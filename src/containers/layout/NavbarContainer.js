import React, { Component } from 'react';
import { Sidebar } from '../../components/layout/Siedebar';
import { connect } from 'react-redux';
import  { Navbar }  from '../../components/layout/Navbar';

import { signOut } from '../../store/actions/authActions';

class NavbarContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            anchorEl: null
        }
    }
    render() {
        return (
            <Navbar 
            handleToggle={this.handleToggle}
            isLoggedIn={this.props.isLoggedIn}
            signOut={this.props.signOut}
            nickName={this.props.nickName}
            openMenu={this.openMenu}
            anchorEl={this.state.anchorEl}
            />
        );
    }

    handleToggle = () => {
        this.props.toggleDrawer();
    }

    signOut = () => {
        this.props.signOut()
    }

    openMenu = (e) => {
        this.setState({
            anchorEl: e.currentTarget
        })
    }
}

const mapStateToProps = (state) => {
return {
    drawerOpen: state.drawerOpen,
    isLoggedIn: state.firebase.auth.isEmpty,
    nickName: state.firebase.profile.nickName
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDrawer: () => { dispatch({type:'TOGGLE_DRAWER'}) },
        signOut: () => {dispatch(signOut())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);