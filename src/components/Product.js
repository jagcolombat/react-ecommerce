import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { getItems } from "../actions/productAction";
import { removeItem } from "../actions/productAction";
import { editItem } from "../actions/productAction";

class Product extends Component{

    shop;

    constructor(props){
        super(props)
    }

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
        this.props.editProd(editItem);
    }


    componentDidMount(){
        this.props.getItems();
    }

    render(){
        //console.log('Product', this.props);
        //let itemList = this.props.items.map(item=>{
        let item = this.props.item;
        let shop = this.props.shop;
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
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}$</b></p>
                </div>
            </div>

        )
        //})

        /*return(
            <div className="container">
                <h3 className="center">Products</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )*/
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