import React, { useState } from 'react'
import WindbnbCard from '../component/WindbnbCard'
import SearchForm from '../component/SearchForm'
import stays from '../stays.json'
import "modal.css"
import Modal from '../component/Modal'

function Windbnb() {
    let staysData = stays;
    const [airbnb, setAirbnb] = useState([])
    const [filterCity, setFilterCity] = useState("")
    const [filterGuest, setFilterGuest] = useState("")
    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);


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
                <SearchForm
                    openModal={openModal}
                    handleCities={handleCities}
                    handleNumberOfGuest={handleNumberOfGuest}
                />
                <Modal closeModal={closeModal} show={show} />

                <div className="airbnb-list">
                    {filterCity || filterGuest
                        ? airbnb.map(airbnb => <WindbnbCard airbnb={airbnb} key={airbnb.id} />)
                        : stays.map(airbnb =>
                            <WindbnbCard airbnb={airbnb} key={airbnb.id} paragraph="superHost" />
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