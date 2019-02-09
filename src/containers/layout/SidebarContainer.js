import React, { Component } from 'react';
import { Sidebar } from '../../components/layout/Siedebar';

class SidebarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    onClose = () => {
        this.setState(state => ({
            open: !state.open
        }))
    }

    close
    render() {
        return (
            <Sidebar open={this.state.open} handleToggle={this.onClose}/>
        );
    }
}

export default SidebarContainer;