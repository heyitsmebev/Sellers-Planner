import { useState, useEffect } from 'react';
import * as estimatesAPI from "../../utilities/estimates-api";
// import LogCard from "../../components/LogCard/LogCard";

export default function AllLogsPage({ user }) {
  const [estimates, setEstimates] = useState([]);

  useEffect(function() {
    async function getEstimates() {
      const estimates = await estimatesAPI.getAll();
      setEstimates(estimates);
    }
    getEstimates();
  }, [])

//   async function handleDeleteLog(id) {
//     await estimatesAPI.deleteLog(id);
//     const updatedLogs = logs.filter((l) => l._id !== id);
//     setLogs(updatedLogs);
//   }

  return (
    <main>
      <h1 className=''>All Estimates</h1>

    </main>
  );
}