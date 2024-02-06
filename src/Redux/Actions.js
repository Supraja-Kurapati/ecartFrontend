import axios from "axios";

export const addItemToCart=(id)=>async(dispatch)=>{
    try{
        // const {data}=await axios.get(`http://localhost:5132//api/store/${id}`)

        const {data}=await axios.get(`https://ecartbackend-qtwf.onrender.com/api/store/${id}`)

        dispatch({type:'addtocart',payload:data})
    }
    catch(error){
        console.error('Error in Fetching',error)
    }
}

const initialState={
    cartItems:[]
}

const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'addtocart':
    return{
        ...state,
        cartItems:[...state.cartItems,action.payload],
    }
    //removing updating quantitties
    default:
        return state;
    }

}

export default cartReducer