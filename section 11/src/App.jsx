import { useRef, useState, useEffect } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js'


const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || []
const selectedObjects = storedIds.map(id =>
  AVAILABLE_PLACES.find(place => place.id === id)
)

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(selectedObjects);
  const [availablePlaces, setAvailablePlaces] = useState([])

  useEffect(() => {
    // This one right here its considered a side effect because its code that's note related wiht the app component 
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      )
      setAvailablePlaces(sortedPlaces)
    });
  }, [])

  function handleStartRemovePlace(id) {
    setIsModalOpen(true)
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setIsModalOpen(false)
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    // use the local storage to save data in the browser: 
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || []
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]))
    }

  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setIsModalOpen(false)

    // get the current elements
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces'))
    // remove the element
    const filterData = storedIds.filter(place => place !== selectedPlace.current)
    // save the data 
    localStorage.setItem('selectedPlaces', JSON.stringify(filterData))
  }



  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
