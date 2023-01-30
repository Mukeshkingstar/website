import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (<>
    <div className="main">
        <center>
            <div className="top">
<h1>WELCOME TO WEBSITE <br />
     <span>MUKESH_KING </span>
      </h1>
       </div> 
       <br />
      <p>Hi' I am Frontend Devoloper <br /> And Digital Creater</p>
      <NavLink to='contact'><button>Contact Here</button></NavLink>
    </center>
    </div>
    </>
  )
}

export default Home