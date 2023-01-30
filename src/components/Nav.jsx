import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
const Nav = () => {
  const { loginWithRedirect ,user, isAuthenticated, isLoading} = useAuth0();
  return (
    <>
  <div className="Nav">
        <div className="logo">
        <NavLink to='/'>   <img src="logo.png" height={50} /> </NavLink>
       
        </div>
        <div className="link">
<a href="https://king-cricket.netlify.app/"><li>Watch</li></a>
<NavLink to='/contact'><li>Contact</li></NavLink>
{
  isAuthenticated ?  <NavLink to='/admin'> <img src={user.picture} alt={user.name} height={50} /></NavLink>:<button onClick={() => loginWithRedirect()}>Log In</button> 
}
        </div>

        </div>
   
    </>
  )
}

export default Nav