import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Colors from "../assets/Colors";

class HomeTab extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsTab extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

const MainTabs = createBottomTabNavigator({
    Home: HomeTab,
    Settings: SettingsTab,
}, {
    backBehavior: false,
    tabBarOptions: {
        style: {
            backgroundColor: Colors.colorPrimary
        },
        labelStyle: {
            fontSize: 12,
            color: Colors.white
        },
    }
});

export default MainTabs;