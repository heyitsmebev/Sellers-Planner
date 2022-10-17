import React from 'react';
import { Link } from 'react-router-dom';
import * as estimatesAPI from "../../utilities/estimates-api";

function DashboardCard07({user, estimateData, setUser}) {

  //function to get one estimate by id and pass to pages/components
  async function getOneEstimate(id) {
    await estimatesAPI.getEstimatesById(id) 
  } 
  
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Product Idea</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
            <tr>
              <th className="p-2">
                <div className="font-semibold text-left">Name</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Shipping Cost</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Packaging Cost</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Sales Price</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Net Profit</div>
              </th>
            </tr>
          </thead>
              {estimateData.map(estimate => {
              if (user && (user._id === estimate.user)) {
                  return (
          <>
          {/* Table body */}
          <tbody className="text-sm font-medium divide-y divide-slate-100">
            {/* Row */}
            <tr>
              <td className="p-2">
                <div className="flex items-center">
                  <div className="text-slate-800">
                    <Link to={`/estimates/${estimate._id}`} onClick={() => getOneEstimate(estimate._id)}>{estimate.name} </Link></div>
                </div>
              </td>
              <td className="p-2">
                <div className="text-center">${estimate.shippingcost}</div>
              </td>
              <td className="p-2">
                <div className="text-center text-green-500">${estimate.packagingcost}</div>
              </td>
              <td className="p-2">
                <div className="text-center">${estimate.salesprice}</div>
              </td>
              <td className="p-2">
                <div className="text-center text-sky-500">${estimate.netprofit}</div>
              </td>
            </tr>
          </tbody>
          </>
              )
            }
          })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
