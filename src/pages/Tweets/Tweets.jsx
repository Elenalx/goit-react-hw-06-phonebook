import { Link, useLocation } from 'react-router-dom';
import css from './Tweets.module.css';

const Tweets = () => {
  const location = useLocation();
  const backLinkLocation = location.state?.from ?? '/';
  return (
    <div className={css.tweetsPage}>
    
        <h2 className={css.title}> Wellcome to your selected users.</h2>
        <p className={css.text}>
          In future you will see more information about users.
        </p>
     
      <Link className={css.backBtn} to={backLinkLocation}>
        <button className={css.button} type="button">
          GO BACK
        </button>{' '}
      </Link>
    </div>
  );
};
export default Tweets;