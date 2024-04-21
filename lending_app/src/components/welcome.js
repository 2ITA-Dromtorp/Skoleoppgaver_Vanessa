import React from 'react'
import { Link } from 'react-router-dom'

function LoginDisplay() {
  return (
    <div>
        <navbar>Logg inn</navbar>
            <div className='loginDisplay'>
                <Link to="/login"><button className='login_button'>Logg inn som Elev</button></Link>
                <Link to="/adminLogin"><button className='login_button'>Logg inn som Lærer</button></Link>
            </div>
    </div>
  )
}

export default LoginDisplay