import { ADD_TO_CART,REMOVE_FROM_CART,
    ADD_QUANTITY,SUBTRACT_QUANTITY } from "../constants.js"
    
    // export const addToCart=(data)=>{
    
    // return{
    //     payload:data,
    //     type:ADD_TO_CART
    
    // }
    
    // }
    
    // export const removeFromCart=(data)=>{
    //     return {
    //         payload:data,
    //         type:REMOVE_FROM_CART
    //     }
    // }
    
    export const increment=(data)=>{
        return {
            payload:data,
            type:ADD_QUANTITY
        }
    }
    
