import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../../components/Footer/Footer';
// sun bg
import BGSun from '../../assets/svg/sun.svg';
// router
import { Route, Switch, Redirect } from 'react-router-dom';
import User from '../User/User';
// axios
import axios from '../../axios.js';

class LiftingLog extends Component {

  state = {
    userlist: null,
    currentUser: null,
  }

  componentDidMount(){
    axios.get('wp/v2/users')
      .then( response => {
        let data = response.data;
        this.setState({
          userList: data
        })
      });
  }

  updateUserHandler = ( user ) => {
    this.setState({ currentUser: user }); 
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
          userList={this.state.userList}
          clickedUser={this.updateUserHandler} />
        <main>
          <Switch>
            <Redirect exact from="/user/" to="/" />
            <Route path="/" exact render={() => <h1>Home</h1>} />
            <Route path="/user/:uid" render={routeProps => (
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
