import NewEstimateForm from '../../components/EstimateForm/EstimateForm';

export default function NewEstimatePage(estimatedata, setEstimateData) {

  return (
    <div>
      <h1>New Estimate FORM Page</h1>
      <NewEstimateForm setEstimateData={setEstimateData}/>
    </div>
  );
}



