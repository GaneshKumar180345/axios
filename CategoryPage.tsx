import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useGetProductCategoryQuery, useGetProductQuery } from "../redux/apiSlice";



const CategoryPage = ()=>{
    const {data , error , isLoading} = useGetProductQuery()

    return (
        <>
        <View>
            <Text style={styles.categorytitle}>Category</Text>
           <FlatList
           pagingEnabled 
           data={data}
           renderItem={({item})=><View style={styles.cardContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.description}>{item.description}</Text>
                </View>
           </View>}
           /> 
        </View>
        </>
    )
}
export default CategoryPage;

const styles = StyleSheet.create({
    categorytitle : {
        color : 'black',
        textAlign : 'center',
        fontSize : 20,
        marginTop : 25
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      image: {
        width: 150,
        height: 100,
        borderRadius: 10,
      },
      cardContent: {
        padding: 10,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color : 'black'
      },
      price: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
      },
      description: {
        fontSize: 14,
        color: '#999',
      },
})