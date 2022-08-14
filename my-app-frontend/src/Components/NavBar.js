import React from 'react'

function NavBar({loginStat, handleLogOut }) {
  return (
    <nav className= "navbar navbar-expand-lg navbar-light bg-light">
    <button style={{ textDecoration: 'none', color: "black", fontSize: 25, paddingBottom: "10px" }} to="/" onClick={(e) =>handleLogOut(e)}>{loginStat ? "logout" :"login"} </button>
    </nav>
  )
}

export default NavBar