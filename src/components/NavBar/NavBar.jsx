import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

export default function NavBar({user, setUser}) {

  function handleLogOut() {
    userService.logOut(); //we will create logout function
    setUser(null);
  }

  return (
    <nav>
    helllooo
      <Link to="/estimates">Show All Estimate</Link>
      &nbsp; | &nbsp;
      <Link to="/estimates/new">New Estimate</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to={""} onClick={handleLogOut}>Logout</Link>
    </nav>
  )
}
