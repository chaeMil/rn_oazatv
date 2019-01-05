import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Colors from "../assets/Colors";
import HomeTab from "./tabs/HomeTab";
import SettingsTab from "./tabs/SettingsTab";

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