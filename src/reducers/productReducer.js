
import {ADD_ITEM, EDIT_ITEM, GET_ITEMS, GET_ITEM, REMOVE_ITEM} from "../actions/action-types/product-actions";

const initState = {
    items: [],
    item: null
}


const productReducer= (state = initState, action)=>{

    switch(action.type){
        case ADD_ITEM:
            let addedItem = state.items.find(item=> item.price === action.payload.price && item.name === action.payload.name);
            if(!addedItem)
            {
                return {
                    ...state,
                    items: [...state.items, action.payload]
                }
            } else {
                return state;
            }
        case REMOVE_ITEM:
            console.log(action);
            return{
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        case EDIT_ITEM:
            console.log('EDIT_ITEM', action);
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? (item = action.payload) : item
                )
            }
        case GET_ITEM:
            return {
                ...state,
                item: action.payload
            }
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }

}

export default productReducer