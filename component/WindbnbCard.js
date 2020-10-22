import React from 'react';

function Windbnb({ airbnb }) {
    return (
        <div className='airbnb--content' key={airbnb.id}>
            <h3>{airbnb.title}</h3>
            <img
                src={airbnb.photo}
                alt={airbnb.title} />
            <div className="card-properties">
                <p className="superHost">{airbnb.superHost ? true : 'superHost'}</p>
                <p>{airbnb.type} {airbnb.beds ? `${airbnb.beds}beds` : ""}</p>
                <p className='rating'>{airbnb.rating}</p>
            </div>
        </div>

    )
}

export default Windbnb