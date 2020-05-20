
import { ADD_TO_CART,REMOVE_FROM_CART,SUB_QUANTITY,ADD_QUANTITY} from './action-types/cart-actions'

//add cart action
export const addToCart= (item)=>{
    return{
        type: ADD_TO_CART,
        item
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_FROM_CART,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
