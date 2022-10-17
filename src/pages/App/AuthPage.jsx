import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm';
import LoginForm from '../../components/LoginForm';

export default function AuthPage({setUser}) {
    const [showSignUp, setShowSignUp] = useState(false);
    return (
        <>

        {showSignUp ?
            <SignUpForm setUser={setUser}/>
            :
            <LoginForm setUser={setUser}/>
        }
        <div class="flex justify-center items-center bg-gray-100 p-4">
        <p class="text-gray-500 text-sm text-center">Don't have an account? <a href="#" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100"  onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</a></p>
        </div>
        </>
    );
}


