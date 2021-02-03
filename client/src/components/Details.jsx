import React from 'react';

const Details = (props) => (
  <div className = 'details' id = {props.currentDrink.drink.idDrink}>
    <button onClick = {() => {props.setView('list')}}>Back</button>
    <h4>{props.currentDrink.drink.strDrink}</h4>
      <div className = 'imgDiv'>
        <img src = {props.currentDrink.drink.strDrinkThumb}/>
      </div>
      <div className = 'ingredients'>
        <h4>
          Ingredients:
        </h4>
        {props.currentDrink.ingredients.map((item, index) => {
          return (<div key = {index}>{item}</div>)
        })}
        <h4>
          Measurements:
        </h4>
        {props.currentDrink.measurements.map((item, index) => {
          return (<div key = {index}>{item}</div>)
        })}
      </div>
      <div className = 'instructions'>
        <h4>Instructions</h4>
        {props.currentDrink.drink.strInstructions}
        <div>
          Best served in a {props.currentDrink.drink.strGlass}
        </div>
      </div>
  </div>
);

export default Details;