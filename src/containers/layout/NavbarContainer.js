import React, { Component } from 'react';
import { Sidebar } from '../../components/layout/Siedebar';
import { connect } from 'react-redux';
import  { Navbar }  from '../../components/layout/Navbar';

class NavbarContainer extends Component {

    render() {
        console.log(this.props);
        return (
            <Navbar handleToggle={this.handleToggle}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);