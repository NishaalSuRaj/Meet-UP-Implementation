import {useContext} from 'react';
import FavouritesContext from '../store/favoutite-context';
import MeetupList from '../Components/meetups/MeetupList';




function Favourites()
{
    const favouritesCtx = useContext(FavouritesContext);

    let content;

    if (favouritesCtx.totalFavourites === 0 ) {
        content = <p>You got no Favourites </p>
    }
    else{
        content = <MeetupList meetups = {favouritesCtx.Favourites} />
    }
    return (<section>
        <h1> My Favourites</h1>
        {content}
    </section>);
}

export default Favourites;