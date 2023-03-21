import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app.jsx';
import { AboutMe } from './components/aboutme';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = HashRouter([
  {
    path: "/",
    element: <App/>,
  },
  {path: "/aboutme",
element:<AboutMe/>}
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <RouterProvider router={router} />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
