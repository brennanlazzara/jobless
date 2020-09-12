import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { useFormik } from 'formik';
import { registerUserWithEmail } from '../../store/actions/registerActions';
import { registerSchema } from './validation';
import './styles.css';

const Register = ({ auth, history, registerUserWithEmail }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      registerUserWithEmail(values, history);
    },
  });

  return (
    <div className='register' style={{ paddingTop: '7%' }}>
      <div className='d-flex flex-column justify-content-center' id='login-box'>
        <form onSubmit={formik.handleSubmit} noValidate>
          <div className='login-box-header'>
            <h4
              style={{
                color: 'rgb(139,139,139)',
                marginBottom: 0,
                fontWeight: 400,
                fontSize: 37,
              }}
            >
              Register
            </h4>
            <a href='/' style={{ textDecoration: 'none' }}>
              Home
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
                USER REGISTRATION&nbsp;
              </p>
            </div>
            <div className='login-box-seperator' />
          </div>
          <div className='d-flex flex-row align-items-center login-box-seperator-container'>
            <div className='login-box-seperator' />
            <div className='login-box-seperator-text' />
            <div className='login-box-seperator' />
          </div>
          <div className='email-login' style={{ backgroundColor: '#ffffff' }}>
            {/* <form onSubmit={formik.handleSubmit} noValidate> */}
            {/* <h2>Create new account</h2> */}
            <input
              className='form-control '
              type='text'
              style={{ marginTop: 10 }}
              placeholder='Name'
              name='name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />

            {formik.touched.name && formik.errors.name ? (
              <p className='error'>{formik.errors.name}</p>
            ) : null}
            <input
              className='form-control'
              type='text'
              style={{ marginTop: 10 }}
              placeholder='Username'
              name='username'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <p className='error'>{formik.errors.username}</p>
            ) : null}
            <input
              className='form-control'
              type='text'
              style={{ marginTop: 10 }}
              placeholder='Email'
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className='error'>{formik.errors.email}</p>
            ) : null}
            <input
              className='form-control password-input form-control'
              type='password'
              name='password'
              style={{ marginTop: 10 }}
              placeholder='Password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className='error'>{formik.errors.password}</p>
            ) : null}
          </div>
          <div
            className='submit-row'
            style={{ marginBottom: 8, paddingTop: 0 }}
          >
            <button
              className='btn btn-primary btn-block box-shadow'
              id='submit-id-submit'
              type='submit'
              disabled={!formik.isValid}
            >
              Register
            </button>
            <div className='d-flex justify-content-between' />
          </div>
          <div
            id='login-box-footer'
            style={{ padding: '10px 20px', paddingBottom: 23, paddingTop: 18 }}
          >
            <p style={{ marginBottom: 0 }}>
              Have an account?{' '}
              <a id='register-link' href='/login'>
                Login
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
  register: state.register,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { registerUserWithEmail })
)(Register);
