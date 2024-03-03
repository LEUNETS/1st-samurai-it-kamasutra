import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Q19j6yLIYffL13nCBUhhQavQRM1uB3cj2NouvtP5kQ&s' />
      {props.message}
      <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;