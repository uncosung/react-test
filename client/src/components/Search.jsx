import React, { Component } from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      params: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.params);
  }
  render() {
    return (
      <form>
        <label>
          <input type = 'text' name = 'search' placeholder='Search by ingredient' value = {this.state.params} onChange = {this.handleChange}/>
        </label>
          <button onClick = {this.handleSubmit}>Submit</button>
      </form>
    )
  }
}