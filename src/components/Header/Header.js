import React from 'react';
import Logo from '../../assets/svg/conors-log-logo.svg';

const userList = [
  'Conor', 'Jamie', 'Kristian'
];

const header = (props) => {
  const list = userList.map(user => {
    return <li onClick={props.clickedUser} data-name={user}>{user}</li>
  });

  return (
    <header className="cp-header" >
      <div className="in">
        <div className="cp-header__logo">
          <img src={Logo} />
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