import React, { useState, useEffect } from 'react'
import WindbnbCard from './WindbnbCard'
import stays from '../stays.json'

function Windbnb() {
    const [airbnb, setAirbnb] = useState([])

    function getWindbnb() {
        const data = { stays };
        setAirbnb(data.results)
    }

    useEffect(() => {
        getWindbnb();
    }, [])

    return (
        <>
            <div className='card--list'>
                <h1><a href="windbnb">Windbnb</a></h1>
                <h2>Stays in finland</h2>

                <form className="form" onSubmit={getWindbnb}>
                    <label className='label' htmlFor="query">Helsinki,Finland</label>
                    <input className="input" name='search' type='text' placeholder="Add guests"
                        value={airbnb} onChange={(e) => setAirbnb(e.target.value)}
                    />
                    <button type="submit" className="button"></button>
                </form>
                <div className="airbnb-list">
                    {stays.map(airbnb =>
                        <WindbnbCard airbnb={airbnb} key={airbnb.id} />
                    )}
                </div>
            </div>
        </>
    )

}

export default Windbnb