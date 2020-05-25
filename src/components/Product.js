import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { getItems } from "../actions/productAction";
import { removeItem } from "../actions/productAction";
import { editItem } from "../actions/productAction";
import Item0 from '../images/item0.jpg'
import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'
import Item4 from '../images/item4.jpg'
import Item5 from '../images/item5.jpg'
import Item6 from '../images/item6.jpg'
import Item7 from '../images/item7.jpg'
import Item8 from '../images/item8.jpg'
const images = [
    {id: "0", payload: Item0},
    {id: "1", payload: Item1},
    {id: "2", payload: Item2},
    {id: "3", payload: Item3},
    {id: "4", payload: Item4},
    {id: "5", payload: Item5},
    {id: "6", payload: Item6},
    {id: "7", payload: Item7},
    {id: "8", payload: Item8}
];

class Product extends Component{

    shop;

    handleAddToCart = (id)=>{
        let add2CartItem = this.props.items.find(item=> item.id === id)
        this.props.addToCart(add2CartItem);
    }
    handleDelProd = (id)=>{
        //let delItem = this.props.items.find(item=> item.id === id)
        this.props.delProd(id);
    }
    handleEditProd = (id)=>{
        let editItem = this.props.items.find(item=> item.id === id)
        this.props.edit(editItem);
    }

    render(){
        //console.log('Product', this.props);
        //let itemList = this.props.items.map(item=>{
        let item = this.props.item;
        let shop = this.props.shop;
        let picture = images.find(img => img.id === item.picture);
        if(picture) item.picture = picture.payload;
        return(
            <div className="card" key={item.id}>
                <div className="card-image">
                    <img src={item.picture} alt={item.name}/>
                    <span className="card-title">{item.name}</span>
                    <div className='actions'>
                        <span to="/" className={shop ? 'btn-floating halfway-fab waves-effect waves-light red':'hidden'}
                            onClick={()=>{this.handleAddToCart(item.id)}}><i className="material-icons">add</i></span>
                        <span to="/" className={!shop ? 'btn-floating halfway-fab waves-effect waves-light red':'hidden'}
                            onClick={()=>{this.handleDelProd(item.id)}}><i className="material-icons">delete</i></span>
                        <span to="/" className={!shop ? 'btn-floating halfway-fab waves-effect waves-light red':'hidden'}
                            onClick={()=>{this.handleEditProd(item.id)}}><i className="material-icons">edit</i></span>
                    </div>

                </div>

                <div className="card-content">
                    <p><b>Price: $ {item.price}</b></p>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state)=>{
    return {
        items: state.productReducer.items
    }
}
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (item)=>{dispatch(addToCart(item))},
        getItems: ()=>{dispatch(getItems())},
        delProd: (item)=>{dispatch(removeItem(item))},
        editProd: (item)=>{dispatch(editItem(item))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)