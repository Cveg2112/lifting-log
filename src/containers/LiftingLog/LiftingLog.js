import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// sun bg
import BGSun from '../../assets/svg/sun.svg';
// router
import { Route, Switch } from 'react-router-dom';
import User from '../User/User';

class LiftingLog extends Component {

  state = {
    currentUser: null,
    userMenu: false
  }

  updateUserHandler = ( user ) => {
    this.setState({ currentUser: user }); 
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

    return (
      <div>
        <div style={bgStyle}></div>
        <Header
          currentUser={this.state.currentUser}
          menuActive={this.state.userMenu}
          clickedMenu={this.menuActiveHandler}
          clickedUser={this.updateUserHandler} />
        <main>
          <Switch>
            <Route path="/" exact render={() => <h1>Home</h1>} />
            <Route path="/:uid" render={routeProps => (
              <User current={this.state.currentUser} pageLoad={this.updateUserHandler} {...routeProps} /> 
            )} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default LiftingLog;
