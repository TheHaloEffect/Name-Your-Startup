import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import ResultsList from './components/ResultsList/ResultsList';
import SavedNames from './components/SavedNames/SavedNames';
import './App.css';

// Package for generating startup names
const name = require('@rstacruz/startup-name-generator');

const App = () => {
  const [generatedNames, setGeneratedNames] = useState([]);
  const [savedNames, setSavedNames] = useState(
    JSON.parse(localStorage.getItem('savedNames')) || []
  );
  const [headerExpanded, setHeaderExpanded] = useState(true);

  // If the search bar text changes, generate new names and contract the header
  const onSearchBarChange = (searchBarText) => {
    if (searchBarText) {
      setGeneratedNames(name(searchBarText));
      setHeaderExpanded(false);
    } else {
      setGeneratedNames([]);
      setHeaderExpanded(true);
    }
  };

  // When name result is clicked, add it to LocalStorage
  const onResultClick = (event) => {
    const clickedName = event.target.innerText;

    // If the name isn't already in the saved names, add it, otherwise remove it
    if (!savedNames.includes(clickedName)) {
      setSavedNames([...savedNames, clickedName]);
    } else {
      setSavedNames(savedNames.filter((name) => name !== clickedName));
    }
  };

  useEffect(() => {
    localStorage.setItem('savedNames', JSON.stringify(savedNames));
  }, [savedNames]);

  return (
    <div className='main-container'>
      <Header headerExpanded={headerExpanded} />
      {savedNames.length > 0 ? (
        <SavedNames savedNames={savedNames} onResultClick={onResultClick} />
      ) : (
        ''
      )}
      <SearchBar
        headerExpanded={headerExpanded}
        onSearchBarChange={onSearchBarChange}
      />
      <ResultsList
        generatedNames={generatedNames}
        onResultClick={onResultClick}
      />
    </div>
  );
};

export default App;
