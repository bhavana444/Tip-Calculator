import React, { Component } from 'react'
import axios from "axios";
import'./register.css';
export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }

    handleName = (e) => {
        this.setState({
            username:e.target.value
        })
    }

    handlePass = (e) => {
        this.setState({
            password:e.target.value
        })
    }


    handleSubmit = (e) => {
        
        console.log({username:this.state.username,password:this.state.password});
        axios.post(`http://localhost:5500/signup`,{username:this.state.username,password:this.state.password})
        .then(res => console.log(res));
        window.location = "/calculator";
    }
    render() {
        return (
        <div className="container">
            
            
                <form  onSubmit={this.handleSubmit}>
                <div>
                <label>UserName</label>
                <input type="text" placeholder="Username" id="user" name="username" value={this.state.username} onChange={this.handleName} required />
                <br/><br/>
                <label>Password</label>
                <input type="password" placeholder="Password" id="password" name="password" value={this.state.password} onChange={this.handlePass} required />
                <br/><br/>
                <input id="submit" type="submit" value="Submit"/>
               
                
               
                </div>
                
                </form>
                
            
           
        </div>
        )
    }
}
