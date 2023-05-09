import { CardList } from 'components/CardList/CardList';
import { Loader } from 'components/Loader/Loader';
import { LoadMoreButton } from 'components/LoadMoreBtn/LoadMoreBtn';
import { useState, useEffect } from 'react';
import { getUsers } from 'components/services/fetch';


const Home = () => {
   const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState('');

  useEffect(() => {
    const getAllUsers = async () => {
      setIsLoading(true);
      try {
        const res = await getUsers(page);
        setUser(res)
        // setUser(prevUser => [...prevUser, ...res]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
     getAllUsers(page);
  }, [page]);

  const onLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
    // setIsLoading(true);
  };

  return (
    <div>
      {user.length > 0 && <CardList user={user} />}
      {isLoading && <Loader />}
      {user.length < 18 && <LoadMoreButton onClick={onLoadMoreClick} />}
    </div>
  );
};
export default Home;

 
  