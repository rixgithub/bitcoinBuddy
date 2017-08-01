import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
// import './Profile/Profile.js';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    {/*const { profile } = this.state.profile;*/}
    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
            
            {  !isAuthenticated() && (
              <img className="img-brand" src={"../BitCoin_Buddy_logo.png"} alt="BitCoin_Buddy_logo.png" width="100px" height="40px"/>
              // <h4>Bit-Coin Buddy</h4>
              )
            }
            {  isAuthenticated() && (
              <img className="img-brand" src={"../BitCoin_Buddy_logo.png"} alt="BitCoin_Buddy_logo.png" width="100px" height="40px"/>
              )
            }
            
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }

            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Profile
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
        <div className="container">

          {this.props.children}
        </div>
             

            

      </div>
    );
  }
}

export default App;
