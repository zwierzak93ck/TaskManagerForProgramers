import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar } from '../../components/layout/Navbar';
import { signOut } from '../../store/actions/authActions';

class NavbarContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            anchorEl: null
        }
    }

    signOut = () => {
        this.props.signOut();
    }

    handleToggle = () => {
        this.props.toggleDrawer();
    }

    toggleMenu = (e) => {
        this.setState({
            anchorEl: e.currentTarget ? null : e.currentTarget
        })
    }

    render() {
        return (
            <Navbar
                handleToggle={this.handleToggle}
                auth={this.props.auth}
                onSignOut={this.props.signOut}
                onMenuToggle={this.toggleMenu}
                anchorEl={this.state.anchorEl}
            />
        );
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
        toggleDrawer: () => { dispatch({ type: 'TOGGLE_DRAWER' }) },
        signOut: () => { dispatch(signOut()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);