import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const title = "Register";
const socialTitle = "Signup with Social Media";
const btnText = "Signup";

const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const { signUpWithGmail, createUser } = useContext(AuthContext);

  const location = useLocation();

  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // handle register
  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;

        setErrorMessage("Please Provide Valid Email & Password");
      });
  };

  // handle signup
  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    // console.log(form);

    const email = form.email.value;
    // console.log(email)

    const password = form.password.value;
    // console.log(password)

    const confirmPassword = form.confirmPassword.value;
    // console.log(confirmPassword)

    // logic for confirmPassword must be same with password
    if (password !== confirmPassword) {
      setErrorMessage(
        "Password doesn't Match! Please, Provide Correct Password"
      );
    } else {
      setErrorMessage("");

      // logic for create user after correct match of confirm password with password
      createUser(password, email)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Account Created succesfully !!");

          // navigate to home page
          navigate(from, { replace: true });
        })
        .catch((error) => {
          // console.log(error.message);
          alert(`${error.message}`);
        });
    }
  };

  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleSignUp}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Full Name *"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address *"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password *"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password *"
                required
              />
            </div>

            {/* showing error message */}
            <div>
              {errorMessage && (
                <div className="error-message text-danger mb-2">
                  {errorMessage}
                </div>
              )}
            </div>

            <div className="form-group">
              <button type="submit" className="d-block lab-btn">
                <span>{btnText}</span>
              </button>
            </div>
          </form>

          {/* account bottom */}
          <div className="account-bottom">
            <span className="d-block cate pt-10">
              Have an Account? <Link to="/login">Login</Link>
            </span>

            <span className="or">
              <span>or</span>
            </span>

            {/* social login */}
            <h5 className="subtitle">{socialTitle}</h5>
            <ul className="lab-ul social-icons justfy-content-center">
              {/* without using map  */}
              <li>
                {/* this is actually a google login */}
                <button className="github" onClick={handleRegister}>
                  <i className="icofont-github"></i>
                </button>
              </li>

              <li>
                <a href="#" className="facebook">
                  <i className="icofont-facebook"></i>
                </a>
              </li>

              <li>
                <a href="#" className="twitter">
                  <i className="icofont-twitter"></i>
                </a>
              </li>

              <li>
                <a href="#" className="linkedin">
                  <i className="icofont-linkedin"></i>
                </a>
              </li>

              <li>
                <a href="#" className="instagram">
                  <i className="icofont-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
