// import "./DashboardPage.css"

// import { useState } from 'react';

// // Import following pages
// import AuthPage from '../App/AuthPage';

// export default function DashboardPage({user, estimateData, setUser}) {

//     return (
//         <div>
        
//         {user ?
//             <>
            
//             <h1 >Dashboard</h1>
//             <h1 className="text-3xl font-bold underline">hi {user.name}</h1>
//             </>
//             :
//             <AuthPage setUser={setUser}/>}
//         </div>
//     );
// }

// // {estimateData.map(estimate => {
// //     if (user && (user._id === estimate.user)) {
// //         return (
// //             <div>
// //               <h1>{estimate._id}</h1>
// //               <h1>{estimate.shippingcost}</h1>
// //               <h1>{estimate.category}</h1>
// //             </div>
// //           )
// //     }
// //   })}

import React, { useState } from 'react';
import WelcomeBanner from '../../partials/dashboard/WelcomeBanner';
import DashboardCard01 from '../../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../../partials/dashboard/DashboardCard03';
import DashboardCard06 from '../../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../../partials/dashboard/DashboardCard09';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Dashboard({user, estimateData, setUser}) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex overflow-hidden">


      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner user={user}/>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Line chart (Acme Plus) */}
              <DashboardCard01 />
              {/* Line chart (Acme Advanced) */}
              <DashboardCard02 />
              {/* Line chart (Acme Professional) */}
              <DashboardCard03 />
              {/* Doughnut chart (Top Countries) */}
              <DashboardCard06 />
              {/* Table (Top Channels) */}
              <DashboardCard07 user={user}  estimateData={estimateData} setUser={setUser}/>

            </div>

          </div>
        </main>

        <Footer />

      </div>

    </div>
  );
}

export default Dashboard;