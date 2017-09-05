import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';


import About from './components/About';
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import References from './components/References';

ReactDOM.render(
  <BrowserRouter>
   <BaseLayout>
     <Switch>
        <Route path="/References" component={References} />
        <Route path="/Contact" component={Contact} />
        <Route path="/About" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Home" component={Home} />
        <Route exact path="/" component={App} />
     </Switch>
    </BaseLayout>
 </BrowserRouter>

 ,document.getElementById('root')
);
registerServiceWorker();
