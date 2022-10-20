
import { ADD_TO_CART,REMOVE_FROM_CART,
ADD_QUANTITY,SUBTRACT_QUANTITY,REGISTER_SUCCESS 
} from "../constants"

const initialState = {
cardData: [],   
number:10
}


export const counter = (state = initialState, action) => {

switch (action.type) {
case ADD_TO_CART:
return {
...state,
cardData: [...state.cardData, action.payload]
}

case REMOVE_FROM_CART:
return {
...state,
cardData: state.cardData.filter((item) => item.id !== action.payload.id)
}

case ADD_QUANTITY:
    let data= action.payload
    return{
        ...state,number:state.number+data
    }

case SUBTRACT_QUANTITY:
    let data1= action.payload
return{
    ...state,number:state.number-data1
}

//add user
case REGISTER_SUCCESS:
    return{
        ...state,
        cardData:action.payload
    }


default:
return state


}
    

}
