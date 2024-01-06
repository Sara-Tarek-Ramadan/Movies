import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import Tvshow from './Components/Tvshow/Tvshow';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import People from './Components/People/People';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/NotFound/Notfound';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import ProtectedRouter from './Components/ProtectedRouter/ProtectedRouter';




function App() {
  const [userData, setUserData] = useState(null)

 useEffect(()=>{
  if (localStorage.getItem('userToken')!==null) {
    saveUserData()
  }
 },[])
function saveUserData(){
  let encodedToken=localStorage.getItem('userToken');
  let decodedToken=jwtDecode(encodedToken);
  setUserData(decodedToken)

}

let routers = createBrowserRouter([
  { path: "", element: <Layout setUserData={setUserData} userData={userData} /> , children: [
    {index:true , element: <ProtectedRouter><Home/></ProtectedRouter>},
    {path:"home" , element:<ProtectedRouter><Home/></ProtectedRouter> },
    {path:"register" , element:<Register/> },
    {path:"movies" , element:<ProtectedRouter><Movies/></ProtectedRouter> },
    {path:"tvshow" , element:<ProtectedRouter><Tvshow/></ProtectedRouter> },
    {path:"itemdetails/:id/:mediaType" , element:<ProtectedRouter><ItemDetails/></ProtectedRouter> },
    {path:"people" , element: <ProtectedRouter><People/></ProtectedRouter>},
    {path:"login" , element: <Login saveUserData={saveUserData}/>},
    {path:"*" , element: <Notfound/>},
  ]}
])
  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
