import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { getItems } from "../actions/productAction";
import Product from "./Product";

 class Home extends Component{

    componentDidMount(){
        this.props.getItems();
    }

    render(){
        //console.log(this.props);
        let itemList = this.props.items.map(item=>{
            return(
                <Product key={item.id} item={item} shop={true}/>
            )
        })

        return(
            <div className="container">
                <h3 className="center">Products</h3>
                <div className="box">
                    {itemList}
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
        getItems: ()=>{dispatch(getItems())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)