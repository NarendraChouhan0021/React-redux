import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'


class ListArray extends Component {
  constructor(props){
    super(props)
  
  }
  contactno(e){
    e.preventDefault()
    console.log("events")
  }

  render() {
    return (
        <div>
        <ul>
        {this.props.list.map((data,i)=>(
          <li key={i}>{data.name} <button onClick={()=>this.props.delete(i)}>delete</button></li>

        ))
        }
        </ul>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("ListArray-state",state)
  return {
    email:state.register_StateObj.user.email
   }
};

export default  withRouter ( connect(mapStateToProps) (ListArray));
