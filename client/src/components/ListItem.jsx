import React from 'react';

const ListItem = (props) => (
  <div onClick = {props.handleClick} className = 'listItem' id = {props.drink.idDrink}>
    <h4>{props.drink.strDrink}</h4>
    <div className = 'imgDiv'>
      <img src = {props.drink.strDrinkThumb}/>
    </div>
  </div>
);

export default ListItem;