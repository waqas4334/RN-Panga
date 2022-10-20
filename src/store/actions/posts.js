
import axios from "axios"

import { GETPOSTS,GETUSERS,postUsers } from "../../utils/urls" 

export const getPosts = () => {
// alert(GETPOSTS)
    return  axios.get(GETPOSTS)

}
 
export const posted = () => {

      axios.post(postUsers).then(res => {
        // console.log('Action Return',res.data)
        dispatch({
            type : REGISTER_SUCCESS,
            payload : res.data 
        })
    }  
    
    )

}