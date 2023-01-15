import React from 'react'
// import { NavLink } from 'react-router-dom';
import {useFormik} from 'formik'
import { customerValidationSchema2 } from '../../service/customer';
// import { useEffect } from 'react';
// import {addNewCustomer} from "../../service/customer"
const SignInPage = () => {
    const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        Email: "",
      },
      validationSchema: customerValidationSchema2,
      onSubmit: (values) => {
     
            localStorage.setItem("email Local",JSON.stringify(values));
            resetForm();
          }}
   
    )
   
  return (
    <div>
     
 <form id="product-form" onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column", alignItems:"center",
     justifyContent:"center",rowGap:"15px"}}>
        
       
          <input
          id="Email"
          name="Email"
          type="text"
          onChange={handleChange}
          value={values.Email}
          placeholder="Your Email Address..."
        />
     
        {errors.Email && touched.Email && (
          <span style={{ color: "red", fontSize: "16px" }}>
            {errors.Email}
          </span>
        )}
        
        
        
       <button id="" type='submit' className='button-59'> Sign in</button>

      </form>
    </div>
  )
}
export default SignInPage