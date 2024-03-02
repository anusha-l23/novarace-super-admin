import { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {baseUrl} from "../apiConfig";

const Login = () => {
  
  const navigate = useNavigate();
  
  const initialValues = {
    userName: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required('User Name is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(`${baseUrl}superadmin/login`, 
        values,
        {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      );
      if (response.status === 200) {

        navigate(`/events`)
      }
      else {
  
        const errorData = await response.json();
        console.error('Signin failed:', errorData);
      }
    } catch (error) {
      console.error("Error during signin:", error);

    }

  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
<div className='container d-flex justify-content-center align-items-center vh-100'>
<div className="p-4 border rounded-3">
  <h2 className="text-center mb-4">Login</h2>
  <form onSubmit={formik.handleSubmit}>
    <div className="row">
    <div className="mb-3 col-12">
      <label htmlFor="username" className="form-label">User Name</label>
      <input 
      type="text" 
      className="form-control"
       id="username"
        placeholder="Enter username"
        name="userName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userName}
        required
        />
         {formik.touched.userName && formik.errors.userName && (
          <div className="text-danger">{formik.errors.userName}</div>
        )}
    </div>
    <div className="mb-3 col-12">
      <label htmlFor="password" className="form-label">Password</label>
      <input 
      type="password"
       className="form-control"
        id="password"
         placeholder="Enter password"
         name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        required
         />
          {formik.touched.password && formik.errors.password && (
          <div className="text-danger">{formik.errors.password}</div>
        )}
    </div>
    </div>
    <div className='text-center mt-3'>
    <button type="submit" className='btn btn-primary border px-4'>Login</button>
    </div>
  </form>
</div>
</div>
  )
}

export default Login