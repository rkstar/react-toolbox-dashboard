import * as React from 'react'
import Input from 'react-toolbox/lib/input'

let email :string = ''
function updateEmail(e){
  console.log('email:', e)
  email = e
}

export default (props)=>(
  <section>
    <Input
      type='email'
      value={email}
      label='Email address'
      icon='email'
      onChange={updateEmail} />
  </section>
)