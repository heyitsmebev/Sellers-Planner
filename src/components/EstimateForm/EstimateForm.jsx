import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function NewEstimateForm({ setUser }) {
  const [estimates, setEstimates] = useState({
    shippingcost: '',
    packagingcost: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setEstimates({ ...estimates, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(estimates);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>shippingcost</label>
          <input type="text" name="shippingcost" value={estimates.shippingcost} onChange={handleChange} required />
          <label>packagingcost</label>
          <input type="text" name="packagingcost" value={estimates.packagingcost} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
