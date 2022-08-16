import './SearchBar.css';

const SearchBar = ({headerExpanded, onSearchBarChange}) => {

  const handleSearchBarChange = (event) => {
    onSearchBarChange(event.target.value);
  }

  return (
  <div className="search-bar-div">
    <input onChange={handleSearchBarChange} type="text" placeholder="Enter word..."></input>
    <br />
    {!headerExpanded ? <p>Click on name to save</p> : null}
</div>
  );
}

export default SearchBar;