import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../components/HomePage";
import CartPage from "../components/CartPage";
import Octicons from 'react-native-vector-icons/Octicons';
import AccountPage from "../components/AccountPage";
import CategoryPage from "../components/CategoryPage";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Bottom = createBottomTabNavigator()

const BottomTabBar = ()=>{
    
    return (
        <>
        <Bottom.Navigator screenOptions={{headerShown : false,tabBarShowLabel : false}}>
            <Bottom.Screen name="Home" component={HomePage} options={{
                tabBarIcon : (({focused , color ,size})=>(
                    <Octicons name = "home" color={"orange"} size={size}/>
                ))
            }}/>
            <Bottom.Screen name="Category" component={CategoryPage} options={{
                tabBarIcon :(({focused,color,size})=>(
                    <MaterialIcons name="category" size={size} color={"orange"}/>
                ))
            }}/>
            <Bottom.Screen name="Cart" component={CartPage} options={{
                tabBarIcon : (({focused,size,color})=>(
                    <AntDesign name="shoppingcart"  color={"orange"} size={size}/>
                ))
            }}/>
            <Bottom.Screen name="Account" component={AccountPage} options={{
                tabBarIcon : (({focused,size,color})=>(
                    <MaterialCommunityIcons name="account" size={size} color={"orange"}/>
                ))
            }}/>
        </Bottom.Navigator>
        </>
    )
}
export default BottomTabBar