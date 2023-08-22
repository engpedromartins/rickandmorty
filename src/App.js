import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { Cards } from "./components/cards";

// Create a new React application
// Fetch data from this URL: https://rickandmortyapi.com/api/character
// On the App.js file, render all users' name, status, species and image as separate Card components
// Style the cards with margin, padding and borders to look like a profile card
// Add an event to each card where, when clicked, toggles a blue background color and white font color

function App() {
  const [results, setResults] = useState([]);
  const [idSelected, setIdSelected] = useState(null);
  const getCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setResults(data.results))
      .catch((e) => {
        console.log("errors", e);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <h1 className="title">Rick and Morty Characters</h1>
      <div className="container">
        {results?.map((characters) => {
          return (
            <Cards
              characters={characters}
              idSelected={idSelected}
              setIdSelected={setIdSelected}
              key={characters.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
