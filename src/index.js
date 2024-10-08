import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import ScrollToTop from './components/ScrollToTop';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<Router>
		<ScrollToTop />
		<App />
	</Router>
  </React.StrictMode>
);
