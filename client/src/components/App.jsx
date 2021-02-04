import React, { Component } from 'react';
import axios from 'axios';
import List from './List.jsx';
import Favorites from './Favorites.jsx';
import dummy from '../../../public/data/dummy.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      favorites: []
    };
    this.handleClick = this.handleClick.bind(this);
    // this.setView = this.setView.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
  }
  handleClick(e) {
    let favorites = this.state.favorites;
    for (const drink of this.state.drinks) {
      if (e.currentTarget.id === drink.idDrink) {
        favorites.push(drink);
      }
    }
    this.setState({
      favorites: favorites
    });
  }
  componentDidMount() {
    this.setState({
      drinks: dummy.drinks
    })
  }
  render() {
    return (
      <div>
        <h2 className = 'header'>Cocktails</h2>
        <Favorites favorites={this.state.favorites}/>
        <List handleClick = {this.handleClick} drinks = {this.state.drinks}/>
      </div>
    )
    // switch(this.state.view) {
    //   case 'list':
    //     return (
    //       <div>
    //         <h2 className = 'header'>
    //           Cocktails
    //         </h2>
    //         <Search handleSearch = {this.handleSearch}/>
    //         <List handleClick = {this.handleClick} drinks = {this.state.drinks}/>
    //       </div>
    //     )
    //   case 'drink':
    //     return (
    //       <div>
    //         <h2 className = 'header'>
    //           Cocktails
    //         </h2>
    //         <Search handleSearch = {this.handleSearch}/>
    //         <Details currentDrink = {this.state.currentDrink} setView = {this.setView}/>
    //       </div>
    //     )
    //   case 'error':
    //     return (
    //       <div>
    //         <h2 className = 'header'>
    //           Cocktails
    //         </h2>
    //         <Search handleSearch = {this.handleSearch}/>
    //         <div>
    //           Error, no drinks found with containing that ingredient. Please search again.
    //         </div>
    //       </div>
    //     )
    // }
  }
}