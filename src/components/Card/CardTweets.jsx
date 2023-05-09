import Logo from 'image/goit_logo.png'
import mainPicture from 'image/cardImg.png';
import Line from 'image/centerLine.png';
import { useState } from 'react';
import { useLocaleStorage } from 'components/Hooks/localeStorage';
import css from './CardTweets.module.css';

import axios from 'axios';

export const CardTweets = ({ user }) => {
  const { id, tweets, followers, avatar } = user;
  //  const [isFollowing, setIsFollowing] = useState(false);

  const [isFollowing, setIsFollowing] = useLocaleStorage(
    `following${id}`,
    false
  );
  const [follower, setFollower] = useState(followers);

  const hendleOnFollowing = async () => {
    const followingUser = isFollowing ? follower - 1 : follower + 1;
    try {
      await axios.put(
        `https://64411770792fe886a89e1645.mockapi.io/user/${id}`,
        { followers: followingUser }
      );

      setFollower(followingUser);
      setIsFollowing(true);
    } catch (error) {
      console.log(error);
    }
  };

 
  return (
    <li key={id} className={css.box}>
      <a href="./">
        <img
          className={css.logo}
          src={Logo}
          alt="logo"
          width="76"
          height="22"
        />
      </a>
      <img className={css.picture} src={mainPicture} alt="mainPicture" />

      <img src={Line} alt="line" />
      <div className={css.avatarBox}>
        <img className={css.image} src={avatar} alt="userPhoto" />
      </div>
      <div className={css.userInfo}>
        <p className={css.text}>{tweets} TWEETS</p>
        <p className={css.text}>{follower.toLocaleString('en-US')} FOLLOWERS</p>
        {isFollowing ? (
          <button
            className={css.buttonFollowing}
            type="button"
            onClick={hendleOnFollowing}
          >
            FOLLOWING
          </button>
        ) : (
          <button
            className={css.button}
            type="button"
            onClick={hendleOnFollowing}
          >
            FOLLOW
          </button>
        )}
      </div>
    </li>
  );
};