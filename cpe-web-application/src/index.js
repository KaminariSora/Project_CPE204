import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './1st_Components/aboutPage/about.js';
import Blog from './1st_Components/Blog/blog.js';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Firstpage from './1st_Components/Home/FirstPage.js';
import MainPer from './1st_Components/PersonelPage/mainPer.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <Firstpage/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path:"/Personnel",
    element:<MainPer/>
  },
  {
    path: "/Blog",
    element:<Blog/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
