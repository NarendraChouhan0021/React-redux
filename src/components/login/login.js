import React, { Component } from 'react';
// import history from '../../history'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import './login.css'
class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userInputValue: "",
            pwdInputValue: "",
            title:"login Page"
        };
        console.log("parent data............",this.props)
        this.handleUserinputs = this.handleUserinputs.bind(this);
        this.handlePwdinputs = this.handlePwdinputs.bind(this);
    }

    onSubmits(e,obj) {
        e.preventDefault()
        console.log("fdsafsdfsfsd",e,obj)      
        if(obj){
            //this.props.authUser(obj)
            this.props.history.push({pathname:"/FirstPage"})
        }  
    }

    handleUserinputs(e) {
        e.preventDefault()
        console.log("handleUserinputs",e)
        this.setState({
          userInputValue: e.target.value,
        })
    }

    handlePwdinputs(e) {
        e.preventDefault()
        console.log(e.target.value)
        this.setState({
            pwdInputValue: e.target.value,
        })
    }

    render() {
        return (
            <div className="container">
            <div >{this.state.title} </div>
                <form onSubmit={(e)=>this.onSubmits(e,{user:this.state.userInputValue,pwd:this.state.pwdInputValue})} >
                    <input type="text" name="userInputValue" placeholder="Username" 
                    defaultValue={this.props.email}  
                    onChange={this.handleUserinputs} required/>
                    <input type="password" name="pwdInputValue" placeholder="Password" 
                    defaultValue={this.props.password} onChange={this.handlePwdinputs}  required/>
                    <input type="submit" value="Login" /> 
                </form>

                <div className="bottom-container">
                    <div className="row">
                        <div className="col">
                        <a href="#" style={{color:"white"}} className="btn">Sign up</a>
                        </div>
                        <div className="col">
                        <a href="#" style={{color:"white"}} className="btn">Forgot password?</a>
                        </div>
                    </div>
                </div>
            </div>      
        );
    }
}

    const mapStateToProps = (state) => {
        console.log("firstpage-state",state)
        return {
            email:state.register_StateObj.user.email,
            password:state.register_StateObj.user.password
        }
    };
  
export default withRouter ( connect(mapStateToProps)(Login));
