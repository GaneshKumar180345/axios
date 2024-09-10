import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from "../components/HomePage";
import CartPage from "../components/CartPage";
import SearchPage from "../components/SearchPage";
import AccountPage from "../components/AccountPage";
import BottomTabBar from "./BottomTabBar";


const Stack = createStackNavigator()

const StackNavigation = ()=>{
    return (
        <>
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name="Home" component={HomePage}/>
            <Stack.Screen name="Cart" component={CartPage}/>
            <Stack.Screen name="Search" component={SearchPage}/>
            <Stack.Screen name="Account" component={AccountPage}/>
        </Stack.Navigator>
        </>
    )
}
export default StackNavigation;