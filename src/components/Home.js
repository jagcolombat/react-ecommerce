import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { getItems } from "../actions/productAction";

 class Home extends Component{
    
    handleClick = (id)=>{
        let addedItem = this.props.items.find(item=> item.id === id)
        this.props.addToCart(addedItem);
    }

    componentDidMount(){
        this.props.getItems();
    }

    render(){
        console.log(this.props);
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.picture} alt={item.name}/>
                            <span className="card-title">{item.name}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>

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
        addToCart: (item)=>{dispatch(addToCart(item))},
        getItems: ()=>{dispatch(getItems())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)