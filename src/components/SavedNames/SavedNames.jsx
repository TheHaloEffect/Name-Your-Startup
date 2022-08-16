import './SavedNames.css';
import Result from '../Result/Result';

const SavedNames = ({savedNames, onResultClick}) => {
  return (
  <>
    <h1 className='saved-names-header'>Saved Names</h1>
    <div className='saved-names-div'>
      {savedNames.map((generatedName, index) => {
        return <Result key={index} generatedName={generatedName} onResultClick={onResultClick} />
      })}
    </div>
  </>
  ); 
}

export default SavedNames;