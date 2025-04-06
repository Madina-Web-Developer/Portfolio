import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router'
import './App.css'
import LayoutOne from './Components/Layouts/LayoutOne'
import Home from './Components/Pages/Home'
import app from './firebase.config'

function App() {
 
  const MyRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
        <Route index element ={<Home/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
       <RouterProvider router={MyRoute}/>
    </>
  )
}

export default App
