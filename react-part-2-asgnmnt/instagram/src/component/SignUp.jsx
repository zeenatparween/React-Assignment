import  { useState } from 'react';
import '../component/SignUp.css'


const AuthForm = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleForm = () => {
    setShowSignIn(!showSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your authentication logic here, based on whether it's sign in or sign up
    if (showSignIn) {
      // Handle sign in
    } else {
      // Handle sign up
    }
  };

  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia"></link>
    <div className='main'>
      <h1>Instagram</h1>
      <h2>{ showSignIn ? 'Sign In' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"  placeholder='phone number username or email'/>
        <br />
        <input type="password"  placeholder='password'/>
        <br />
        {!showSignIn && ( // Show additional fields for sign up
          <input type="email" placeholder='Mobile Number or email'/>
          
          
        )}
        <br />
        <button type="submit">
          {showSignIn ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
      <p>
        {showSignIn
          ? <>Do not have account? <span>sign up</span></> 
          : <>have an account <span>Login in</span></>}
          <br/>
        <button onClick={toggleForm}>
          {showSignIn ? 'Sign Up' : 'Sign In'}
        </button>
      </p>
    </div>
    </>
  );
};

export default AuthForm;
