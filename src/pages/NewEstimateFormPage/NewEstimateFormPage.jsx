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

export default class EstimateForm extends Component {
  state = {
    shippingcost: '',
    packagingcost: '',
    category: '',
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

      this.props.setEstimateData(estimate);
      this.props.navigate('/contacts', {replace: true})

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
      <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    {/* text - start */}
    <div class="mb-10 md:mb-16">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Get in touch</h2>

      <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
    {/* text - end */}

    {/* form - start */}
    <form class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
      <div>
        <label for="first-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">First name*</label>
        <input name="first-name" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div>
        <label for="last-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Last name*</label>
        <input name="last-name" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div class="sm:col-span-2">
        <label for="company" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Company</label>
        <input name="company" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div class="sm:col-span-2">
        <label for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Email*</label>
        <input name="email" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div class="sm:col-span-2">
        <label for="subject" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Subject*</label>
        <input name="subject" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div class="sm:col-span-2">
        <label for="message" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Message*</label>
        <textarea name="message" class="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"></textarea>
      </div>

      <div class="sm:col-span-2 flex justify-between items-center">
        <button class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Send</button>

        <span class="text-gray-500 text-sm">*Required</span>
      </div>

      <p class="text-gray-400 text-xs">By signing up to our newsletter you agree to our <a href="#" class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</a>.</p>
    </form>
    {/* form - end */}
  </div>
</div>
      {/* */}
        <h1>this is the new page</h1>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>shippingcost</label>
            <input type="text" name="shippingcost" value={this.state.shippingcost} onChange={this.handleChange} required />
            <label>packagingcost</label>
            <input type="text" name="packagingcost" value={this.state.packagingcost} onChange={this.handleChange} required />
            <label for="category">Choose a category:</label>
              <select id="category" name="category" value={this.state.category} onChange={this.handleChange} required >
                <option value="kitchen">kitchen</option>
                <option value="books">books</option>
                <option value="home and garden">home & garden</option>
                <option value="collectibles">collectibles</option>
                <option value="office products">office products</option>
                </select>
            <button type="submit">Save</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}