import * as React from 'react'

export default class Empty extends React.Component<any, any>{
  render(){
    const props :any = Object.assign({}, this.props, {
      layoutName: 'empty'
    })

    return (
      <main>
        {React.cloneElement(this.props.children, props)}
      </main>
    )
  }
}