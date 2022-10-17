import React, {useState} from 'react';
import {useParams, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

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
        {estimatesOne.map(function(estimate, index) {
          return (
            <>
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
            <div className="form-container">
            <form autoComplete="off" class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
              <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Name</label>
              <input type="text" name="name" placeholder={estimate.name} value={formData.name} onChange={handleChange} required  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"/>
              <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Product Cost</label>
              <input type="text" name="productcost" placeholder={estimate.productcost} value={formData.productcost} onChange={handleChange} required  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"/>
              <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Shipping Cost</label>
              <input type="text" name="shippingcost" placeholder={estimate.shippingcost} value={formData.shippingcost} onChange={handleChange} required  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"/>
              <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Packaging Cost</label>
              <input type="text" name="packagingcost" placeholder={estimate.packagingcost} value={formData.packagingcost} onChange={handleChange} required  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"/>
              <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Sales Price</label>
              <input type="text" name="salesprice" placeholder={estimate.salesprice} value={formData.salesprice} onChange={handleChange} required  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"/>
              <label for="category" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Choose a category:</label>
                <select id="category" name="category" placeholder={estimate.category} value={formData.category} onChange={handleChange} required class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" >
                  <option value="kitchen">kitchen</option>
                  <option value="books">books</option>
                  <option value="home and garden">home & garden</option>
                  <option value="collectibles">collectibles</option>
                  <option value="office products">office products</option>
                </select>
              <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Net Profit</label>
              <input type="text" name="netprofit" placeholder={estimate.netprofit} value={formData.netprofit} onChange={handleChange} required class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2 " />
              <label class="inline-block text-gray-800 text-sm sm:text-base mb-2"></label>
              <button onClick={updateChange} class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3" >Update</button>

              </form>
              <button onClick={() => handleDeleteEstimates(estimate._id)} class="inline-block bg-red-500 hover:bg-red-600 active:bg-red-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 mt-10 mb-10 " >Delete</button>
            </div>
            

            </>
          )
        })}

        <Footer />



        </>
    );

}

