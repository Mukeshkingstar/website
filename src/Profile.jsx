import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const Profile = () => {
    const { user, isAuthenticated, isLoading,logout } = useAuth0();
  return (

    <>
    <center>
        <div className="profile">
        <h1>YOUR ACCOUNT</h1>
        <img src={user.picture} alt={user.name} height={200}/>
        <h2>Name : {user.name}</h2>
        <h2> Email : {user.email}</h2>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
        </div>
    </center>
    </>
  )
}

export default Profile