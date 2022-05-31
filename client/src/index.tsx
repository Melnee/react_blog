import React from 'react';
import './index.css';
import App from './App';
import BlogPostContainer from './components/BlogPostContainer';
import BlogPostCreate from './components/BlogPostCreate';
import BlogPostUpdate from './components/BlogPostUpdate';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/:id" element={<BlogPostContainer/>} />
        <Route path="/:id/update" element={<BlogPostUpdate/>} />
        <Route path="/create" element={<BlogPostCreate/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
