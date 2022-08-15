import Result from '../Result/Result';
import './ResultsList.css';

const ResultsList = ({generatedNames}) => {
  return (
    <div className="results-list-div">
      {generatedNames.map((generatedName, index) => {
        return <Result key={index} generatedName={generatedName} />
      })}
    </div>
  );
};

export default ResultsList;