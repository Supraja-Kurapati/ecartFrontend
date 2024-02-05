import React from 'react'

const Logout = () => {
    const handleLogout=()=>{
        localStorage.removeItem('token')
        alert("you Have Logged Out")
    }
  return (
    <div>
<button id='loginbutton' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout