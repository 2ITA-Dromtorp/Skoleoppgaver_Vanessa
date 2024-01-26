import React from 'react'
import { Outlet } from 'react-router-dom'
import "./firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";


function Layout() {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
    });
  return (
    <div className='content'>
        <div className='child'>
        <p>React with Firebase auth</p>
        </div>
        <Outlet/>
    </div>
  )
}

export default Layout