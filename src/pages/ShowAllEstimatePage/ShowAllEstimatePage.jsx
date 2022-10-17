import * as estimatesAPI from "../../utilities/estimates-api";
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer";
import New from "../../components/New";
export default function ShowAllEstimates({ user, estimateData }) {

  //function to get one estimate by id and pass to pages/components
  async function getOneEstimate(id) {
    await estimatesAPI.getEstimatesById(id) 
  } 
  
  return (
    <main>
    <New />

      <h1 className=''>This is the Show All Estimates Page</h1>
      {estimateData.map(function(estimate, index) {
        return (
          <div>
            <Link to={`/estimates/${estimate._id}`}><button onClick={() => getOneEstimate(estimate._id)}>{estimate._id}
            </button><br></br></Link>
          </div>
        )
      })}
      <Footer/>
    </main>
  );
}