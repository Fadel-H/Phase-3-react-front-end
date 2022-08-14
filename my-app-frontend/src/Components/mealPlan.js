import React, {useState} from 'react'

function mealPlan({loginStat, dayMeal}) {
    return (
    <>
    {dayMeal.map( (meal, index)=> {
    return <div key={index} >
            <div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src={meal[0]} alt="Card image cap"/>
    <div className="card-body">
    <h5 className="card-title" style = {{textAlign: "center"}}>{meal[1]}	</h5>
    <p className="card-text" style = {{textAlign: "center"}}>breakfast</p>
    </div>
    
    </div>

    <div className="card"  style={{width: "18rem"}}>
    <img className="card-img-top" src={meal[2]} alt="Card image cap"/>
    <div className="card-body">
    <h5 className="card-title" style = {{textAlign: "center"}}>{meal[3]}	</h5>
    <p className="card-text" style = {{textAlign: "center"}}>snack</p>
    </div>
    
    </div>

    <div className="card"  style={{width: "18rem"}}>
    <img className="card-img-top" src={meal[4]} alt="Card image cap"/>
    <div className="card-body">
    <h5 className="card-title" style = {{textAlign: "center"}}>{meal[5]}	</h5>
    <p className="card-text" style = {{textAlign: "center"}}>lunch</p>
    </div>
    
    </div>

    <div className="card"  style={{width: "18rem"}}>
    <img className="card-img-top" src={meal[6]} alt="Card image cap"/>
    <div className="card-body">
    <h5 className="card-title" style = {{textAlign: "center"}}>{meal[7]}	</h5>
    <p className="card-text" style = {{textAlign: "center"}}>dinner</p>
    </div>
    
    </div>
           </div>
})}

</>
  )
}

export default mealPlan