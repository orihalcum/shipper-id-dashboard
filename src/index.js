/**
 * 
 * Hi, My Name is Dzulfan Fadli
 * I do this test as much as possible as I usually do in Payfazz
 * Layout Structure, Config, Pages, Components
 * Doing all from scratch. Actually, I usually develop dashboard using Ant Design 
 * 
 */

import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import PageDriver from './pages/driver'
import PageDashboard from './pages/dashboard'
import './scss/index.scss'
import { createBrowserHistory } from "history"

 /**
 * 
 * App using router to switch route like generally react-app
 * Route Path as mentioned on the UI
 * Components : Dashboard and Driver
 * 
 */

const App = () => {
  const history = createBrowserHistory();
  return (
    <Router history={ history }>
      <Switch>
        <Route exact path="/" component={ PageDashboard } />
        <Route exact path="/dashboard" component={ PageDashboard } />
        <Route exact path="/pickup" component={ PageDashboard } />
        <Route exact path="/order" component={ PageDashboard } />
        <Route exact path="/driver" component={ PageDriver } />
        <Route exact path="/merchant" component={ PageDashboard } />
        <Route exact path="/laporan" component={ PageDashboard } />
        <Route exact path="/profil" component={ PageDashboard } />
      </Switch>
    </Router>
  )
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
