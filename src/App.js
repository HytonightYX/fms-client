import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Index from './pages'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'
import SingleFile from './pages/singleFIle'
import ProjectFile from './pages/projectFile'
import Error404 from './pages/error/404'

function App() {
  return (
    <>
      <Route path={'/'} exact component={Login}/>
      <Route path={'/login'} component={Login}/>
      <Route path={'/index'} render={() => (
        <Index>
          <Switch>
            <Route path="/index/" exact component={Dashboard} />
            <Route path="/index/auth/" component={Auth} />
            <Route path="/index/dashboard/" component={Dashboard} />
            <Route path="/index/file/single" component={SingleFile} />
            <Route path="/index/file/project" component={ProjectFile} />
            <Route component={Error404} />
          </Switch>
        </Index>
      )}/>
    </>
);
}

export default App;
