import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import axios from "axios";


const Products = ({navigation})=>{
    const [data , setData] = useState([])

    useEffect(()=>{
        try {
            const fetchData =  axios.get('https://fakestoreapi.com/products').then((response)=>setData(response.data)).catch((error)=>error)
            
        } catch (error) {
            console.log(error)
        }
    },[])

      const handlePress = ()=>{
        navigation.navigate('Cart')
      }



    return (
        <>
        <View> 
            <Text style={styles.producttitle}>Products</Text>
            <FlatList 
            data={data}
            numColumns={2}
            renderItem={({item})=><View key={item.id} style={styles.card}>
              <Image source={{uri : item.image}} style={styles.image}/>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.category}</Text>
              <Text style={styles.price}>{item.price}</Text>  
              <TouchableOpacity onPress={handlePress} style={styles.button}><Text style={styles.buttontext}>Read more</Text></TouchableOpacity>
            </View>}
            columnWrapperStyle ={styles.row}
            contentContainerStyle={styles.list}
            />

        </View>
        </>
    )
}
export default Products;

const styles = StyleSheet.create({
    producttitle :{
        color : 'black',
        fontSize : 23,
        fontWeight : 'semibold',
        position : 'absolute',
        left : 26.99,
        top : 20,
        
    },
    card: {
        width : 180,
        height : 250,
        borderWidth : 0.9,
        borderRadius : 10,
        marginLeft : 10,
        marginTop : 75,
        justifyContent : 'center',
        alignItems : 'center',
        gap : 10,
      },
      image: {
        width:  120,
        height: 80,
        borderWidth : 0.7,
        borderColor : 'black'
      },
      title: {
        color : 'black',
        textAlign : 'center'
      },
      description: {
        color : 'black',
        textAlign : 'center'
      },
      price: {
        color : 'black',
        textAlign : 'center'
      },
      row: {
        flex: 1,
        justifyContent: 'center',
      },
      list: {
        gap : -10
      },
      button:{
        width : 75,
        height : 30,
        backgroundColor : '#FABC3F',
        borderRadius : 5
      },
      buttontext:{
        color : '#E85C0D',
        textAlign : 'center',
        marginTop : 4
      }
})