import './App.css';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {getUser} from '../../utilities/users-service';
import * as estimatesAPI from "../../utilities/estimates-api";
// Import following pages
import AuthPage from './AuthPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import NewEstimateFormPage from '../NewEstimateFormPage/NewEstimateFormPage';
import EditEstimatePage from '../EditEstimatePage/EditEstimatePage';
import ShowAllEstimatePage from '../ShowAllEstimatePage/ShowAllEstimatePage';
import HomePage from './HomePage';
// Import following components
import NavBar from '../../components/NavBar';
import LoginForm from '../../components/LoginForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
function App() {
  // set the user by calling getUser function
  const [user, setUser] = useState(getUser()); //we store all the data //we should see this state change when user data is signed up. in app state
  const [estimateData, setEstimateData] = useState([]);
  //gets all the estimates data and pushes it to other pages/components 
  useEffect(function() {
    async function getEstimatesData() {
      const estimateData = await estimatesAPI.getAllEstimates();
      setEstimateData(estimateData);
    }
    getEstimatesData();
  }, [])


  return (
    
    < main className="App" >
      {user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<DashboardPage user={user}  estimateData={estimateData} setUser={setUser}/>} />
            <Route path="/estimates" element={<ShowAllEstimatePage user={user} estimateData={estimateData} />} />
            <Route path="/estimates/:id" element={<EditEstimatePage estimateData={estimateData} setEstimateData={setEstimateData} />} />
            <Route path="/estimates/new" element={<NewEstimateFormPage/>} />
            {/* redirect to /estiamtes/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </>
        :
        <div>
        <Header />
        <Hero setUser={setUser}/>
        <HomePage /> 
        <Footer />
        </div>}
    </main >
  );
}

export default App;
