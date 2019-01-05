import React from "react";
import {View, Text } from "react-native";
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from "react-navigation";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);