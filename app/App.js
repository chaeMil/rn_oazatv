/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import MainNavigation from "./screens/MainNavigation";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <MainNavigation/>
        );
    }
}
