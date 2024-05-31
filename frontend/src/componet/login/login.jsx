import React,{useState} from 'react'
import "./login.css"
import LoginValidation from './loginValidatin'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
function Login1() {
  const[values,setValues]=useState({
    email:'',
    password:''
  })
  const navigate=useNavigate()
  const[errors,setErrors]=useState({})
  const handleInput=(event)=>{
    setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
  }
  const handleSubmit=async(event)=>{
    event.preventDefault()
    setErrors(LoginValidation(values))
    if(errors.email===""&errors.password===""){
      axios.post("http://localhost:3000/login",values)
      .then(res=>console.log(res) )
      .catch(err=>console.log(err))
    }
  }
  return (
    <div className="LoginForm">
      <h1>Login here</h1>
      <form className='container' onSubmit={handleSubmit}>
        <div className="element">
            <label htmlFor="email">Email</label>
            <span style={{color:"red"}}>{errors.email}</span>
            <input type="email" name="email" id="email" 
            onChange={handleInput} placeholder='enter your email' />
        </div>
        <div className="element">
            <label htmlFor="password">password</label>
            <span style={{color:"red"}}>{errors.password}</span>
            <input type="password" name="password" id="password" 
            onChange={handleInput} placeholder='enter your password'/>
        </div>
        <button type="submit">Login</button>
        <p>not yet a member? <span><Link to="/signup">signup</Link></span></p>
      </form>
    </div>
  )
}

export default Login1
