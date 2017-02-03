import * as React from 'react'

export default class Dashboard extends React.Component<any, any>{
  constructor(props){
    super(props)
  }

  render(){
    const props :any = Object.assign({}, this.props, {
      layoutName: 'dashboard'
    })

    return (
      <main>
        {React.cloneElement(this.props.children, props)}
      </main>
    )
  }
}