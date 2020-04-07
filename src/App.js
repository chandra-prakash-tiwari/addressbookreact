import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Header from './Component/Header';
import Navigation from './Component/Navigation';
import Content from './contents';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
      <Router>
          <div className='cointainer'>
              <Header />
              <Navigation />
              <Content/>
          </div>
      </Router>
    );
}
