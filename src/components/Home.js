import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from "../actions/productAction";
import Product from "./Product";

 class Home extends Component{

    componentDidMount(){
        this.props.getItems();
    }

    render(){
        console.log(this.props);
        let itemList = this.props.items
        return(
            <div className="container">
                <h5 className="center">Products</h5>
                <div className="box">
                    {itemList.map(item => (
                        <Product key={item.id} item={item} shop={true}/>
                    ))}
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