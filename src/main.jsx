import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Layout from "./Layout.jsx";
import Contact from "./Components/Contact/contact.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Github,{githubInfoLoader}  from "./Components/Github/Github.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
        </Route>
    
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
