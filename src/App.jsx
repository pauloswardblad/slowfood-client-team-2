import React, { Component } from "react";
import LoginForm from "./Components/LoginForm";

class App extends Component {
  state = {
    renderLoginForm: false,
    renderLoginForm: false,
    authenticated: false,
    message: ""

  };

  onLogin = async e => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };
  
  
  render() {
    const renderLogin = this.state.renderLoginForm ? (
      <LoginForm />
    ) : (
      <button
        id="login"
        onClick={() => this.setState({ renderLoginForm: true })}
      >
        Login
      </button>
    );
    return (
      <>
        {renderLogin}
      </>
    );
  }
}

export default App;
