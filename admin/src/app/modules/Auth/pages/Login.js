import React, { useState, Component } from "react";

import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch, useRouter } from 'react-router-dom';
import { Auth } from '../../../../Context/Auth.context'

import Axios from 'axios'
import PropTypes from 'prop-types';

export class Login extends Component {

  // Submit Trigger
  submit = (event) => {
    event.preventDefault()
    Axios({
      method: 'post',
      url: process.env.REACT_APP_API_URL+'auth/login',
      data: {
        email: this.emailRef.current.value,
        password: this.passwordRef.current.value,
        admin: true
      }
    }).then((res) => {
      if (res.data.error === 0) {
        {/* Successful Login */}
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user))
        window.location.reload()
      }
    })
  }

  constructor(props){
    super(props)
    this.state = {
      data: [],
      filteredData: [],
      searchInput: ""
    }
    this.emailRef = React.createRef(null)
    this.passwordRef = React.createRef(null)
  }

  render() {

    return (
      <>
      <div className="login-form login-signin" id="kt_login_signin_form">
        {/* begin::Head */}
        <div className="text-center mb-10 mb-lg-20">
          <h3 className="font-size-h1">
            Login Account
          </h3>
          <p className="text-muted font-weight-bold">
            Enter your email and password
          </p>
        </div>
        {/* end::Head */}

        {/*begin::Form*/}
        <form className="form fv-plugins-bootstrap fv-plugins-framework"
          onSubmit={this.submit} >

          <div className="form-group fv-plugins-icon-container">
            <input placeholder="Email"
              className="form-control form-control-solid h-auto py-5 px-6" name="email"
              ref={this.emailRef} />
          </div>

          <div className="form-group fv-plugins-icon-container">
            <input placeholder="Password" type="password"
              className="form-control form-control-solid h-auto py-5 px-6" name="password"
              ref={this.passwordRef} />
          </div>

          <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
            <button id="kt_login_signin_submit" type="submit"
              className="btn btn-primary font-weight-bold px-9 py-4 my-3">
              <span>Sign In</span>
              <span className="ml-3"></span>
            </button>
          </div>
        </form>
        {/*end::Form*/}
      </div>
      </>
    );
  }

}
