'use client'

import { createContext,useContext, useState } from "react"

//creating context object
const ProductContext = createContext()

//provider component - providing global state
export default function ProductsProvider(props){
    const { children } = props

    //the state of cart - store all goods in array
    const [cart,setCart] = useState({})

    //add goods to cart
    function handleIncrementProduct(price_id,num,data, noIncrement=false){
        const newCart = {
            ...cart
        }
        //turns out the product is already in the cart so take the previous values
        //and increment /
        if (price_id in cart){
            // newCart[price_id] = newCart[price_id] + num
            newCart[price_id] = {
                ...data,
                quantity: noIncrement ? num : newCart[price_id]?.quantity + num
            }
        }else{
            //product not yet in cart,so add it
            newCart[price_id] = {
                ...data,
                quantity: num
            }
        }

        if (newCart[price_id].quantity <= 0){
            //the user has set the number to 0
            delete newCart[price_id]
        }

        //overwrite the cart state with a newcart object
        setCart(newCart)
    }
    
    const value = {
        cart,               
        handleIncrementProduct
    }

    return (
         <ProductContext.Provider value = {value}>
            {children}
        </ProductContext.Provider>

    )

}

export const useProducts = () => useContext(ProductContext)