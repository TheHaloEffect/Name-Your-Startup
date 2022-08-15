import './SearchBar.css';

const SearchBar = ({onSearchBarChange}) => {
  return (
  <div className="search-bar-div">
    <input onChange={(event) => onSearchBarChange(event.target.value)} type="text" placeholder="Enter word..."></input>
</div>
  );
}

export default SearchBar;