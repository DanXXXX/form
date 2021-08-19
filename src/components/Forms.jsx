import React from 'react';
import App from '../App.js';
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css";


class Forms extends React.Component {
    render() { 
        return (
    <div className="centrer">
        <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>

              <input type="email"
               onChange={this.props.handleEmailChange } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
               />

              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

            </div>
            <div className="form-group">

              <label for="exampleInputPassword1">Password</label>

              <input type="password"
              onChange={this.props.handlePasswordChange}
              value={this.props.password}
               className="form-control" id="exampleInputPassword1" placeholder="Password"/>

            </div>
            <div className="form-check">

              <input type="checkbox" 
              onChange={this.props.handleRememberMeChange}
              value={this.rememberMe}
              className="form-check-input" id="exampleCheck1"/>

              <label className="form-check-label" for="exampleCheck1">Check me out</label>

            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>

      
          );
    }
}
 
export default Forms;