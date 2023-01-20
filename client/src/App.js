import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

/* importing all components*/
import Username from "./component/Username";
import Register from "./component/Register";
import Password from "./component/Password";
import Reset from "./component/Reset";
import Recovery from "./component/Recovery";
import Profile from "./component/Profile";
import PageNotFound from "./component/PageNotFound";


const router = createBrowserRouter([
  {
    path:'/',
    element:<Username></Username>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/password',
    element:<Password></Password>
  },
  {
    path:'/profile',
    element:<Profile></Profile>
  },
  {
    path:'/reset',
    element:<Reset></Reset>
  },
  {
    path:'/recovery',
    element:<Recovery></Recovery>
  },
  {
    path:'*',
    element:<PageNotFound></PageNotFound>
  },
])

export default function App() {
  return (
   <main>
      <RouterProvider router={router}> </RouterProvider>
   </main>

  )
}
