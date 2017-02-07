import * as React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import * as Layouts from './layouts'
import {Dashboard, Login} from './views'

import ThemeProvider from 'react-toolbox/lib/ThemeProvider.js'
const contextTheme :any = require('./stylesheets/react-toolbox/theme.js')

class Troal extends React.Component<null, undefined>{
  render(){
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layouts.Empty}>
          <IndexRoute component={Login} />
        </Route>
        <Route path='/dashboard' component={Layouts.Dashboard}>
          <IndexRoute component={Dashboard} />
        </Route>
      </Router>
    )
  }
}

render(
  <ThemeProvider theme={contextTheme}>
    <Troal />
  </ThemeProvider>,
  document.getElementById('root'))