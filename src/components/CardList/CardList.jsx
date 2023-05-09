import { CardTweets } from 'components/Card/CardTweets';
import css from './CardList.module.css';

export const CardList = ({ user }) => {
  // console.log(user)
  return (
    <ul  className={css.listBox}>
      {user.map(user => (
        <CardTweets user={user}
       />
      ))}
    </ul>
  );
};