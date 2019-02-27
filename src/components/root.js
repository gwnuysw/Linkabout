import React from 'react';
import SigninedNavbar from './signinedNavbar';
import SignoutedNavbar from './signoutedNavbar';
import ColContainer from './colContainer';

export default class Root extends React.Component {
  state = {
    isSignin : false
  }
  componentDidMount() {
    console.log('this is information', this.props.setInform);
    fetch('http://localhost/auth/signcheck')
      .then(response => response.json())
      .then((data) => {
        this.setState({...data});
      });
  }
  render(){
    const isSignin = this.state.isSignin;

    let navBar;
    if (isSignin) {
      navBar = <SigninedNavbar userName={this.state.userName}/>;
    } else {
      navBar = <SignoutedNavbar />;
    }
    return(
      <div>
        {navBar}
        <ColContainer />
      </div>
    );
  }
}
