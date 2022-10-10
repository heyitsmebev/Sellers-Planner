import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

function App() {
  const [user, setUser] = useState({})

  return (
    <main className="App">
        beverly's app
        <div>
        <Routes>
          <Route path="/" element={<SignUpForm />} />
        </Routes>
        </div>
    </main>
  );
}

export default App;
