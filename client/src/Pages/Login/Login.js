import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { loginUserWithEmail } from '../../store/actions/authActions';
import { GOOGLE_AUTH_LINK } from '../../constants';
import { loginSchema } from './validation';
import './style.css';

const Login = ({ auth, history, loginUserWithEmail }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      loginUserWithEmail(values, history);
    },
  });

  if (auth.isAuthenticated) return <Redirect to='/' />;

  return (
    <div className='container' style={{ paddingTop: '7%' }}>
      <div className='d-flex flex-column justify-content-center' id='login-box'>
        {' '}
        <form onSubmit={formik.handleSubmit}>
          <div />
          <div className='login-box-header'>
            <h4
              style={{
                color: 'rgb(139,139,139)',
                marginBottom: 0,
                fontWeight: 400,
                fontSize: 37,
              }}
            >
              Login
            </h4>
            <a href='/' style={{ textDecoration: 'none' }}>
              Home
            </a>
          </div>
          <div className='login-box-content'>
            <a href={GOOGLE_AUTH_LINK}>
              <div className='google-btn'>
                <div className='google-icon-wrapper'>
                  <img
                    className='google-icon'
                    alt={'google-icon'}
                    src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                  />
                </div>
                <p className='btn-text'>
                  <Link style={{ color: 'white', textDecoration: 'none' }}>
                    Signin with Google
                  </Link>
                </p>
              </div>
            </a>
          </div>
          <div className='d-flex flex-row align-items-center login-box-seperator-container'>
            <div className='login-box-seperator' />
            <div className='login-box-seperator-text'>
              <p
                style={{
                  marginBottom: 0,
                  paddingLeft: 10,
                  paddingRight: 10,
                  fontWeight: 400,
                  color: 'rgb(201,201,201)',
                }}
              >
                or
              </p>
            </div>
            <div className='login-box-seperator' />
          </div>
          <div className='email-login' style={{ backgroundColor: '#ffffff' }}>
            <input
              className='text form-control email-imput form-control'
              style={{ marginTop: 10 }}
              name='email'
              placeholder='Email'
              minLength={6}
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className='error'>{formik.errors.email}</p>
            ) : null}
            <input
              className='text form-control password-input form-control'
              type='password'
              style={{ marginTop: 10 }}
              placeholder='Password'
              name='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className='error'>{formik.errors.password}</p>
            ) : null}
          </div>
          {auth.error && <p className='error'>{auth.error}</p>}
          <div
            className='submit-row'
            style={{ marginBottom: 8, paddingTop: 0 }}
          />
          <div
            className='submit-row'
            style={{ marginBottom: 8, paddingTop: 0 }}
          >
            <button
              disabled={auth.isLoading || !formik.isValid}
              className='btn btn-primary btn-block box-shadow'
              id='submit-id-submit'
              type='submit'
            >
              Login in Now
            </button>
            <div className='d-flex justify-content-between' />
          </div>
          <div
            id='login-box-footer'
            style={{ padding: '10px 20px', paddingBottom: 23, paddingTop: 18 }}
          >
            <p style={{ marginBottom: 0 }}>
              Don't you have an account?
              <a id='register-link' href='/register'>
                Sign Up!
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { loginUserWithEmail })
)(Login);
