import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div className = 'list'>
    {props.drinks.map((drink, index) => (
      <ListItem handleClick = {props.handleClick} drink = {drink} key = {index}/>
    ))}
  </div>
)

export default List;