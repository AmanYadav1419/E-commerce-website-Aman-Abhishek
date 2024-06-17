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
        setErrorMessage(error.message);
      });
  };

  // handle signup
  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setErrorMessage("Password doesn't match! Please, provide correct password.");
    } else {
      setErrorMessage("");

      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Account created successfully!!");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          setErrorMessage(error.message);
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

            {errorMessage && (
              <div className="error-message text-danger mb-2">
                {errorMessage}
              </div>
            )}

            <div className="form-group">
              <button type="submit" className="d-block lab-btn">
                <span>{btnText}</span>
              </button>
            </div>
          </form>

          <div className="account-bottom">
            <span className="d-block cate pt-10">
              Have an Account? <Link to="/login">Login</Link>
            </span>

            <span className="or">
              <span>or</span>
            </span>

            <h5 className="subtitle">{socialTitle}</h5>
            <ul className="lab-ul social-icons justfy-content-center">
              <li>
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
