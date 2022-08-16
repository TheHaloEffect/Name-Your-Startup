import './Result.css';

const Result = ({generatedName, onResultClick}) => {

  return (
    <div className="result-card" onClick={onResultClick}>
        <h1>{generatedName}</h1>
    </div>
  );
};

export default Result;