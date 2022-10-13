import AddEstimateForm from '../../components/AddEstimateForm/AddEstimateForm';

export default function NewEstimatePage(estimateData) {

  return (
    <div>
      <h1>New Estimate FORM Page</h1>
      <AddEstimateForm estimateData={estimateData}/>
    </div>
  );
}



