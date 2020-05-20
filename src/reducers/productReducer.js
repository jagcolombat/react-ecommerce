import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'
import Item4 from '../images/item4.jpg'
import Item5 from '../images/item5.jpg'
import Item6 from '../images/item6.jpg'
import Item7 from '../images/item7.jpg'
import Item8 from '../images/item8.jpg'
import {ADD_ITEM, GET_ITEMS, REMOVE_ITEM} from "../actions/action-types/product-actions";

const initState = {
    items: []
}
const images = [
    {id: "1", payload: Item1},
    {id: "2", payload: Item2},
    {id: "3", payload: Item3},
    {id: "4", payload: Item4},
    {id: "5", payload: Item5},
    {id: "6", payload: Item6},
    {id: "7", payload: Item7},
    {id: "8", payload: Item8}
    ];

const productReducer= (state = initState,action)=>{

    switch(action.type){
        case ADD_ITEM:
            let addedItem = state.items.find(item=> item.id === action.payload.id || item.name === action.payload.name);
            if(!addedItem)
            {
                let new_items = state.items.push(action.payload);
                return{
                    ...state,
                    items: new_items
                }
            }
            break;
        case REMOVE_ITEM:
            let itemToRemove= state.items.find(item=> action.id === item.id);
            let new_items = state.items.filter(item=> action.id !== item.id);
            console.log(itemToRemove);
            return{
                ...state,
                items: new_items
            }
            break;
        case GET_ITEMS:
            let items = action.payload.map(item => {
                //console.log('GET_ITEMS', item);
                item.picture = images.find(img => img.id === item.picture).payload;
            });
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }

}

export default productReducer