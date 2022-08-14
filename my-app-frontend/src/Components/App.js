import React, {useState}from 'react'
import {Route, Routes } from "react-router-dom"
import Login from './Login';
import MealPlan from './mealPlan';
import NavBar from './NavBar';

function App() {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  })
const [loginStat, setLoginStat]= useState(false)
const [mealData, setMealData] = useState({})
// const [morningMeal, setMorningMeal]= useState ([])
//  const [snackMeal, setSnackMeal]= useState ([])
//   const [lunchMeal, setLunchMeal]= useState ([])
//   const [dinnerMeal, setDinnerMeal]= useState ([])

  function onChange(e){
    if (e.target.name=== "username"){
      setLogin({...login, username: e.target.value})
    } else {
      setLogin({...login, password: e.target.value})
    }
  }

  function getMealPlan () {
    fetch("http://localhost:9292/meal_plan")
    .then(resp => resp.json())
    .then(data => setMealData(data)) 
  }

    //  function mealPlansorter (mealPlan){
    //    mealPlan.map(meal=> {
    //      setMorningMeal( morningMeal.push({name: meal.morning_meal, image: meal.morning_image}))
    //      setSnackMeal(snackMeal.push({name: meal.after_meal_snack, image: meal.after_meal_image}))
    //      setLunchMeal(lunchMeal.push({name: meal.noon_meal, image: meal.noon_image}))
    //      setDinnerMeal(dinnerMeal.push({ name: meal.evening_meal, image: meal.evening_image}))
    //    }
    //    )
    //    console.log(morningMeal)
    //    console.log(snackMeal)
    //    console.log(lunchMeal)
    //    console.log(dinnerMeal)
    //  }
   
  function onLoginSubmit(e){
    e.preventDefault()
    e.stopPropagation()
    fetch("http://localhost:9292/login", {
      method : "POST",
      headers:{ 'Content-Type' : 'application/json'},
    body: JSON.stringify(login),
    })
    .then(resp => resp.json())
    .then(data =>data.status == 200 ? setLoginStat(true) : setLoginStat(false)
        )
  }

  function handleLogOut(e){
    e.stopPropagation()
    if(loginStat){
    setLoginStat(false)
    fetch("http://localhost:9292/logout", 
      {method : "PATCH"}
    )
    }
  }
 

  return (
    <div>
      <NavBar handleLogOut = {handleLogOut} loginStat={loginStat} getMealPlan= {getMealPlan}/>
    <Routes>
      <Route 
      exact path = "/"
      element= {<Login onLoginSubmit={onLoginSubmit} onChange={onChange}/>}>
        </Route>
      <Route
      exact path = "/meal_plan"
      element= {<MealPlan 
      mealData = {mealData}/>}>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
