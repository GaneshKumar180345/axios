import React from "react";
import Carousel from 'react-native-reanimated-carousel';
import { FlatList, View, Image, Dimensions, Text, ScrollView, StyleSheet } from 'react-native';
import { BackgroundImage } from "../constants/BackgroundCrousal";


const CrousalItems = ()=>{

    return (
        <>
            <ScrollView>
                    <Image style={styles.backgroundimage1} source={{uri : "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-3d-rendered-e-commerce-illustration-image_3811627.jpg"}}/>
            </ScrollView>
        </>
    )
}
export default CrousalItems;

const styles = StyleSheet.create({
    backgroundimage1 : {
        width : 412,
        height : 428
    },
    backgroundimage2 :{
        width : 412,
        height : 428
    },
    backgroundimage3:{
        width : 412,
        height : 428
    }
})