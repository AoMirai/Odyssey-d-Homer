import React, { Component } from 'react'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      passwordbis: "monPassw0rd",
      name: "James",
      lastname: "Bond"
    }
  }
  updateEmailField = (event) => {
    this.setState({ email: event.target.value })
  }
  updatePasswordField = (event) => {
    this.setState({ password: event.target.value })
  }
  updatePasswordbisField = (event) => {
    this.setState({ passwordbis: event.target.value })
  }
  updateNameField = (event) => {
    this.setState({ name: event.target.value })
  }
  updateLastnameField = (event) => {
    this.setState({ lastname: event.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(JSON.stringify(this.state))
  }

  render() {
    const { email, password, passwordbis, name, lastname } = this.state
    return (
      <div className="SignUp">
        <h1>{JSON.stringify(this.state)}</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email : </label>
          <input
            onChange={this.updateEmailField}
            value={email}
            type="email"
            name="email" />

          <label htmlFor="password">Password : </label>
          <input
            value={password}
            onChange={this.updatePasswordField}
            type="password"
            name="password" />

          <label htmlFor="confirmPassword">Confirm Password :</label>
          <input
            value={passwordbis}
            onChange={this.updatePasswordbisField}
            type="password"
            name="confirmPassword" />

          <label htmlFor="name">Name :</label>
          <input
            value={name}
            onChange={this.updateNameField}
            type="text"
            name="name" />

          <label htmlFor="lastname">Lastname :</label>
          <input
            value={lastname}
            onChange={this.updateLastnameField}
            type="text"
            name="lastname" />

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default SignUp
