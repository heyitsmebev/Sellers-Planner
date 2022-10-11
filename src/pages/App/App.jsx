import './App.css';
import { useState } from 'react';
// Import the following components
import AuthPage from '../AuthPage/AuthPage';
import NewEstimatePage from '../NewEstimatePage/NewEstimatePage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
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
          <Routes>
            <Route path="/estimates/new" element={<NewEstimatePage user={user} setUser={setUser} />} />
            <Route path="/estimates" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>}

    </main >
  );
}

export default App;
