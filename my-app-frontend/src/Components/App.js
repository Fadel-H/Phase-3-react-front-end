import React, {useState}from 'react'
import Login from './Login';
import MealPlan from './mealPlan';
import NavBar from './NavBar';

function App() {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  })
const [loginStat, setLoginStat]= useState(false)

const [dayMeal, setDayMeal]= useState ([])

function getDayMeal () {
  fetch("http://localhost:9292/meal_plan")
.then(resp => resp.json())
.then(data =>{
  console.log(data)
    setDayMeal( data.map( d => ([
      d.morning_image,
      d.morning_meal,
      d.after_meal_image,
      d.after_meal_snack,
      d.noon_image,
      d.noon_meal,
      d.evening_image,
      d.evening_meal
    ])))
  }
)
}
  function onChange(e){
    if (e.target.name=== "username"){
      setLogin({...login, username: e.target.value})
    } else {
      setLogin({...login, password: e.target.value})
    }
  }

  function onLoginSubmit(e){
    e.preventDefault()
    e.stopPropagation()
    fetch("http://localhost:9292/login", {
      method : "POST",
      headers:{ 'Content-Type' : 'application/json'},
    body: JSON.stringify(login),
    })
    .then(resp => resp.json())
    .then(data =>data.status == 200 ? (setLoginStat(true), getDayMeal()) : setLoginStat(false)
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
  <NavBar handleLogOut = {handleLogOut} loginStat={loginStat} />
  <Login onLoginSubmit={onLoginSubmit} onChange={onChange} loginStat={loginStat}/>
  <MealPlan loginStat={loginStat} dayMeal={dayMeal}/>
    </div>
  );
}

export default App;
