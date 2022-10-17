import "./EstimateForm.css"

export default function EstimateForm({estimateData, handleDeleteEstimates, user}) {
  return (
    <main className="accordion accordion-flush">
      <div className="card">
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button className="accordion-button collapsed" id="accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse" aria-expanded="true" aria-controls="flush-collapseOne">{estimateData.shippingcost}
            </button>
          </h4>
          <div id="flush-collapse" className="accordion-collapse collapse" aria-labelledby="flush-headingOne">
            <div className="accordion-body">
              <h6 className="card-title">{estimateData.destination}</h6>
              <br />
              <textarea className="card-text" value={estimateData.content}></textarea>
            </div>
          </div>
          {estimateData.user === user._id && <button onClick={() => handleDeleteEstimates(estimateData._id)} type="button" className="btn btn-danger btn-sm" id="deleteBtn">DELETE</button>}
        </div>
      </div>
    </main>
  )
}