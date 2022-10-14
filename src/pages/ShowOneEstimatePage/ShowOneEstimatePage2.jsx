import { useState, useEffect } from 'react';
import * as estimateAPI from "../../utilities/estimates-api";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";


export default function ShowOneEstimate({ user, estimateData, handleDeleteEstimates, getOneEstimate, oneEstimate, setEstimateData }) {
  const navigate = useNavigate();
  const [estimateDataa, setEstimateDataa] = useState([]);

  //gets all the estimates data and pushes it to other pages/components 
 useEffect(function() {
  async function getEstimatesData() {
    const estimateDataa = await estimateAPI.updateEstimates();
    setEstimateDataa(estimateDataa);
  }
  getEstimatesData();
}, [])
  // const { register, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);

  const [shippingcost, setShippingcost] = useState('');
  const [packagingcost, setPackagingcost] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = {shippingcost, packagingcost};
    await estimateAPI.updateEstimates(payload);
  }
  // 👇️ get ID from url
  const params = useParams();
  console.log('id',params.id); // 👉️ {userId: '4200'}

  const estimatesOne = estimateData.filter(p => p._id === params.id)

  // 👇️ delete function
  async function handleDeleteEstimates(id) {
    await estimateAPI.deleteEstimates(id);
    navigate('/estimates');
  }

  // const updatedEstimates = estimateData.filter(est => est._id !== id);
  // setEstimateData(updatedEstimates);
  return (
    <main>


      <h1 className=''>This one item</h1>
      <form className="container" id="" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input className="form-control" id="" name="shippingcost" value={shippingcost} onChange={(e) => setShippingcost(e.target.value)} type="text" placeholder='shippingcost' required/>
      </div>
      <div className="mb-3">
        <input className="form-control" id="" name="packagingcost" value={packagingcost} onChange={(e) => setPackagingcost(e.target.value)} type="text" placeholder='packagingcost' required/>
      </div>
      <div>
        <label for="category">Choose a category:</label>
          <select id="category" name="category" >
            <option value="kitchen">kitchen</option>
            <option value="books">books</option>
            <option value="home and garden">home & garden</option>
            <option value="collectibles">collectibles</option>
            <option value="office products">office products</option>
          </select>
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" type="submit" id="">
          ADD LOG
        </button>
      </div>
    </form>
    {estimatesOne.map(function(estimate, index) {
        return (
          <div>
      
            <h1>{estimate._id}</h1>
            <h1>{estimate.shippingcost}</h1>
            <h1>{estimate.category}</h1>
      
            <button onClick={() => handleDeleteEstimates(estimate._id)}>Delete</button>
          </div>
        )
      })}
    </main>
  );
}

// import { useState } from 'react';
// import * as estimateAPI from '../../utilities/estimates-api'
// import { useNavigate, useParams } from "react-router-dom";
// import { updateEstimates } from '../../utilities/estimates-api';
// import { Component } from "react";

// export default class EstimateForm extends Component {
//   state = {
//     shippingcost: '',
//     packagingcost: '',
//     category: '',
//     error: ''
//   };


//   handleChange = (evt) => {
//     this.setState({
//       [evt.target.name]: evt.target.value,
//       error: ''
//     });
//   };

//   handleSubmit = async (evt) => {
//     evt.preventDefault();
//     try {
//       const formData = { ...this.state }; //grabbing all data from state
//       delete formData.error;
//       // The promise returned by the signUp service method
//       // will resolve to the user object included in the 
//       // payload of the JSON Web Token (JWT)
//       const estimate = await updateEstimates(formData); //await is waiting for a task to take place in the background
//       // grab the user and assign the prop setUser
//       console.log(estimate)
//       this.props.setEstimateData(estimate);
//       // if we pass a prop to a class, we could just use it without importing it. 
//       //we would need to call it though by using ths.prop.setEstimateData
//       // you grab all the data (formdata) and send to the createEstimates within estimates-api.js
//       // this.props.setUser(user);
//     } catch {
//       // An error happened on the server
//       this.setState({ error: 'Sign Up Failed - Try Again' });
//     }
//   };

//   // We must override the render method
//   // The render method is the equivalent to a function-based component
//   // (its job is to return the UI)
//   render() {
//     return (
//       <div>
//         <h1>this component can be the form page</h1>
//         <div className="form-container">
//           <form autoComplete="off" onSubmit={this.handleSubmit}>
//             <label>shippingcost</label>
//             <input type="text" name="shippingcost" value={this.state.shippingcost} onChange={this.handleChange} required />
//             <label>packagingcost</label>
//             <input type="text" name="packagingcost" value={this.state.packagingcost} onChange={this.handleChange} required />
//             <label for="category">Choose a category:</label>
//               <select id="category" name="category" value={this.state.category} onChange={this.handleChange}>
//                 <option value="kitchen">kitchen</option>
//                 <option value="books">books</option>
//                 <option value="home and garden">home & garden</option>
//                 <option value="collectibles">collectibles</option>
//                 <option value="office products">office products</option>
//                 </select>
//             <button type="submit">Save</button>
//           </form>
//         </div>
//         <p className="error-message">&nbsp;{this.state.error}</p>
//       </div>
//     );
//   }
// }

