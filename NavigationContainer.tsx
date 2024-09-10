import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";
import BottomTabBar from "./BottomTabBar";


const Navigation = ()=>{
    return (
        <>
            <NavigationContainer>
                <BottomTabBar/>
            </NavigationContainer>
        </>
    )
}
export default Navigation;