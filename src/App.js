import React, { Component } from "react";
// import uuid from "uuid";
// import { v4 as uuidv4 } from 'uuid';

import {v1 as uuid} from "uuid"; 
// import {v3 as uuid} from "uuid"; 
// import {v4 as uuid} from "uuid"; 
// import {v5 as uuid} from "uuid";

import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';



class App extends Component {
state = {
  items:[
    {id:1,title:"wake up"},{id:2,title:"make breakfast"}],
     id : uuid(),
     item:'',
     editItem:false
};
handleChange= e =>{this.setState({item: e.target.value})}
handleSubmit=(e)=>{e.preventDefault();
const newItem={
  id:this.state.id,
  title:this.state.item
}
const updatedItems=[...this.state.items,newItem]
this.setState({
  items:updatedItems,
  item:'',
  id:uuid(),
  editItem: false
},()=>console.log(this.state))
}
clearList=()=>{console.log("clear list");}
handleDelete=(id)=>{console.log(`handle Delete ${id}`);}
handleEdit=(id)=>{console.log(`edit ${id}`);}

  render() 
  {
    // console.log(this.state)
    // console.log(this.state)
        return (
    
      <div className="container">
        <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-capitalize text-container">

        <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.editItem}/>
          <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
          </h3>
        </div>
        </div>
    </div>
    );
  }
}

export default App;