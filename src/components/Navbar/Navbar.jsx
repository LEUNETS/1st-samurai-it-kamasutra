import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}> Profile </NavLink>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <NavLink to="/dialogs">Messages</NavLink>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <NavLink to="/friends">Friends</NavLink>
    </div>
    <div className={s.item}>
      <a>News</a>
    </div>
    <div className={s.item}>
      <a>Music</a>
    </div>
    <div className={s.item}>
      <a>Settings</a>
    </div>
    <div className={s.itemFriends}>
      <a>Friends</a>
    </div>
  </nav>

}

export default Navbar;