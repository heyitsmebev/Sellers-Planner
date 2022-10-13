import { useState, useEffect } from 'react';
import * as estimatesAPI from "../../utilities/estimates-api";
import { Link, useParams } from 'react-router-dom';

export default function ShowOneEstimate({ user, estimateData, handleDeleteEstimates, getOneEstimate, oneEstimate }) {
  // 👇️ get ID from url
  const params = useParams();
  console.log('id',params.id); // 👉️ {userId: '4200'}

  const estimatesOne = estimateData.filter(p => p._id === params.id)
  console.log(estimatesOne)

  return (
    <main>
      <h1 className=''>This one item</h1>
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