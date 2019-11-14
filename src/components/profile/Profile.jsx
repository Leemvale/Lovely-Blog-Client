import React from 'react';
import Articles from '../articles/Articles';
import Friends from '../friends/Friends';
import './profile.scss'

const Profile = ({ user }) => {
  const userArticles = user.articles || [];
  const userFriends = user.friends || [];

  return(
    <div className="profile">
      <div className="row">
        <div className="profile__avatar col-4"></div>
        <div className="profile__name col-8">
          <h2>{ user.nickname }</h2>
        </div>
      </div>

      <div className="row">
        <div className="profile__friends col-3">
          <Friends friends={userFriends}></Friends>
        </div>
        <div className="profile__articles col-9">
          <Articles articles={ userArticles }/>
        </div>
      </div>
    </div>
  )
}

export default Profile;