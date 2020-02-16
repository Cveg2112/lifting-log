import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// sun bg
import BGSun from '../../assets/svg/sun.svg';
// router
import { Route } from 'react-router-dom';

class LiftingLog extends Component {

  state = {
    currentUser: null,
    userMenu: false
  }

  updateUserHandler = ( user ) => {
    let theUser = user.target.getAttribute('data-name');
    this.setState({ currentUser: theUser });
  }

  menuActiveHandler = () => {
    let current = this.state.userMenu;
    this.setState({ userMenu: !current });
  }

  render(){
    const bgStyle = {
      backgroundSize: '60%',
      backgroundPosition: 'center center',
      backgroundImage: 'url(' + BGSun + ')',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
      position: 'fixed',
    };

    let currentUserUrl = '/' + this.state.currentUser;

    return (
      <div>
        <div style={bgStyle}></div>
        <Header 
          currentUser={this.state.currentUser} 
          menuActive={this.state.userMenu}
          clickedMenu={this.menuActiveHandler}
          clickedUser={this.updateUserHandler} />
        <main>
          <Route path="/" exact render={ () => <h2>Home</h2> } />
          <Route path="" render={ () => <h2>{this.state.currentUser}</h2>} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default LiftingLog;