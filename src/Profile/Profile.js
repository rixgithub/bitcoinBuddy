import React, { Component } from 'react';
import { ControlLabel, Glyphicon } from 'react-bootstrap';
import './Profile.css';
import Info from '../Components/Info.js';
import Chart1 from '../Components/Chart1.js';
import Chart2 from '../Components/Chart2.js';
import { Button } from 'react-bootstrap';
import Request from 'superagent';
import PanelHeading from '../Components/Panelheading.js';


class Profile extends Component {
  //=============================================================== 
  constructor(){
    super();
    this.state={
      chartData1:{},
      chartData2:{},
    }
  }

  componentWillMount() {
    
    this.setState({ profile: {} });
    const { userProfile, getProfile }=this.props.auth;
      if (!userProfile) {
          getProfile((err, profile) => {
          this.setState({ profile });
        });
       } else {
          this.setState({ profile: userProfile });
      }
  }
  
  render() {
    const { profile }=this.state;
    return (
      <div className="container">

        <div className="profile-area">
          <h4>Welcome {profile.name}! <img className="img-profile" src={profile.picture} alt="profile" /></h4>

          <Info/>

          <Chart1 chartData1={this.state.chartData1} legendPosition="bottom"/>
          <Chart2 chartData2={this.state.chartData2} legendPosition="bottom"/>

          <a className="custom-style" target="_blank" href="https://www.coinbase.com"> 
              <Button bsStyle="primary" bsSize="large" className="btn-margin" block >
                   Buy or Sell from Coinbase website! 
              </Button>
          </a>
        </div>
      </div>
    );
  }
}

export default Profile;
