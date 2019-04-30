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
  loginRequest = () => {
    axios.get('http://localhost:3000/auth/google')
    .then(function(response){
      console.log('I wanna log in!! from root',response);
    })
  }

  componentDidMount() {
    console.log('this is componentDidMount');
    axios.all([
      axios.get('http://localhost:3000/auth/signcheck'),
      axios.get('http://localhost:3000/set/data/'+this.props.match.params.categoryid)
    ])
    .then(axios.spread((loged, set)=>{
      console.log('this is set data from', set.data);
      this.setState({ set : set.data});
    }));
  }
  render(){
    const isSignin = this.state.isSignin;
    console.log('this is render');
    console.log('this is server side information from root',this.props);
    let navBar;
    if (isSignin) {
      navBar = <SigninedNavbar userName={this.state.userName}/>;
    } else {
      navBar = <SignoutedNavbar loginRequest={this.loginRequest}/>;
    }
    return(
      <div>
        {navBar}
        <ColContainer informOfSet={this.state.set}/>
      </div>
    );
  }
}
