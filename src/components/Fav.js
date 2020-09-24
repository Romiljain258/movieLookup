import React from 'react';

const Fav=(props)=>{
    console.log(props);
    if(props.fav.length==0){
        return <h1 className="color-w">No favourite item selected</h1>
    }
    else{
   return(
   <>
      <div className="outer">
            {props.fav.map((val, id) => (
                <div key={id} className="inner">
                    {val.Poster == 'N/A' ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image" style={{ width: 180, height: 280 }} /> : <img style={{ width: 180, height: 280 }} src={val.Poster}></img>}
                    <h5>{val.Title}</h5>
                    <h2 onClick={() => { props.removeFavArray(val) }}>⭐</h2>
                </div>))}
        </div>
   </>)
}
}
export default Fav;