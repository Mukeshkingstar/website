import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useState,useEffect } from 'react';
const Contact = () => {
  const [data,setData] = useState({
    name:'',
    email:'',
    message:'',
  });
let Name ,Value;
const userData =(event)=>{
Name = event.target.name;
Value = event.target.value;
setData({...data, [Name]:Value});
} 

const { name,email,message } = data;

		const sendData = async(e)=>{
e.preventDefault();
const res = await fetch('https://mukeshkingstar0-default-rtdb.firebaseio.com/contactform.json',
{method :"POST",
headers:{
  "Content-type" : "application/json",
},
body :JSON.stringify({
name,
email,
message,
})
}
);if(res){
  setData({
    name:'',
    email:'',
    message:'',
  }); 
  alert('Send Succesfully ')
}
    }

  return (
    <div className="contact">
      <center>
      <form method="POST">
        <h1>Contact-Form</h1>
        <input type="text" placeholder='Name' name='name' value={data.name} onChange={userData} required/> <br />
        <input type="text"  placeholder='Email' name='email' value={data.email} onChange={userData} required/> <br />
<textarea placeholder='Enter your message' name='message' value={data.message} onChange={userData} required></textarea> <br/>
<button onClick={sendData} type='submit'>Send message</button>
      </form>
      </center>
    </div>
  )
}

export default Contact