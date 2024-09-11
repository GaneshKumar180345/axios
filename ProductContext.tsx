import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";



const ProductContext = createContext()


export const ProductProvider = ({children})=>{
    const [data , setData] = useState([])
    const [cart ,setCart] = useState([])

    const fetchApidata = async()=>{
        try {
            const fetchData = await axios.get('https://fakestoreapi.com/products').then((response)=>response.data).catch((error)=>error)
            setData(fetchApidata)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchApidata()
    },[])

    const addToCart = (product)=>{
        setCart((prev) => [...prev , product])
    }

    const removeToCart = (productId)=>{
            setCart((previousCart)=> previousCart.filter(product => product.id !== productId))
    }

    return (
        <ProductContext.Provider value={{fetchApidata , addToCart ,removeToCart }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useCart = useContext(ProductContext)

