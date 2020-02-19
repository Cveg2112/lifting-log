import React, { Component } from 'react';
import Logo from '../../assets/svg/conors-log-logo.svg';
import { Link } from 'react-router-dom';

class Header extends Component {

  state = {
    userMenu: false
  }

  menuActiveHandler = () => {
    let current = this.state.userMenu;
    this.setState({ userMenu: !current });
  }

  render(){
    let allUsers = null;
    let list = null;
    if( this.props.userList != null ){
      allUsers = this.props.userList;
      list = Object.keys(allUsers).map((user, i) => {
        console.log(allUsers[user]['name'])
        let userLink = '/user/' + allUsers[user]['slug'];
        return <li key={i} onClick={this.menuActiveHandler}><Link onClick={() => this.props.clickedUser(allUsers[user]['slug'])} to={userLink}>{allUsers[user]['slug']}</Link></li>
      });
    }

    return ( 
      <header className="cp-header">
        <div className="in">
          <div className="cp-header__logo">
            <Link to="/"><img src={Logo} alt="Adding this so that the warnings will fuck off"/></Link>
          </div>
          <div className="cp-header__menu">
            <button onClick={this.menuActiveHandler}>{ this.props.currentUser ? this.props.currentUser : 'Select a user' }</button>
            <ul className={this.state.userMenu ? 'is-active' : null}>
              {list}
            </ul>
          </div>
        </div>
      </header>
    );
  }
  
}

export default Header;
