import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {getUser} from '../../utilities/users-service';
import * as estimatesAPI from "../../utilities/estimates-api";
// Import following pages
import AuthPage from '../AuthPage/AuthPage';
import NewEstimateFormPage from '../NewEstimateFormPage/NewEstimateFormPage';
import ShowOneEstimatePage from '../ShowOneEstimatePage/ShowOneEstimatePage';
import ShowAllEstimatePage from '../ShowAllEstimatePage/ShowAllEstimatePage';
// Import following components
import NavBar from '../../components/NavBar/NavBar';

function App() {
  // set the user by calling getUser function
  const [user, setUser] = useState(getUser()); //we store all the data //we should see this state change when user data is signed up. in app state
  const [oneEstimate, setEstimateOne] =  useState({})
  const [estimateData, setEstimateData] = useState([]);

  //gets all the estimates data and pushes it to other pages/components 
  useEffect(function() {
    async function getEstimatesData() {
      const estimateData = await estimatesAPI.getAllEstimates();
      setEstimateData(estimateData);
    }
    getEstimatesData();
  }, [])

  //function to get one estimate by id and pass to pages/components
  async function getOneEstimate(id) {
    const oneEstimate = await estimatesAPI.getEstimatesById(id) 
    setEstimateOne(oneEstimate) 
  } 
  console.log('estimate', oneEstimate)

  return (
    < main className="App" >
      {user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/estimates" element={<ShowAllEstimatePage user={user} estimateData={estimateData} setEstimateData={setEstimateData} getOneEstimate={getOneEstimate}/>} />
            <Route path="/estimates/:id" element={<ShowOneEstimatePage estimateData={estimateData} oneEstimate={oneEstimate} setEstimateOne={setEstimateOne} getOneEstimate={getOneEstimate} />} />
            <Route path="/estimates/new" element={<NewEstimateFormPage   />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/estimates" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>}

    </main >
  );
}

export default App;
