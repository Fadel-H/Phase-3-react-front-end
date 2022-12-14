import React from 'react'

function mealPlan({ dayMeal}) {
    return (
    <>
    <div className="container-fluid">
    <div className="row ">

      <div className= "col-sm-2">
    {dayMeal.map( (meal, index)=> {
    return <div className='col'>
    <div className="card col" style={{width: "18rem"} } key={index}>
    <img className="card-img-top" src={meal.image} alt={meal.name}/>
    <div className="card-body">
    <h5 className="card-title" style = {{textAlign: "center"}}>{meal.name}	</h5>
    <p className="card-text" style = {{textAlign: "center"}}>{meal.meal_type}</p>
    </div>
    </div>
    </div>

})}
</div>

</div>
</div>

</>
  )
}

export default mealPlan