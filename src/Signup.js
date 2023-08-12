import React,{useState} from 'react';
import axios from "axios";
import "./App.css";

function Signup() {
    const [fname,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    
        async function submit(e)
        {
            e.preventDefault();
            try{
                await axios.post("http://localhost:5050/register",{
                    fname,email,password
                })
                .then((res) =>res.data)
                .then((data) =>{
                    console.log(data,"userregister")
                    window.location.href="/"
                })
            }
            catch(e){
                console.log(e);
            }
    
        }
        
  return (
    <div className='container'>
        <div className="wrapper">
            <h1>Signup Page</h1>
      <form onSubmit={submit}>
        <label>fname: </label>
        <input type="text" placeholder="fname" onChange={(e)=>{setName(e.target.value)}}></input>
        <br />
        <br />
        <br />
        <br />
        <label>email: </label>
        <input type="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
        <br />
        <br />
        <br/>
        <br />
        <label>password: </label>
        <input type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
      </div>
    </div>

  )
}

export default Signup