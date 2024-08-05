import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from  "react-router-dom";
import Layout from './Layout.jsx';
import Home from './components/Home.jsx';
import Cards from './components/Cards.jsx';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element ={<Home/>}/>
      <Route path='cards' element ={<Cards/>}/>
    </Route>
  )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router = {Router}/>
  </React.StrictMode>,
)
