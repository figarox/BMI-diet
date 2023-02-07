import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import SwitchPage from './SwichPage/SwichPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './@media/@media.css';

const App = () => {
  return(
    <>
          <Router basename={process.env.PUBLIC_URL}>
            {<SwitchPage />}
          </Router>
    </>
  )
}
 
export default App;
