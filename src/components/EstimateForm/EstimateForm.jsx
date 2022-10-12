// import { useState } from 'react';
// import * as estimatesAPI from '../../utilities/estimates-api'
// import { useNavigate } from "react-router-dom";
import { createEstimates } from '../../utilities/estimates-api';

import { Component } from "react";

export default class EstimateForm extends Component {
  state = {
    shippingcost: '',
    packagingcost: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state }; //grabbing all data from state
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the 
      // payload of the JSON Web Token (JWT)
      const estimate = await createEstimates(formData); //await is waiting for a task to take place in the background
      // grab the user and assign the prop setUser
      console.log(estimate)
      this.props.setEstimateData(estimate);
      // if we pass a prop to a class, we could just use it without importing it. 
      //we would need to call it though by using ths.prop.setEstimateData
      // you grab all the data (formdata) and send to the createEstimates within estimates-api.js
      // this.props.setUser(user);
    } catch {
      // An error happened on the server
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  // We must override the render method
  // The render method is the equivalent to a function-based component
  // (its job is to return the UI)
  render() {
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>shippingcost</label>
            <input type="text" name="shippingcost" value={this.state.shippingcost} onChange={this.handleChange} required />
            <label>packagingcost</label>
            <input type="text" name="packagingcost" value={this.state.packagingcost} onChange={this.handleChange} required />
            <button type="submit">Save</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}