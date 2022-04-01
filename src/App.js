import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, } from "react-router-dom";
import { RoutesPage } from './Routes'

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <ToastContainer theme="colored" />
        <RoutesPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
