import { createContext ,useState } from 'react';
import Favourites from '../Pages/Favourites';

const FavouritesContext = createContext(
    {
        Favourites : [],
        totalFavourites : 0,
        addFavourite : (FavouriteMeetup) =>{},
        removeFavourite : (meetupId) =>{},
        itemIsFavourite : (meetupId) =>{}
    }
);

export function FavouritesContextProvider(props){
    const [userFavourites, setUserFavourites] = useState([]);

    function addFavouriteHandler(FavouriteMeetup){
        setUserFavourites((prevUserFavourite) => {
            return prevUserFavourite.concat(FavouriteMeetup);
        });
    }

    function removeFavouriteHandler(meetupId){
        setUserFavourites((prevUserFavourite) => {
            return prevUserFavourite.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavouriteHandler(meetupId){
        return userFavourites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        Favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler
    } ;
    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}


export default FavouritesContext;