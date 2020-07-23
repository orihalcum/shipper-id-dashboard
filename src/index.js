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

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ PageDashboard } />
        <Route exact path="/dashboard" component={ PageDashboard } />
        <Route exact path="/driver" component={ PageDriver } />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
