import React, { Component } from 'react';
import axios from 'axios';
import List from './List.jsx';
import Details from './Details.jsx';
import Search from './Search.jsx';
import dummy from '../../../public/data/dummy.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      currentDrink: {
        drink: {},
        ingredients: [],
        measurements: []
      },
      view : 'list'
    };
    this.handleClick = this.handleClick.bind(this);
    this.setView = this.setView.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleClick(e) {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${e.currentTarget.id}`)
      .then((res) => {
        let ingredients = [];
        let measurements = [];
        for (var i = 1; i <= 15; i++) {
          if (res.data.drinks[0][`strIngredient${String(i)}`] !== null) {
            ingredients.push(res.data.drinks[0][`strIngredient${String(i)}`])
          }
          if (res.data.drinks[0][`strMeasure${String(i)}`] !== null) {
            measurements.push(res.data.drinks[0][`strMeasure${String(i)}`])
          }
        }
        this.setState({
          currentDrink: {
            drink: res.data.drinks[0],
            ingredients: ingredients,
            measurements: measurements
          }
        })
      })
      .then(() => {
        this.setView('drink');
      })
  }
  handleSearch(params) {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${params}`)
      .then((res) => {
        if (res.data.drinks) {
          this.setState({
            drinks: res.data.drinks,
            view: 'list'
          })
        } else {
          this.setState({
            drinks: [],
            view: 'error'
          })
        }
      })
  }
  setView(view) {
    this.setState({
      view: view
    })
  }
  componentDidMount() {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
      .then((res) => {
        this.setState({
          drinks: res.data.drinks
        })
      })
  }
  render() {
    switch(this.state.view) {
      case 'list':
        return (
          <div>
            <h2 className = 'header'>
              Cocktails
            </h2>
            <Search handleSearch = {this.handleSearch}/>
            <List handleClick = {this.handleClick} drinks = {this.state.drinks}/>
          </div>
        )
      case 'drink':
        return (
          <div>
            <h2 className = 'header'>
              Cocktails
            </h2>
            <Search handleSearch = {this.handleSearch}/>
            <Details currentDrink = {this.state.currentDrink} setView = {this.setView}/>
          </div>
        )
      case 'error':
        return (
          <div>
            <h2 className = 'header'>
              Cocktails
            </h2>
            <Search handleSearch = {this.handleSearch}/>
            <div>
              Error, no drinks found with containing that ingredient. Please search again.
            </div>
          </div>
        )
    }
  }
}