import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import ResultsList from './components/ResultsList/ResultsList';
import './App.css';

// Library for generating startup names
const name = require('@rstacruz/startup-name-generator');

const App = () => {
  const [generatedNames, setGeneratedNames] = useState([]);

  const onSearchBarChange = (searchBarText) => {
    if (searchBarText) {
      setGeneratedNames(name(searchBarText));
    } else {
      setGeneratedNames([]);
    }
  };

  return (
    <div>
      <Header />
      <SearchBar onSearchBarChange={onSearchBarChange} />
      <ResultsList generatedNames={generatedNames} />
    </div>
  );
};

export default App;
