// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import * as estimateAPI from "../../utilities/estimates-api";

// export default function AddLogForm() {
//   const [shippingcost, setShippingcost] = useState('');
//   const [packagingcost, setPackagingcost] = useState('');
//   const navigate = useNavigate();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const payload = {shippingcost, packagingcost};
//     await estimateAPI.createEstimates(payload);
//     navigate('/estimates/new');
//   }

//   return (
//     <form className="container" id="" onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <input className="form-control" id="" value={shippingcost} onChange={(e) => setShippingcost(e.target.value)} type="text" placeholder='shippingcost' required/>
//       </div>
//       <div className="mb-3">
//         <input className="form-control" id="" value={packagingcost} onChange={(e) => setPackagingcost(e.target.value)} type="text" placeholder='packagingcost' required/>
//       </div>
//       <div>
//         <label for="category">Choose a category:</label>
//           <select id="category" name="category">
//             <option value="kitchen">kitchen</option>
//             <option value="books">books</option>
//             <option value="home and garden">home & garden</option>
//             <option value="collectibles">collectibles</option>
//             <option value="office products">office products</option>
//           </select>
//       </div>
//       <div className="mb-3">
//         <button className="btn btn-primary" type="submit" id="">
//           ADD LOG
//         </button>
//       </div>
//     </form>
//   );
// }
import { createEstimates } from '../../utilities/estimates-api';
import { Component } from "react";
import Footer from '../../components/Footer';
import Calc from "../../components/Calc";

export default class EstimateForm extends Component {
  state = {
    name: '',
    productcost: '',
    shippingcost: '',
    packagingcost: '',
    salesprice: '',
    netprofit: '',
    category: '',
    error: '',
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

      this.props.setEstimateData(estimate);
      this.props.navigate('/contacts', {replace: true})

      // if we pass a prop to a class, we could just use it without importing it. 
      //we would need to call it though by using ths.prop.setEstimateData
      // you grab all the data (formdata) and send to the createEstimates within estimates-api.js
      // this.props.setUser(user);
    } catch {
      // An error happened on the server

      this.setState({  });
    }
  };

  // We must override the render method
  // The render method is the equivalent to a function-based component
  // (its job is to return the UI)
  render() {
    return (
      <div>
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      {/* text - start */}
        <div class="mb-10 md:mb-16">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block xl:inline">Estimator</span>
          <span class="hidden xl:inline-block">&nbsp;</span>
          <span class="block text-indigo-600 xl:inline">Calculator</span>
          </h1>
          <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Enter the numbers before to calcuate the profitability of a product</p>
        </div>
      {/* text - end */}

      </div>
      {/* */}
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit} class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
            <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"/>
            <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Product Cost</label>
            <input type="text" name="productcost" value={this.state.productcost} onChange={this.handleChange} required  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"/>
            <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Shipping Cost</label>
            <input type="text" name="shippingcost" value={this.state.shippingcost} onChange={this.handleChange} required  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"/>
            <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Packaging Cost</label>
            <input type="text" name="packagingcost" value={this.state.packagingcost} onChange={this.handleChange} required  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"/>
            <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Sales Price</label>
            <input type="text" name="salesprice" value={this.state.salesprice} onChange={this.handleChange} required  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"/>
             <label for="category" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Choose a category:</label>
              <select id="category" name="category" value={this.state.category} onChange={this.handleChange} required class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" >
                <option value="kitchen">kitchen</option>
                <option value="books">books</option>
                <option value="homeandgarden">home & garden</option>
                <option value="collectibles">collectibles</option>
                <option value="office products">office products</option>
              </select>
            <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Net Profit</label>
            <input type="text" name="netprofit" value={this.state.netprofit} onChange={this.handleChange} required class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
            <label class="inline-block text-gray-800 text-sm sm:text-base mb-2"></label>
            <button class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Save</button>
   
            </form>
            <Calc packagingcost={this.state.packagingcost} productcost={this.state.productcost} shippingcost={this.state.shippingcost} salesprice={this.state.salesprice} value1={this.state.netprofit} onChange1={this.handleChange}  />

        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>  
        <Footer />
    </div>
    );
  }
}


