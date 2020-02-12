import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

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
    return (
      <div>
        <Header 
          currentUser={this.state.currentUser} 
          menuActive={this.state.userMenu}
          clickedMenu={this.menuActiveHandler}
          clickedUser={this.updateUserHandler} />
        <main></main>
        <Footer />
      </div>
    )
  }
}

export default LiftingLog;