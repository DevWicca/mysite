import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/container/Profile';
import Graphiql from './components/container/Graphiql'
import ItemlistMrenRedux from './components/container/ItemlistMrenRedux'
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


const routing = (
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={Profile} />
            <Route path="/Profile" component={Profile} />
            <Route path="/graphiql" component={Graphiql} />
            <Route path="/ItemlistMrenRedux" component={ItemlistMrenRedux} />
        </Switch>
      </div>
    </Router>
  )
ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
