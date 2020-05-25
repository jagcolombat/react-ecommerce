import React, { Component } from 'react';
// import Materialize from 'materialize-css';
// Redux
import {connect} from 'react-redux';
import {addItem, editItem} from '../actions/productAction';

class NewProduct extends Component {

     state = { 
          name: '',
          price: '',

          error: false
     }

    constructor(props){
        super(props);
        this.updateAddProd = this.updateAddProd.bind(this);
    }

    componentDidMount() {}

    componentWillReceiveProps(nextProps, nextState){
        console.log('componentWillReceiveProps', nextProps);
        this.setState({ name: nextProps.item.name, price: nextProps.item.price, isEditing: nextProps.isEditing})
        //Materialize.updateTextFields();
        /*const {name, price} = nextProps.item;
        this.setState({name, price});*/
    }
     
     itemName = e => {
         console.log('itemName', e.target.value);
          this.setState({name: e.target.value })
     }

     itemPrice = e => {
          this.setState({price: e.target.value })
     }

     updateAddProd = e => {
          e.preventDefault();
          const { name, price } = this.state;
          if(name === '' || price === '') {
               this.setState({error: true});
               return;
          } 
          this.setState({error: false})
          // Crear el objeto
          const newItem = {
              name: name,
              price: price,
              dept: 0,
              subdept: 0,
              picture: "0"
          }
          console.log(newItem);
          // update or add new item
          (this.state.isEditing) ?
              this.props.editItem({...newItem, id: this.props.item.id, picture: this.props.item.picture}):
              this.props.addItem(newItem);

          this.setState({name: '', price: '', error: false, isEditing: false})
         //Materialize.updateTextFields();
     }

     render() {
         console.log('render FromProduct', this.props)
          const {error} = this.state;
          let item = this.props.item;
         //const {item, error} = this.state;
          return (
               <div className="row">
                    <h5 className="center">{this.state.isEditing ? 'Update Product': 'New Product'}</h5>
                    <form className="col s12">
                         <div className="row">
                             <div className="input-field col s6">
                                 <label htmlFor="name" className={this.state.isEditing ? 'active': 'normal'}>Name</label>
                                 <input id="name" onChange={this.itemName} type="text" className="validate"
                                        value={this.state.name}/>
                             </div>

                             <div className="input-field col s6">
                                 <label htmlFor="price" className={this.state.isEditing? 'active': ''}>Price</label>
                                 <input id="price" onChange={this.itemPrice} type="number" className="validate"
                                        value={this.state.price}/>
                             </div>
                         </div>
                         <button type="button" className="btn" onClick={this.updateAddProd}>
                             {this.state.isEditing ? 'Update': 'Add'}
                         </button>
                         {/*<div className="row">
                             <div className="form-group input-field col s6">
                                 <select>
                                      <option value="" disabled selected>Choose a department</option>
                                      <option value="1">Shoes</option>
                                      <option value="2">Food</option>
                                 </select>
                                 <label>Department</label>
                             </div>
                         </div>
                         <div className="row">
                             <div className="form-group input-field col s6">
                                 <select>
                                     <option value="" disabled selected>Choose a sub-department</option>
                                     <option value="1">Shoes</option>
                                     <option value="2">Food</option>
                                 </select>
                                 <label>Sub-department</label>
                             </div>
                         </div>*/}
                    </form>
               </div>
           );
     }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        addItem: (item)=>{dispatch(addItem(item))},
        editItem: (item)=>{dispatch(editItem(item))}
    }
}

export default connect(null, mapDispatchToProps)(NewProduct)