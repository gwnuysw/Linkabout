import React from 'react';
import { Route, Link } from 'react-router-dom';
import SigninedNavbar from './signinedNavbar';
import SignoutedNavbar from './signoutedNavbar';
import ColContainer from './colContainer';
import axios from 'axios';
export default class Root extends React.Component {
  state = {
    isSignin : false
  }
  componentDidMount() {
    console.log('this is information', this.props.setInform);
    axios.get('http://localhost:3000/auth/signcheck')
    .then(function(response){
      this.setState({...response.data});
    })
    .catch(function(reason){
      console.log(reason);
    });
  }
  render(){
    const isSignin = this.state.isSignin;
    console.log('this is server side information',this.props);
    let navBar;
    if (isSignin) {
      navBar = <SigninedNavbar userName={this.state.userName}/>;
    } else {
      navBar = <SignoutedNavbar />;
    }
    return(
      <div>
        {navBar}
        <Route path="/set/:categoryid" component={ColContainer} />
      </div>
    );
  }
}
