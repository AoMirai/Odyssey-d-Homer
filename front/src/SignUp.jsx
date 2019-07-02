import React, { Component } from 'react'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'test@test.fr'
    }
  }
  updateEmailField = (event) => {
    this.setState({email: event.target.value})
  }

  render() {
    const { email } = this.state
    return (
      <div className="SignUp">
        <h1>{email}</h1>
        <input 
        onChange={this.updateEmailField} 
        value={email} 
        type="email" 
        name="email"/> 
      </div>
    )
  }
}

export default SignUp
