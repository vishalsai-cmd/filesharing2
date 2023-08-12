import React from 'react';
import { useState } from 'react';
import axios from "axios";
import "./App.css";

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    async function submit(e){
        e.preventDefault();
        try{
            axios.post("http://localhost:5050/login-user",{
                email,
                password
            })
            .then((res) =>res.data)
            .then((data) =>{
                console.log(data,"userregister")
                if(data.status == "ok")
                {
                    alert("login successfull");
                    window.localStorage.setItem("token",data.data);
                    window.location.href="./app1"
                }
            })
        }
        catch(e){
            console.log(e);
        }
    }
  return (
    <div className="container">
    <div className="wrapper">
        <h1>Login Page</h1>
      <form onSubmit={submit}>
        <label>email:   </label>
        <input type="email" placeholder="email" onChange={(e) =>{setEmail(e.target.value)}} />
        <br />
        <br />
        <br />
        <label>password:</label>
        <input type="text" placeholder="password" onChange={(e) =>{setPassword(e.target.value)}} />
        <br />
        <br />
        <button type="submit">login</button>
      </form>
      <p>did not register?</p>
      <a href="/signup">signup</a>
    </div>
    </div>
  )
}

export default Login;