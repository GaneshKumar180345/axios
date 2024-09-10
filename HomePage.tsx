import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CrousalItems from "./Crousal";
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Products from "./Products";



const HomePage = ()=>{
    return(
        <>
        <ScrollView style={styles.section1}>
            <CrousalItems/>
        <View>
            <TouchableOpacity><Text style={styles.logo}>SHOPING</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bell}><Fontisto name="bell" size={25}/></TouchableOpacity>
            <TouchableOpacity style={styles.bag}><SimpleLineIcons name="bag" size={25}/></TouchableOpacity>
            <Text style={styles.title}>Where Uniqueness Meets E-commerce</Text>
            <View style={styles.searchbar}>
            <TextInput><Text>what are you looking for ?</Text></TextInput>
            <Feather style={styles.searchicon} name="search" size={25} color={'black'} />
            </View>
            </View>

            <View style={styles.section2}>
                <Products/>
            </View>

        </ScrollView>
        </>
    )
}
export default HomePage;

const styles = StyleSheet.create({
    section1 :{
        backgroundColor : '#F5F5F5',
        position : 'relative'
    },
    logo:{
        position : 'absolute',
        fontSize : 20,
        color : "#FFF5E4",
        bottom : 360,
        left : 25,
        fontStyle : 'italic',
        textTransform : 'uppercase',
        textDecorationLine : 'line-through'
    },
    bell:{
        position : 'absolute',
        bottom : 360,
        left : 290,
        color : '#FFF5E4'
    },
    bag:{
        position : 'absolute',
        bottom : 360,
        left : 350,
        color : '#FFF5E4'
    },
    title:{
        fontSize : 31,
        fontWeight : 'bold',
        position : 'absolute',
        bottom : 240,
        textAlign : 'center',
        left : 20,
        color : 'white'
    },
    searchbar:{
        backgroundColor : 'white',
        width : 377.5,
        position : 'absolute',
        bottom : 80,
        left : 17,
        borderRadius : 10,
        height : 55
    },
    searchtext:{
        color : 'gray',
    },
    searchicon:{
        position : 'absolute',
        top : 15,
        left : 10
    },
    section2:{
        backgroundColor : '#F5F5F5',
        position : 'relative',
    }
})