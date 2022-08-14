import React, {useState} from 'react'

function mealPlan({mealData}) {
  const [morningMeal, setMorningMeal]= useState ([])
 const [snackMeal, setSnackMeal]= useState ([])
  const [lunchMeal, setLunchMeal]= useState ([])
  const [dinnerMeal, setDinnerMeal]= useState ([])

  function mealPlansorter (mealData){
    mealPlan.map(meal=> {
      setMorningMeal( morningMeal.push({name: meal.morning_meal, image: meal.morning_image}))
      setSnackMeal(snackMeal.push({name: meal.after_meal_snack, image: meal.after_meal_image}))
      setLunchMeal(lunchMeal.push({name: meal.noon_meal, image: meal.noon_image}))
      setDinnerMeal(dinnerMeal.push({ name: meal.evening_meal, image: meal.evening_image}))
    }
    )
    console.log(morningMeal)
    console.log(snackMeal)
    console.log(lunchMeal)
    console.log(dinnerMeal)
  }
  return (
    <>
    {morningMeal.map((meal, index)=> {
      return <div className="card" key={index} style={{width: "18rem"}}>
    <img className="card-img-top" src={meal.image} alt="Card image cap"/>
    <div className="card-body">
     <h5 className="card-title">{meal.name}</h5>
    </div>
</div>}
)}
</>
  )
}

export default mealPlan