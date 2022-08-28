import React from 'react'

function NavBar({loginStat, handleLogOut, handleRandomPlan }) {
  return (
    <nav className= "navbar navbar-expand-lg navbar-light bg-light">
    <button style={{ textDecoration: 'none', color: "black", fontSize: 25, paddingBottom: "10px" }} to="/" onClick={(e) =>handleLogOut(e)}>{loginStat ? "logout" :"home"} </button>
    {loginStat ? <button style={{ textDecoration: 'none', color: "black", fontSize: 25, paddingBottom: "10px" }} to="/" onClick={(e) =>handleRandomPlan(e)}>random plan </button> : null}

    </nav>
  )
}

export default NavBar