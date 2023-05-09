import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Tweets = lazy(() => import('pages/Tweets/Tweets'));
const Error = lazy(()=> import('./Error/Error'))

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/tweets" element={<Tweets/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
    </>
  )
};

