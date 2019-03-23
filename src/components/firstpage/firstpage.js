import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

import ListArray from '../listarray/listarray'

class FirstPage extends Component {
  constructor(props){
    super(props)
    let list=[
      {id:0,name:'item0'},
      {id:1,name:'item1'},
      {id:2,name:'item2'},
      {id:3,name:'item3'},
      {id:4,name:'item4'},
      {id:5,name:'item5'},
      {id:6,name:'item6'}
    ]
    this.state={
      mobileno:"",
      list:list
    }
    this.delete = this.delete.bind(this);
  }
  contactno(e){
    e.preventDefault()
    console.log("events")
  }

  delete(i){
    //e.preventDefault()
    this.setState({
      list:this.state.list.filter((_,j)=>j!==i)
      
    })
    
  }

  render() {
    return (
      <div>
        <h1>first page {this.props.email}</h1>
        <input type="text" name="userInputValue" placeholder="Username" 
        defaultValue={this.props.email} disabled />
        <p> please add you contact no</p>
        <input type="number" name="mobileno" placeholder="Mobile No" 
        defaultValue={this.state.mobileno} onChange={ this.contactno} />  
        <ListArray list={this.state.list} delete={this.delete}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("firstpage-state",state)
  return {
    email:state.register_StateObj.user.email
   }
};

export default  withRouter ( connect(mapStateToProps) (FirstPage));
