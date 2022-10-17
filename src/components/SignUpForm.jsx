import { Component } from "react";
import { signUp } from '../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state }; //grabbing all data from state
      delete formData.error;
      delete formData.confirm; //this removes the data from the state on line 9
      // The promise returned by the signUp service method
      // will resolve to the user object included in the 
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData); //await is waiting for a task to take place in the background
      // grab the user and assign the prop setUser
      console.log(formData)
      this.props.setUser(user);
      console.log(user)
      // if we pass a prop to a class, we could just use it without importing it. we would need to call it though by using ths.prop.setUser
      // you grab all the data (formdata) and send to the signUp form (aka users-service.js)
      // this.props.setUser(user);
    } catch {
      // An error happened on the server
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  // We must override the render method
  // The render method is the equivalent to a function-based component
  // (its job is to return the UI)
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
          <form autoComplete="off" class="max-w-lg border rounded-lg mx-auto" onSubmit={this.handleSubmit}>
          <div class="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label for="name" class="inline-block text-gray-800 text-sm sm:text-base mb-2" >Name</label>
              <input name="name" value={this.state.name} onChange={this.handleChange} required class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>
            <div>
              <label for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2" >Email</label>
              <input name="email" value={this.state.email} onChange={this.handleChange} required class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>
            <div>
              <label for="password" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Password</label>
              <input name="password" value={this.state.password} onChange={this.handleChange} required class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>
            <div>
            <label for="password" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Confirm</label>
            <input name="confirm" value={this.state.confirm} onChange={this.handleChange} required class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>
            <button class="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Log in</button>
          </div>
        </form>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </>
    );
  }
}