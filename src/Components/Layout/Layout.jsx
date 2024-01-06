import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Layout({userData,setUserData}) {
 let navigate= useNavigate()
  function logout(){
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/login')
  }
  return <>
    <Navbar logout={logout} userData={userData}/>
    <div className="container">
      <Outlet></Outlet>
    </div>
    <Footer />
  </>
}
