import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
export default function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  let navigate=useNavigate()
async function sendRegisterData(values){
  setIsLoading(true)
let {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values).catch((error)=>{
console.log(error);
setError(error.response.data.message)
  setIsLoading(false)
})
if (data.message=='success'){
  navigate('/login')
  setIsLoading(false)
}
}
let validationSchema=Yup.object({
  name:Yup.string().required('name is required').min(3,'name minlength is 3').max(15,'name maxlength is 15'),
  email:Yup.string().required('email is required').email('email is invalid'),
  password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{5,10}$/,'password must start with upperCase'),
  rePassword:Yup.string().required('rePassword is required').oneOf([Yup.ref('password')],'password and rePassword does not match'),
  phone:Yup.string().required('phone is required').matches(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/,'phone must be valid'),

})
  let formik=useFormik({
    initialValues:{
      name:'',
      email:'',
      phone:'',
      password:'',
      rePassword:''
    },
    onSubmit:sendRegisterData,
    validationSchema
  })

  return <>
  
  <div className="w-75 mx-auto my-4">
    <h2>Register Now</h2>
    <form onSubmit={formik.handleSubmit}>
      {error?<div  className='alert alert-danger'>{error}</div>:''}

<label htmlFor="name">name</label>
<input className='form-control my-2'  type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
{formik.errors.name && formik.touched.name?  <div className="alert alert-danger">{formik.errors.name}</div>:null}

<label htmlFor="email">email</label>
<input className='form-control my-2' type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
{formik.errors.email && formik.touched.email?  <div className="alert alert-danger">{formik.errors.email}</div>:null}

<label htmlFor="password">password</label>
<input className='form-control my-2' type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
{formik.errors.password && formik.touched.password?  <div className="alert alert-danger">{formik.errors.password}</div>:null}

<label htmlFor="rePassword">rePassword</label>
<input className='form-control my-2' type="password" name="rePassword" id="rePassword" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
{formik.errors.rePassword && formik.touched.rePassword?  <div className="alert alert-danger">{formik.errors.rePassword}</div>:null}

 <label htmlFor="phone">phone</label>
<input className='form-control my-2' type="tel" name="phone" id="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
{formik.errors.phone && formik.touched.phone?  <div className="alert alert-danger">{formik.errors.phone}</div>:null}

  <button type='submit' className='btn btn-info my-2'>{isLoading?<i className='fas fa-spinner fa-span'></i>:'Register'}</button>
    </form>
  </div>
  </>
}
