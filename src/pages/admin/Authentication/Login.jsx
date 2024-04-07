import PropTypes from 'prop-types'
import React, { useEffect } from "react"

import { Row, Col, Alert, Container } from "reactstrap"

// Redux
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"


// actions
import { loginUser, apiError, socialLogin } from "../../../store/actions"

// import images
import logo from "../../../../public/KBLlogo.png"

const Login = (props) => {
  const login = useSelector(state=>state.Login)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    dispatch(loginUser({user:values, navigate}))
  }

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <div className="card overflow-hidden">
                <div className="bg-login text-center">
                  <div className="bg-login-overlay"></div>
                  <div className="position-relative">
                    <h5 className="text-white font-size-20">Welcome Back !</h5>
                    <p className="text-white-50 mb-0">Sign in to continue to Prism.</p>
                    <Link to="/" className="logo logo-admin mt-4">
                      <img src={logo} alt="" height="30" />
                    </Link>
                  </div>
                </div>
                <div className="card-body pt-5">
                  <div className="p-2">
                    <form
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      {login.error && typeof login.error === "string" ? (
                        <Alert color="danger">{login.error}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <input
                          name="email"
                          label="Email"
                          value="admin@themesbrand.com"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          name="password"
                          label="Password"
                          value="123456"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3">
                        <button
                          className="btn btn-primary w-100 waves-effect waves-light"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted"><i
                          className="mdi mdi-lock me-1"></i> Forgot your password?</Link>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p>Don't have an account ? <Link to="/register"
                  className="fw-medium text-primary"> Signup now </Link> </p>
                <p>© {new Date().getFullYear()} PRISM. Crafted with <i
                  className="mdi mdi-heart text-danger"></i> by HyunsikLee
                        </p>
              </div>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default Login