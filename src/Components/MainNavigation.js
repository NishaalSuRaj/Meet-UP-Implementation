import { useContext } from "react";


import { Link } from "react-router-dom";

import classes from "../Components/layout/MainNavigation.module.css";

import FavouriteContext from '../store/favoutite-context';

function MainNavigation() {
  
  const favouritesCtx = useContext(FavouriteContext);

  return (
    <header className={classes.header}>
      <div> React Meet ups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meet Ups</Link>
          </li>
          <li>
            <Link to="/newmeetups">New Meet Ups</Link>
          </li>
          <li>
            <Link to="/favourites">
            
            My Favourite
            <span className={classes.badge}>
              {favouritesCtx.totalFavourites}
            </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
