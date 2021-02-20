import React,{useState} from 'react'
import "./Login.css"
import axios from 'axios';

function Login() {
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");

    function handlechangeuser(e){
        
        setUser(e.target.value);
    }
    function handlechangepass(e){
        setPassword(e.target.value);
    }

    function handleSubmit(e){   
        e.preventDefault();
        axios.post("http://localhost:5000/login",{user:user,password:password}).then((res)=>{
            if(res.data==="Success"){
                window.location="/home";
            }
        }).catch((err)=>{
            console.log(err);
        });
    }

    return (
    <div className="container">
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="name" placeholder="Enter your Username" onChange={handlechangeuser} value={user}/>
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={handlechangepass}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
   </div>
    );
}

export default Login;
