import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import ResultsList from './components/ResultsList/ResultsList';
import './App.css';

// Package for generating startup names
const name = require('@rstacruz/startup-name-generator');

const App = () => {
  const [generatedNames, setGeneratedNames] = useState([]);
  const [headerExpanded, setHeaderExpanded] = useState(true);

  const onSearchBarChange = (searchBarText) => {
    if (searchBarText) {
      setGeneratedNames(name(searchBarText));
      setHeaderExpanded(false);
    } else {
      setGeneratedNames([]);
      setHeaderExpanded(true);
    }
  };

  return (
    <div>
      <Header headerExpanded={headerExpanded} />
      <SearchBar onSearchBarChange={onSearchBarChange} />
      <ResultsList generatedNames={generatedNames} />
    </div>
  );
};

export default App;
