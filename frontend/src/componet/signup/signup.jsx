import React, { useEffect, useState } from 'react'
import SignupValidation from './signupValidation'
import './signup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Singup1() {
    const[values,setValues]=useState({
        name:'',
        email:'',
        password:''
    })
    const navigate=useNavigate()
    const[errors,setErrors]=useState({})
    const changeInput=(e)=>{
        setValues({...values,[e.target.name]:[e.target.value]})
        console.log(values)
    }
    const submitHandler=(event)=>{
        event.preventDefault()
        setErrors(SignupValidation(values))
        if(errors.name===""&&errors.email===""&&errors.password===""){
            axios
              .post("http://localhost:3000/register", values)
              .then(navigate("/"))
              .catch((err) => console.log(err));
        }
    }
    const styleSpan={
        color:"red",
        marginBottom:'5px'
    }
  return (
    <div className="LoginForm">
    <h1>Signup here</h1>
    <form className='container' onSubmit={submitHandler}>
      <div className="element">
          <label htmlFor="name">name</label>
          <span style={styleSpan}>{errors.name}</span>
          <input type="text" name="name" id="name" 
           onChange={changeInput} placeholder='enter your name' />
      </div>
      <div className="element">
          <label htmlFor="email">Email</label>
          <span style={styleSpan}>{errors.email}</span>
          <input type="email" name="email" id="email" 
           onChange={changeInput} placeholder='enter your email' />
      </div>
      <div className="element">
          <label htmlFor="password">password</label>
          <span style={styleSpan}>{errors.password}</span>
          <input type="password" name="password" id="password" 
          onChange={changeInput}  placeholder='enter your password'/>
      </div>
      <button type="submit">signup</button>
      <p>are you a member? <span><Link to="/">login</Link></span></p>
    </form>
  </div>
  )
}

export default Singup1
