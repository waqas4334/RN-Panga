import { ADD_TO_CART,REMOVE_FROM_CART,
    ADD_QUANTITY,SUBTRACT_QUANTITY } from "../constants"
    
    
    
    export const decrement=(data)=>{
        return {
            payload:data,
            type:SUBTRACT_QUANTITY
        }
    }   