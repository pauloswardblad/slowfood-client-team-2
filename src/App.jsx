import React, { Component } from "react";
import LoginForm from "./Components/LoginForm";

class App extends Component {
  state = {
    renderLoginForm: false
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
