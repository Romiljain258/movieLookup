import React from 'react';

const Display = (props) => {
    return (
        <div className="outer">
            {props.movie.map((val, id) => (
                <div key={id} className="inner">
                    {val.Poster == 'N/A' ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image" style={{ width: 180, height: 280 }} /> : <img style={{ width: 180, height: 280 }} src={val.Poster}></img>}
                    <h5>{val.Title}</h5>
                    <h2 className="star" onClick={() => { props.FavArray(val) }}>☆</h2>
                </div>))}
        </div>
    )
}
export default Display;