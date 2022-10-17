import "./DashboardPage.css"

import { useState } from 'react';

// Import following pages
import AuthPage from '../App/AuthPage';

export default function DashboardPage({user, estimateData, setUser}) {

    return (
        <div>
        
        {user ?
            <>
            <h1 >Dashboard</h1>
            <h1 className="text-3xl font-bold underline">hi {user.name}</h1>
            </>
            :
            <AuthPage setUser={setUser}/>}
        </div>
    );
}

// {estimateData.map(estimate => {
//     if (user && (user._id === estimate.user)) {
//         return (
//             <div>
//               <h1>{estimate._id}</h1>
//               <h1>{estimate.shippingcost}</h1>
//               <h1>{estimate.category}</h1>
//             </div>
//           )
//     }
//   })}