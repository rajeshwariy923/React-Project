import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "swordfish",
      authorized: false,
      formData: {
        passwordInput: "",
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  authorize = (e) => {
    e.preventDefault();
    if (this.state.formData.passwordInput === this.state.password) {
      this.setState({ authorized: true });
    }
  };

  render() {
    const login = (
      <form onSubmit={this.authorize}>
        <div className="form-group">
          <label htmlFor="passwordInput">Password:</label>
          <input
            type="password"
            id="passwordInput"
            name="passwordInput"
            value={this.state.formData.passwordInput}
            onChange={this.handleChange}
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" />
        </div>
      </form>
    );

    const contactInfo = (
      <ul>
        <li>Name: John Doe</li>
        <li>Email: john@example.com</li>
        <li>Phone: 555-555-5555</li>
      </ul>
    );

    return (
      <div className="App">
        <h1>{this.state.authorized ? "Contact" : "Enter the Password"}</h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

export default App;
