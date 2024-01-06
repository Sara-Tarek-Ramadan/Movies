import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
export default function Login({saveUserData}) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  let navigate=useNavigate()
async function sendRegisterData(values){
  setIsLoading(true)
let {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values).catch((error)=>{
console.log(error);
setError(error.response.data.message)
  setIsLoading(false)
})
if (data.message=='success'){
  localStorage.setItem('userToken',data.token)
  saveUserData()
  navigate('/home')
  setIsLoading(false)
}
}
let validationSchema=Yup.object({
  email:Yup.string().required('email is required').email('email is invalid'),
  password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{5,10}$/,'password must start with upperCase'),
 
})
  let formik=useFormik({
    initialValues:{
      email:'', 
      password:'',
    },
    onSubmit:sendRegisterData,
    validationSchema
  })

  return <>
  
  <div className="w-75 mx-auto my-4">
    <h2>Login Now</h2>
    <form onSubmit={formik.handleSubmit}>
      {error?<div  className='alert alert-danger'>{error}</div>:''}


<label htmlFor="email">email</label>
<input className='form-control my-2' type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
{formik.errors.email && formik.touched.email?  <div className="alert alert-danger">{formik.errors.email}</div>:null}

<label htmlFor="password">password</label>
<input className='form-control my-2' type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
{formik.errors.password && formik.touched.password?  <div className="alert alert-danger">{formik.errors.password}</div>:null}

  <button type='submit' className='btn btn-info my-2'>{isLoading?<i className='fas fa-spinner fa-span'></i>:'Register'}</button>
    </form>
  </div>
  </>
}
