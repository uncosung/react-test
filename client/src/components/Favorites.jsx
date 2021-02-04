import React from 'react';

const Favorites = (props) => {
  if (props.favorites.length > 0) {
    return (
      <div>
        <h3>Favorites</h3>
        <div className = 'favoritesList'>
        {props.favorites.map((drink, index) => {
          return (
            <div className = 'favorite' key={index}>
              <h4>{drink.strDrink}</h4>
              <div className = 'imgDiv'>
                <img src = {drink.strDrinkThumb}/>
              </div>
            </div>
          )
        })}
        </div>
      </div>

    )
  } else {
    return ''
  }
}

export default Favorites;