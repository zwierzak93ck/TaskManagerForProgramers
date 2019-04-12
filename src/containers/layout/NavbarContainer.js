import React, { Component } from 'react';
import { Sidebar } from '../../components/layout/Siedebar';
import { connect } from 'react-redux';
import  { Navbar }  from '../../components/layout/Navbar';

import { signOut } from '../../store/actions/authActions';
import {reAuthenticateUser} from '../../store/actions/accountActions';

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
            auth={this.props.auth}
            signOut={this.props.signOut}
            openMenu={this.openMenu}
            anchorEl={this.state.anchorEl}
            closeMenu={this.closeMenu}
            />
        );
    }

    handleToggle = () => {
        this.props.toggleDrawer();
    }

    signOut = () => {
        this.props.signOut();
    }

    openMenu = (e) => {
        this.setState({
            anchorEl: e.currentTarget
        })
    }

    closeMenu = () => {
        this.setState({
            anchorEl: null
        })
    }
}

const mapStateToProps = (state) => {
return {
    drawerOpen: state.drawerOpen,
    auth: state.firebase.auth
}
}



const mapDispatchToProps = (dispatch) => {
    return {
        toggleDrawer: () => { dispatch({type:'TOGGLE_DRAWER'}) },
        signOut: () => {dispatch(signOut())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);