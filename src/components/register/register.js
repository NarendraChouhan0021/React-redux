import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
// import * as  action from "../../actions/authUser_action"
import * as  action from "../../actions/register/registerUser_action"
import './register.css'
import Login from '../login/login'
class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            re_password:"",
            validate:false
        }
        
        this.getpassword = this.getpassword.bind(this);
        this.getrepassword = this.getrepassword.bind(this);
        this.onRegister = this.onRegister.bind(this);
        this.getEmail = this.getEmail.bind(this);
    }

    getEmail(e){
        e.preventDefault()
        console.log("getEmail",e.target.value)
        this.setState({
            email: e.target.value
        })
    }

    getpassword(e){
        e.preventDefault()
        console.log("getpassword",e.target.value)
        this.setState({
            password: e.target.value
        })

        //------- setState----

        // this.setState({password: e.target.value}, function () {
        //     console.log("heloo",this.state.password);
        // });
        console.log(this.state.password)
    }

    onRegister(e){
        e.preventDefault()
        var obj={
            email:this.state.email,
            password:this.state.password,
        }

        if(this.state.recheck){
            this.props.registerUser(obj);
            this.props.history.push({pathname:"/LoginPage"})
        }
        console.log("register.........", this.state.password)
    }

    getrepassword(e){
        e.preventDefault()
        this.setState({
            validate: true
        })
        
        if(e.target.value==this.state.password){
            this.setState({
                validate: false,
                recheck:true,
                re_password: e.target.value
            })
        }
    }
    // parentMethod(){
    //     console.log('parent method called')
    // }

  render() {
    return (
        <React.Fragment>
            <form>
                <div className="container">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" 
                     onChange={this.getEmail}required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" 
                    onChange={this.getpassword} 
                    required />

                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" 
                    onChange={this.getrepassword} required />
                           {this.state.validate ? <p style={{color:"red"}}>password doesn't match</p>:null}
                    <hr/>
                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                   
                    {/* {this.state.validate ?  <Login parentMethod={this.parentMethod} />:null} */}

                   
                    <button type="submit" className="registerbtn" onClick={this.onRegister}>Register</button>
                </div>
            
                <div className="container signin">
                    <p>Already have an account? </p>
                    <h6 onClick={()=>this.props.history.push({pathname:"/FirstPage"})}>Sign in</h6>
                </div>
            </form>
        </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      registerUser: obj => dispatch(action.registerUser(obj))
    }
  };


export default  withRouter ( connect(null,mapDispatchToProps)(Register));

