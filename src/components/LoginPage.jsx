import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const title = "Login";
const socialTitle = "Login with Social Media";
const btnText = "Login Now";

const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "#",
    className: "facebook",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
    className: "twitter",
  },
  {
    iconName: "icofont-linkedin",
    siteLink: "#",
    className: "linkedin",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "#",
    className: "instagram",
  },
  {
    iconName: "icofont-pinterest",
    siteLink: "#",
    className: "pinterest",
  },
];

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const { signUpWithGmail, login } = useContext(AuthContext);

  const locaation = useLocation();

  const navigate = useNavigate();

  const from = locaation.state?.from?.pathname || "/";

  // handle login form submit
  const handleLogin = (event) => {
    event.preventDefault();
  };

  // handle register
  const handleRegister = () => {
    
  };

  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleLogin}>
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
              <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                <div className="checkgroup">
                  <input type="checkbox" name="remeber" id="remeber" />
                  <label htmlFor="remeber">Remeber Me</label>
                </div>
                <Link to="/forgotpass">Forgot Password</Link>
              </div>
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
              Don't Have Account? <Link to="/sign-up">Sign Up</Link>
            </span>

            <span className="or">
              <span>or</span>
            </span>

            {/* social login */}
            <h5 className="subtitle">{socialTitle}</h5>
            <ul className="lab-ul social-icons justfy-content-center">
              {/* without using map  */}
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

export default LoginPage;
