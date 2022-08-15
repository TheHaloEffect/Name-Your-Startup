import './Result.css';

const Result = ({generatedName}) => {
  return (
    <div className="result-card">
        <h1>{generatedName}</h1>
    </div>
  );
};

export default Result;