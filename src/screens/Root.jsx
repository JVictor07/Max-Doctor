import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ScreensHome from './Home/Home.jsx'
import ScreensUserLogin from './User/Login'

const ScreensRoot = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ScreensHome}/>
      <Route path="/maxdoctor" exact component={ScreensUserLogin}/>
    </Switch>
  </BrowserRouter>
)

export default ScreensRoot