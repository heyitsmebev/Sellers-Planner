import { useState, useEffect } from 'react';
import * as estimatesAPI from "../../utilities/estimates-api";
import { Link } from 'react-router-dom';
export default function ShowAllEstimates({ user, estimateData, setEstimateData, getOneEstimate }) {
  

  async function handleDeleteEstimates(id) {
    await estimatesAPI.deleteEstimates(id);
    const updatedEstimates = estimateData.filter(est => est._id !== id);
    setEstimateData(updatedEstimates);
  }
  
  return (
    <main>
      <h1 className=''>This is the Show All Estimates Page</h1>
      {estimateData.map(function(estimate, index) {
        return (
          <div>
            <Link to={`/estimates/${estimate._id}`}><button onClick={() => getOneEstimate(estimate._id)}>{estimate._id}
            </button><br></br></Link>
            <button onClick={() => handleDeleteEstimates(estimate._id)}>Delete</button>
          </div>
        )
      })}

    </main>
  );
}