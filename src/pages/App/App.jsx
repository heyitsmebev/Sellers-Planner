import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import {getUser} from '../../utilities/users-service';
import * as estimatesAPI from "../../utilities/estimates-api";
// Import following pages
import AuthPage from '../AuthPage/AuthPage';
import NewEstimateFormPage from '../NewEstimateFormPage/NewEstimateFormPage';
import ShowOneEstimatePage from '../ShowOneEstimatePage/ShowOneEstimatePage';
import ShowAllEstimatePage from '../ShowAllEstimatePage/ShowAllEstimatePage';
import DashboardPage from '../DashboardPage/DashboardPage';
// Import following components
import NavBar from '../../components/NavBar/NavBar';

function App() {
  // set the user by calling getUser function
  const [user, setUser] = useState(getUser()); //we store all the data //we should see this state change when user data is signed up. in app state
  const [oneEstimate, setOneEstimate] =  useState({})
  const [estimateData, setEstimateData] = useState([]);
  const navigate = useNavigate();

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
    setOneEstimate(oneEstimate) 
  } 
  console.log('estimate', oneEstimate)

  return (
    < main className="App" >
      {user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <DashboardPage />
          <Routes>
            <Route path="/" element={<ShowAllEstimatePage user={user} estimateData={estimateData} setEstimateData={setEstimateData} getOneEstimate={getOneEstimate}/>} />
            <Route path="/estimates" element={<ShowAllEstimatePage user={user} estimateData={estimateData} setEstimateData={setEstimateData} getOneEstimate={getOneEstimate}/>} />
            <Route path="/estimates/:id" element={<ShowOneEstimatePage estimateData={estimateData} setEstimateData={setEstimateData} oneEstimate={oneEstimate} setOneEstimate={setOneEstimate} getOneEstimate={getOneEstimate}  />} />
            <Route path="/estimates/new" element={<NewEstimateFormPage navigate={navigate}  />} />
            {/* redirect to /estiamtes/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>}
    </main >
  );
}

export default App;
