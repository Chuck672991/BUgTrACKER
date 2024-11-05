// import React from "react";
// import { useNavigate } from "react-router-dom";
// import backgroundImage from "../../assets/background.avif";

// function LoginPage() {
//   const navigate = useNavigate();

//   const handleLogin = (event) => {
//     event.preventDefault(); // Prevent the default form submission behavior

//     // Simulate login behavior (add any authentication logic if needed)
//     // For now, it just navigates to the /user route
//     navigate("/user");
//   };

//   return (
//     <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="login-box">
//         <h1>Login to Bug Tracker</h1>
//         <form className="login-form" onSubmit={handleLogin}>
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" placeholder="Enter your email" required />

//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" placeholder="Enter your password" required />

//           <button type="submit" className="login-button">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
import React, { useState } from 'react';
// import 'boxicons/css/boxicons.min.css';
import "./LoginPage.css";
import { useNavigate } from 'react-router-dom';

const LoginSignupForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const toggleForm = () => {
    navigate("/user");
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      {isLogin ? (
        <div className="form-box login">
          <form>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <p>or login with social platforms</p>
            <div className="social-icons">
              <a href="#"><i className="bx bxl-google"></i></a>
              <a href="#"><i className="bx bxl-facebook"></i></a>
              <a href="#"><i className="bx bxl-github"></i></a>
              <a href="#"><i className="bx bxl-linkedin"></i></a>
            </div>
          </form>
        </div>
      ) : (
        <div className="form-box register">
          <form>
            <h1>Registration</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className="btn">Register</button>
            <p>or register with social platforms</p>
            <div className="social-icons">
              <a href="#"><i className="bx bxl-google"></i></a>
              <a href="#"><i className="bx bxl-facebook"></i></a>
              <a href="#"><i className="bx bxl-github"></i></a>
              <a href="#"><i className="bx bxl-linkedin"></i></a>
            </div>
          </form>
        </div>
      )}

      <div className="toggle-box">
        {isLogin ? (
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button className="btn register-btn" onClick={toggleForm}>
              Register
            </button>
          </div>
        ) : (
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className="btn login-btn" onClick={toggleForm}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignupForm;

