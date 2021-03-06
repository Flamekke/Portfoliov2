import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About'
import Projects from './routes/Projects';
import AboutProject from './routes/AboutProject';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-project/:title" element={<AboutProject />} />
      </Routes>
  </BrowserRouter>,
rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
