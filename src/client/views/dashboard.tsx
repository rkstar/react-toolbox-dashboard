import * as React from 'react'
import {Layout, NavDrawer, Panel} from 'react-toolbox/lib/layout'
import AppBar from 'react-toolbox/lib/app_bar/AppBar.js'
import Button from 'react-toolbox/lib/button/Button'

export default class Dashboard extends React.Component<any, any>{
  constructor(props){
    super(props)

    this.state = {
      drawerOpen: false
    }

    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  toggleDrawer(){
    const drawerOpen :boolean = !this.state.drawerOpen
    this.setState({drawerOpen})
  }

  render(){
    return (
      <Layout>
        <NavDrawer
          active={this.state.drawerOpen}
          onOverlayClick={this.toggleDrawer}>
          <p>
            Navigation, account switcher, etc. go here.
          </p>
        </NavDrawer>
        <Panel>
          <AppBar
            leftIcon='menu'
            onLeftIconClick={this.toggleDrawer} />

          <Button label='click me' accent raised />
        </Panel>
      </Layout>
    )
  }
}