import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../components/HomePage";
import CartPage from "../components/CartPage";
import SearchPage from "../components/SearchPage";
import AccountPage from "../components/AccountPage";



const Bottom = createBottomTabNavigator()
const BottomTabBar = ()=>{
    return (
        <>
        <Bottom.Navigator screenOptions={{headerShown : false}}>
            <Bottom.Screen name="Home" component={HomePage}/>
            <Bottom.Screen name="Cart" component={CartPage}/>
            <Bottom.Screen name="Search" component={SearchPage}/>
            <Bottom.Screen name="Account" component={AccountPage}/>
        </Bottom.Navigator>
        </>
    )
}
export default BottomTabBar