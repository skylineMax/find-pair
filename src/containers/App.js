import React from 'react'
import Loadable from 'react-loadable'
import { Switch, Route } from 'react-router-dom';

const Loading = () => (
  <div>Please, wait...</div>
)

const AsyncSettings = Loadable({
  loader: () => import('./Settings'),
  loading: Loading
})

const AsyncContainer = Loadable({
  loader: () => import('./Container'),
  loading: Loading
})

const App = () =>  {
    return (
        <div className="app">
          <div className="app-main">
            <Switch>
                <Route exact path="/" component={AsyncSettings} />
                <Route path="/game" component={AsyncContainer} />
            </Switch>
          </div>
        </div>
    );
}

export default App
