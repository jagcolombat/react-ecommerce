import axios from 'axios'
import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, GET_ITEMS, GET_ITEM} from './action-types/product-actions'

//add product action
export const addItem= (item)=> async dispatch => {
    const res = await axios.post('http://localhost:3001/products', item);
    console.log('addItem', res)
    dispatch({ type: ADD_ITEM, payload: res.data})
}

//remove product action
export const removeItem = id => async dispatch => {
    await axios.delete(`http://localhost:3001/products/${id}`);
    dispatch({
        type: REMOVE_ITEM,
        payload: id
    })
}
//edit product action
export const editItem = item => async dispatch => {
    console.log('editItem', item);
    const res = await axios.put(`http://localhost:3001/products/${item.id}`, item);
    dispatch({
        type: EDIT_ITEM,
        payload: res.data
    })
}
//get product by id action
export const getItem = id => async dispatch => {
    const res = await axios.get(`http://localhost:3001/products/${id}`);
    dispatch({
        type: GET_ITEM,
        payload: res.data
    })
}
//get products action
export const getItems = () => async dispatch => {
    const res = await axios.get('http://localhost:3001/products');
    dispatch({
        type: GET_ITEMS,
        payload: res.data
    })
}
