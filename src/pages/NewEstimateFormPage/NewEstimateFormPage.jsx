import AddEstimateForm from '../../components/AddEstimateForm/AddEstimateForm';

export default function NewEstimatePage(estimateData, navigate) {

  return (
    <div>
      <h1>New Estimate FORM Pageeeee</h1>
      <AddEstimateForm estimateData={estimateData} navigate={navigate}/>
    </div>
  );
}



