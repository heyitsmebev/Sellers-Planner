import React, {useState} from 'react';
import {useParams, useNavigate } from 'react-router-dom';

import * as estimateAPI from '../../utilities/estimates-api';

const initialFormData = {
    shippingcost: '',
    packagingcost: '',
    category: 'books'
  };

export default function AddEditForm({estimateData, setEstimateData}) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormData);
    
    async function handleChange(evt) {
        setFormData({...formData, [evt.target.name] : evt.target.value})
    }

        // 👇️ get ID from url
    const params = useParams();
    console.log('id',params.id); // 👉️ {userId: '4200'}
  
    const estimatesOne = estimateData.filter(p => p._id === params.id)
    console.log('estimatesOne',estimatesOne);

    // 👇️ update function

    async function updateChange(evt) {
        evt.preventDefault();
        const updatedEstimate = await estimateAPI.updateEstimates(formData, params.id);
        // console.log(updatedEstimate);
        const newEstimates = estimateData.map((l) => {
          return l._id === params.id ? updatedEstimate : l
        })
        setEstimateData(newEstimates);
        // // Clear the description and file inputs
        setFormData(initialFormData);
      }
    // 👇️ delete function
    async function handleDeleteEstimates(id) {
        await estimateAPI.deleteEstimates(id);
        navigate('/estimates');
    }

    return (
        <>
        <form >
            <div>
                <label >AddEdit</label>
                      <div className="mb-3">
        <input className="form-control" id="" name="shippingcost" value={formData.shippingcost} onChange= {handleChange} type="text" placeholder='shippingcost' required/>
      </div>
      <div className="mb-3">
        <input className="form-control" id="" name="packagingcost" value={formData.packagingcost} onChange= {handleChange} type="text" placeholder='packagingcost' required/>
      </div>
      <div>
        <label for="category">Choose a category:</label>
          <select id="category" name="category" value={formData.category} onChange= {handleChange}>
            <option value="kitchen">kitchen</option>
            <option value="books">books</option>
            <option value="home and garden">home & garden</option>
            <option value="collectibles">collectibles</option>
            <option value="office products">office products</option>
          </select>
      </div>
            </div>
        <button onClick={updateChange}>update</button>
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
        </>
    );

}

