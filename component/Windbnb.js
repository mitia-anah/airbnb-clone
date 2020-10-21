import React, { useState } from 'react'
import WindbnbCard from './WindbnbCard'
import SearchForm from './SearchForm'
import stays from '../stays.json'

function Windbnb() {
    let staysData = stays;
    const [airbnb, setAirbnb] = useState([])
    const [filterCity, setFilterCity] = useState("")
    const [filterGuest, setFilterGuest] = useState("")

    const handleCities = (e) => {
        e.preventDefault();
        setFilterCity(e.target.value);
        const filteredCities = setAirbnb(staysData.filter(city => {
            return city.city.toLowerCase() === e.target.value.toLowerCase();
        }))
        return filteredCities
    }
    const handleNumberOfGuest = (e) => {
        e.preventDefault();
        setFilterGuest(e.target.value);
        const filteredGuest = setAirbnb(staysData.filter(guest => {
            return guest.maxGuests.toString() === e.target.value.toString();
        }))
        return filteredGuest
    }

    return (
        <>
            <div className='card--list'>
                <h1><a href="windbnb">Windbnb</a></h1>
                <h2>Stays in finland</h2>
                <SearchForm handleCities={handleCities} handleNumberOfGuest={handleNumberOfGuest} />

                <div className="airbnb-list">
                    {filterCity || filterGuest
                        ? airbnb.map(airbnb => <WindbnbCard airbnb={airbnb} key={airbnb.id} />)
                        : stays.map(airbnb =>
                            <WindbnbCard airbnb={airbnb} key={airbnb.id} />
                        )}
                </div>
                <footer>
                    <p>Your name @ DevChallenges.io</p>
                </footer>
            </div>
        </>
    )

}

export default Windbnb