import React, { useState, useEffect } from 'react';
import SearchArea from './SearchArea';
import Fav from './Fav';
import Display from './Display';
import axios from 'axios';

const Movie = () => {
    let [movie, setMovie] = useState([]);
    let [fav, setFav] = useState([]);
    let [search, setSearch] = useState('');
    let [demand, setDemand] = useState('');
    let [first, setFirst] = useState(true);
    let [redirectFav, setRedirectFav] = useState(false);
    const findResult = (e) => {
        e.preventDefault();
        setFirst(false);
        axios.get(`https://www.omdbapi.com/?apikey=ffaca4de&type=${demand}&s=${search}`)
            .then(json => {
                if (json.data.Search == undefined) {
                    setMovie([])
                }
                else {
                    setMovie([...json.data.Search])
                }
            })
            .catch(err => err);
    };
    const favPageRedirect = () => {
        setRedirectFav(true);
        setMovie([]);
    }
    const FavArray = (e) => {
        setFav((val) => [...val, e]);
    }

    const removeFavArray = (e) => {
       if(fav.includes(e)){
           let i=fav.indexOf(e);
           fav.splice(i,1);
           let f=fav;
           setSearch('');
       }
    };

    const typeOfDemand = (e) => {
        setDemand(e);
    };

    const findingResult = (e) => {
        setRedirectFav(false);
        setSearch(e.target.value);
    };
    window.onbeforeunload = function() {
        return "Refresh will remove all your favourite!";
     };
    return (
        <>
            <h1 className="color-w">Movie Screen Mock-up</h1>
            <SearchArea findResult={findResult} findingResult={findingResult} demand={demand} typeOfDemand={typeOfDemand} />
            <button onClick={favPageRedirect} className="fav-btn">favourite</button>
            {(movie.length < 1 && first != true && redirectFav == false) ? <h1 style={{ color: 'white' }}>No result found..</h1> : <Display FavArray={FavArray} movie={movie} />}
            {redirectFav == true ? <Fav fav={fav} removeFavArray={removeFavArray} /> : null}
        </>
    )
}
export default Movie;