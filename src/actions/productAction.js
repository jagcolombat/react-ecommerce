import axios from 'axios'
import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, GET_ITEMS} from './action-types/product-actions'

//add product action
export const addToCart= (item)=>{
    return{
        type: ADD_ITEM,
        item
    }
}
//remove product action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//edit product action
export const editItem=(item)=>{
    return{
        type: EDIT_ITEM,
        item
    }
}
//get products action
export const getItems=()=>{
    return (dispatch, getState) => {
        axios.get('http://localhost:3001/products').then( res => {
            console.log('getItems', res.data);
            dispatch({ type: GET_ITEMS, payload: res.data})
        })
    }
}
