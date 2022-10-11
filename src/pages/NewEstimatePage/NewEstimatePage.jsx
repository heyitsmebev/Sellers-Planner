import { useState } from 'react';
import NewEstimateForm from '../../components/EstimateForm/EstimateForm';


export default function NewEstimatePage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <h1>New Estimate Page</h1>
      <NewEstimateForm setUser={setUser} />
    </div>
  );
}


