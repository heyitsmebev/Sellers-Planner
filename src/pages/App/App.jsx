import './App.css';
import { useState } from 'react';
// Import the following components
import AuthPage from '../AuthPage/AuthPage';
import NewEstimateFormPage from '../NewEstimateFormPage/NewEstimateFormPage';
import AllEstimatesPage from '../AllEstimatesPage/AllEstimatesPage';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import {getUser} from '../../utilities/users-service';

function App() {
  // set the user by calling getUser function
  const [user, setUser] = useState(getUser()); //we store all the data //we should see this state change when user data is signed up. in app state
  //we need to pass the setUser down the app to signupform   
  console.log(getUser())
  return (
    < main className="App" >
      {user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <h1>This can be the dashboard</h1>
          <Routes>
            <Route path="/estimates/new" element={<NewEstimateFormPage  />} />
            <Route path="/estimates" element={<AllEstimatesPage user={user} setUser={setUser}/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>}

    </main >
  );
}

export default App;
