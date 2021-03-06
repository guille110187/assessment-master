import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './auth';

class Register extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      Auth.isAuthenticated() ?
        <Redirect to="/welcome" />
        :

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: ""
        }}

        validationSchema={Yup.object().shape({
          name: Yup.string()
            .required("Required")
            .min(1, "Password is too short - should be 8 chars minimum."),
          email: Yup.string()
            .email()
            .required("Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/(?=.*[0-9])/, "Password must contain a number.")
        })}

        onSubmit={(values, { setSubmitting }) => {
            Auth.authenticate(() => {
            this.props.history.push('/welcome')
          });
          setTimeout(() => {
            setSubmitting(false);
          }, 500);
        }}

      >
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          } = props;
          return (
            <div className="base-container">
              <div className="content">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="header">Sing-Up</div>
                  <div className="form-group form-custom">
                    <label htmlFor="name">Full Name</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.name && touched.name && "error"}

                    />
                    {errors.name && touched.name && (
                      <div className="input-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group form-custom">
                    <label htmlFor="email">Email</label>
                    <input
                      name="email"
                      type="text"
                      placeholder="user@email.com"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.email && touched.email && "error"}
                    />
                    {errors.email && touched.email && (
                      <div className="input-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group form-custom">
                    <label htmlFor="password">Password</label>
                    <input
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.password && touched.password && "error"}
                    />
                    {errors.password && touched.password && (
                      <div className="input-feedback">{errors.password}</div>
                    )}
                  </div>
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Loanding..." : "Sing Up"}
                  </button>
                </form>
                <div className="link-login">
                  <div>Already registered ? <Link to="login">Sing-in</Link> </div>
                </div>

              </div>
            </div>
          );
        }}
      </Formik>

    );
  }
}





export default withRouter(Register);
