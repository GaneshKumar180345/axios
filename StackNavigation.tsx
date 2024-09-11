import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from "../components/HomePage";
import CartPage from "../components/CartPage";
import SearchPage from "../components/CategoryPage";
import AccountPage from "../components/AccountPage";
import BottomTabBar from "./BottomTabBar";
import CategoryPage from "../components/CategoryPage";
import DetailPage from "../components/DetailPage";
import Products from "../components/Products";


const Stack = createStackNavigator()

const StackNavigation = ()=>{
    return (
        <>
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name="Home" component={HomePage}/>
            <Stack.Screen name="Category" component={CategoryPage}/>
            <Stack.Screen name="Cart" component={CartPage}/>
            <Stack.Screen name="Account" component={AccountPage}/>
            <Stack.Screen name="Detail" component={DetailPage}/>
        </Stack.Navigator>
        </>
    )
}
export default StackNavigation;