import * as React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import * as Layouts from './layouts'
import {Dashboard, Login} from './views'

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

render(<Troal />, document.getElementById('root'))