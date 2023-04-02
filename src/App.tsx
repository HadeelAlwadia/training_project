import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './routes';
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from './store/index'
import { authMethoad } from './store/actions/authActions';
import { adminMethoad } from './store/actions/adminActions';
import { themeActions } from './store/actions/themeActions';
import { userActions, userMethoads } from './store/actions/userActions ';
function App() {
 const {userData}=useSelector((state:RootState)=>state);
 console.log(userData)
   const dispatch=useDispatch()
  useEffect(()=>{

 dispatch(themeActions.lightTheme())

 userMethoads.getProfileUser(dispatch)

  },[]) 
  return (
    <>
    <button onClick={() =>authMethoad.signOut(dispatch)}>logout</button>
 
    <RouterProvider router={routers} />
    </>
  );
}

export default App;

