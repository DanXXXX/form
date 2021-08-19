import React from 'react';
import Forms from './components/Forms.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"


const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
     }
  }


  handleEmailChange = (e) => {
    this.setState({ email: e.target.value, emailIsValid: regex.test(e.target.value)})

  }


   handlePasswordChange = (e) => {
    this.setState({ password: e.target.value, passwordIsValid: e.target.value.length > 5  })
  }

  handleRememberMeChange = (e) => {
    this.setState({rememberMe: e.target.value})
  }

  render() { 
    console.log(this.state);
    return (
      <>
        <h1>hello</h1>

        <Forms
         email={this.state.email}
         handleEmailChange={this.handleEmailChange}

         password={this.state.password}
         handlePasswordChange={this.handlePasswordChange}

         rememberMe={this.state.rememberMe}
         handleRememberMeChange={this.handleRememberMeChange}
          />

      </>
     );
  }
}
 
export default App;
