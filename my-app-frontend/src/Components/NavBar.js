import React from 'react'
import {NavLink} from "react-router-dom"

function NavBar({loginStat, handleLogOut, getMealPlan}) {
  return (
    <nav className= "navbar navbar-expand-lg navbar-light bg-light">
    <NavLink style={{ textDecoration: 'none', color: "black", fontSize: 25, paddingBottom: "10px" }} to="/" onClick={(e) =>handleLogOut(e)}>{loginStat ? "logout" :"login"} </NavLink>
    {loginStat == true ? <NavLink style={{ textDecoration: 'none', color: "black", fontSize: 25, paddingBottom: "10px" }} to="/meal_plan" onClick={getMealPlan}>MealPlan </NavLink> : null }
    </nav>
  )
}

export default NavBar