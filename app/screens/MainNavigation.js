import React from "react";
import {createStackNavigator, createAppContainer} from "react-navigation";
import MainTabs from "./MainTabs";

const MainNavigation = createStackNavigator({
    Main: MainTabs
});

export default createAppContainer(MainNavigation);