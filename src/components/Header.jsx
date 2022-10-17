  import { Link } from 'react-router-dom';
  import * as userService from '../utilities/users-service'
  
export default function Header({user, setUser}) {
  function handleLogOut() {
    userService.logOut(); //we will create logout function
    setUser(null);
  }

    return (
      <>
      <div class="bg-white">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <header class="flex justify-between items-center py-4 md:py-8">
          {/* logo - start */}
          <a href="/" class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
            <svg width="95" height="94" viewBox="0 0 95 94" class="w-6 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
    
            Estimator
          </a>
          {/* logo - end */}
    
          {/* nav - start */}
          <nav class="hidden lg:flex gap-12">
            <a href="/" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Dashboard</a>
            <a href="/estimates/new" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">New Estimate</a>
            <Link to={""} onClick={handleLogOut} class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Logout</Link>

          </nav>
          {/* nav - end */}
    
          {/* buttons - start */}
          <a href="/estimates/new" class="hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">New Estimate</a>
    
          <button type="button" class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
    
            Menu
          </button>
          {/* buttons - end */}
        </header>

      </div>
    </div>

      </>
    )
  }
  
  
  


