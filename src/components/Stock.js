import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from "../actions/productAction";
import Product from "./Product";
import NewProduct from "./FormProduct";

 class Stock extends Component{

     state = {
         isEditing: false,
         editItem: {}
     };

    componentDidMount(){
        this.props.getItems();
    }

     editItem(item) {
         this.setState({ isEditing: true, editItem: item });
     }

    render(){
        let itemList = this.props.items;
        return(
            <div className="container">
                <div className="col s12">
                    <div className="row">
                        <div className="center col s12">
                            <NewProduct item={this.state.editItem} isEditing={this.state.isEditing}/>
                        </div>
                    </div>
                    <div className="row">
                        <h5 className="center">Products</h5>
                        <div className="box">
                            {itemList.map(item => (
                                <Product key={item.id} item={item} shop={false} edit={this.editItem.bind(this)}/>
                            ))}
                        </div>
                    </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Stock)