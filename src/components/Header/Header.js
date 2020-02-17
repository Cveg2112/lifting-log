import React from 'react';
import Logo from '../../assets/svg/conors-log-logo.svg';
import { Link } from 'react-router-dom';

const userList = [
  'Conor', 'Jamie', 'Kristian'
];

const header = (props) => {
  const list = userList.map(user => {
    let userLink = '/' + user.toLowerCase();
    return <li><Link onClick={props.clickedUser} data-name={user} to={userLink}>{user}</Link></li>
  });

  return (
    <header className="cp-header" >
      <div className="in">
        <div className="cp-header__logo">
          <Link to="/"><img src={Logo} /></Link>
        </div>
        <div className="cp-header__menu">
          <button
            onClick={props.clickedMenu}>
            { props.currentUser ? props.currentUser : 'Select a user' }
          </button>
          <ul className={props.menuActive ? 'is-active' : null}>
            {list}
          </ul>
        </div>
      </div>

    </header>
  );
}

export default header;
