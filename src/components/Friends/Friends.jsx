import React from 'react';
import s from './Profile.module.css';
import Navbar from '../Navbar/Navbar';


const Friends = (props) => {

  return (
    <div>
      <Friends friendsBlock={props.state.friendsBlock} />
    </div>
  )
}

export default Navbar;