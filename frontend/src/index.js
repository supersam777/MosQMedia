import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route} from 'react-router-dom'

// Page import
import App from './App';
import Profile from './Profile';
import MosqueDetail from './MosqueDetail';

const router = 
<Router>
  <Route exact path="/" component={App} />
  <Route  path="/profile" component={Profile} />
  <Route  path="/detail" component={MosqueDetail} />
</Router>

ReactDOM.render( router, document.getElementById('root') );
reportWebVitals();
