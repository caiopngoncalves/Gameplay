import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from '../screens/home';

import { AppointmentDetails } from "../screens/appointmentDetails";
import { AppointmentCreate } from "../screens/appointmentCreate";

import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: theme.colors.background}}}>
            <Screen name="Home" component={Home}/>
            <Screen name="AppointmentDetails" component={AppointmentDetails}/>
            <Screen name="AppointmentCreate" component={AppointmentCreate}/>
        </Navigator>
    )
}