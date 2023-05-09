import {Outlet} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';

export const Layout = () => {
    return (
      <div>
        <header className={css.header}>
          <nav className={css.nav}>
            <NavLink className={css.navLink} to="/" >Home</NavLink>
            <NavLink className={css.navLink} to="/tweets">Tweets</NavLink>
            
          </nav>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      </div>
    );
  };