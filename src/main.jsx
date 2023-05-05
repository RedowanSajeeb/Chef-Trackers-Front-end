import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/Route.jsx'
import AuthProvider from './provider/AuthProvider'
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.TOP_CENTER,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <Provider template={AlertTemplate} {...options}>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </Provider>
   
  </React.StrictMode>
);
