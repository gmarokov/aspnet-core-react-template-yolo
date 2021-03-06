import * as React from "react";
import { Link, Redirect } from 'react-router-dom';
import { RouteComponentProps } from "react-router";
import { RoutePaths } from './Routes';
import AuthService from '../services/Auth';
import AuthStore from '../stores/Auth';
import { Menu, Button } from 'semantic-ui-react';

let authService = new AuthService();

export class Header extends React.Component<RouteComponentProps<any>, any> {

    signOut() {
        authService.signOut();
        this.props.history.push(RoutePaths.SignIn, { signedOut: true });
    }

    render() {
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
       
        return <Menu>
                <Menu.Item header>Template</Menu.Item>
                <Menu.Item>Link 1</Menu.Item>
                <Menu.Item>Link 2</Menu.Item>
                <Menu.Item>Link 2</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item name='signup'>
                        <Button onClick={() => this.signOut()}>Sign out</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>;
    }
}
