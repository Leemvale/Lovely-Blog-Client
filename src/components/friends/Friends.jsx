import React from 'react';
import { Link } from 'react-router-dom';
import './friends.scss'

const Friends = ({ friends }) => {
  const friendsElements = friends.map(friend => (
    <li key={ friend.id } className="friends_item">
      <Link to={`/profiles/${friend.id}`}>{friend.nickname}</Link>
    </li>
  ));
  return(
    <ul className="friends">
      { friendsElements }
    </ul>
  )
}

export default Friends;