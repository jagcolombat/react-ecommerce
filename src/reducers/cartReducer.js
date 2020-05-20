import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../actions/action-types/cart-actions';

const initState = {
    addedItems:[],
    total: 0
};

const cartReducer = (state = initState,action) => {

    if(action.type === ADD_TO_CART){
          let item2Add = action.item;
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.item.id === item.id)
         if(existed_item)
         {
             item2Add.quantity += 1
             return{
                ...state,
                 total: state.total + item2Add.price
                  }
        }
         else{
             item2Add.quantity = 1;
            //calculating the total
            let newTotal = state.total + item2Add.price
            return{
                ...state,
                addedItems: [...state.addedItems, item2Add],
                total : newTotal
            }
        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type=== ADD_QUANTITY){
        let addedItem = state.addedItems.find(item=> item.id === action.id)
          addedItem.quantity += 1 ;
          let newTotal = state.total + addedItem.price
          return {
              ...state,
              total: newTotal
          }
    }

    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.addedItems.find(item=> item.id === action.id)
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }
    else{
        return state
    }
    
};

export default cartReducer;
