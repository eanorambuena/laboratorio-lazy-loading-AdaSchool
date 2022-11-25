import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        <Route path = "/about" element={
          <Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
        <Route path = "/contact" element={
          <Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />
      </Routes>
    </Router>
  );
}

export default App;