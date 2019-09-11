import React from 'react';
import { Route, Switch } from 'react-router-dom'
import AuthRoute from './components/AuthRoute'

import Index from './pages'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import SingleFile from './pages/singleFile'
import ProjectFile from './pages/projectFile'
import Error404 from './pages/error/404'
import AuthRole from './pages/auth/role'
import AuthUser from './pages/auth/user'
import Lend from './pages/lend'



function App() {
  return (
    <>
      <Route path={'/'} exact component={Login}/>
      <Route path={'/login'} component={Login}/>
      <Route path={'/index'} render={() => (
        <Index>
          <Switch>
            <AuthRoute path="/index/" exact component={Dashboard} />
            <Route path="/index/dashboard/" component={Dashboard} />
            <Route path="/index/file/single" component={SingleFile} />
            <Route path="/index/file/project" component={ProjectFile} />
            <Route path="/index/lend" component={Lend} />
            <Route path="/index/auth/role" component={AuthRole} />
            <Route path="/index/auth/user" component={AuthUser} />
            <Route component={Error404} />
          </Switch>
        </Index>
      )}/>
    </>
  )
}

export default App;
