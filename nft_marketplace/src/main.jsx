import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from  "react-router-dom";
import Layout from './Layout.jsx';
import Home from './components/Home.jsx';
import Collections from './components/Collections.jsx';
import Trending from './components/Trending.jsx';
import Mint from './components/Mint.jsx';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element ={<Home/>}/>
      <Route path='trending' element ={<Trending/>}/>
      <Route path='mint' element ={<Mint/>}/>
      <Route path='collections' element ={<Collections/>}/>
    </Route>
  )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router = {Router}/>
)
