import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Reset } from 'styled-reset'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Router from "./pages/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Reset />
    <GlobalStyle />
    <Routes>
      <Route index element={<Router />} />
      <Route path="/project" element={<Router path={'project'} />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
