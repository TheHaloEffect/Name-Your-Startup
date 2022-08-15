import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import './App.css';

// Library for generating startup names
const name = require('@rstacruz/startup-name-generator');

const App = () => {
  // const [generatedNames, setGeneratedNames] = useState([]);

  const onSearchBarChange = (searchBarText) => {
    console.log(searchBarText);
  };

  return (
    <div>
      <Header />
      <SearchBar onSearchBarChange={onSearchBarChange} />
    </div>
  );
};

export default App;
