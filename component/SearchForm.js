import React from 'react'

function SearchForm(props) {
    const { show, openModal, handleCities, handleNumberOfGuest } = props;

    return (
        <form className="form">
            <select className="City" onChange={handleCities}>
                <option value="Helsinki">Helsinki</option>
                <option value="Turku">Turku</option>
                <option value="Vaasa">Vaasa</option>
                <option value="Oulu">Oulu</option>
                <option value="Tananarive">Tananarive</option>
                <option value="Toamasina">Toamasina</option>
                <option value="Fianarantsoa">Fianarantsoa</option>
                <option value="Majunga">Majunga</option>
                <option value="Toliara">Toaliara</option>
                <option value="Antsiranana">Antsiranana</option>
            </select>
            <input className="input" name='search' type='number' placeholder="Add guests" onChange={handleNumberOfGuest}
            />
            {!show && <button onClick={openModal}>Show modal</button>}

        </form>
    )
}

export default SearchForm