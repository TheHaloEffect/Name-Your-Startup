import Result from '../Result/Result';
import './ResultsList.css';

const ResultsList = ({generatedNames, onResultClick}) => {

  return (
    <div className="results-list-div">
      {generatedNames.map((generatedName, index) => {
        return <Result key={index} generatedName={generatedName} onResultClick={onResultClick} />
      })}
    </div>
  );
};

export default ResultsList;