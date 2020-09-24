import React from 'react';

const SearchArea = (props) => {
    return (
        <div>
            <form onSubmit={props.findResult}>
                <input className="text" type="text" placeholder="search here..." onChange={props.findingResult} />

                <select className="color-w text1" exact value={props.demand} onChange={(e) => { props.typeOfDemand(e.target.value) }}>
                    <option value="movie">Movies</option>
                    <option value="">All</option>
                    <option value="episode">Episode</option>
                    <option value="series">Series</option>
                </select>
            </form>
        </div>
    )
};
export default SearchArea;