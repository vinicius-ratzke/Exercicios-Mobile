import React, { useState } from 'react';
import './App.css';


const candidates = [
  { name: 'Lucius R.', votes: 0 },
  { name: 'Jefferson P.', votes: 0 },
  { name: 'Weldon H.', votes: 0 },
];

const Candidate = ({ name, votes, handleVote }) => {
  return (
    <li key={name}>
      <div className="candidate-info">
        <span className="candidate-name">{name} : </span>
        <span className="candidate-votes">{votes}</span>
      </div>
      <button onClick={() => handleVote(name)}>Votar</button>
    </li>
  );
};

function App() {
  const [candidateList, setCandidateList] = useState(candidates);
  const [finished, setFinished] = useState(false);

  const handleVote = (name) => {
    if (!finished) {
      setCandidateList((prevCandidateList) => {
        return prevCandidateList.map((candidate) => {
          if (candidate.name === name) {
            return { ...candidate, votes: candidate.votes + 1 };
          }
          return candidate;
        });
      });
    }
  };

  const handleFinish = () => {
    setFinished(true);
  };

  const winner = candidateList.reduce((prev, current) =>
    prev.votes > current.votes ? prev : current
  );

  return (
    <div className="App">
      <h1 className="title-border">Votação de 2077 para Presidente de Night City </h1>
      <ul>
        {candidateList.map((candidate) => (
          <React.Fragment key={candidate.name}>
            <Candidate
              name={candidate.name}
              votes={candidate.votes}
              handleVote={handleVote}
            />
            <div className="candidate-space"></div>
          </React.Fragment>
        ))}
      </ul>
      {!finished && (
        <button onClick={handleFinish}>Finalizar contagem</button>
      )}
      {finished && (
        <div>
          <h2 className="title-border">Sistema de Votação</h2>
          <ul>
            {candidateList.map((candidate) => (
              <li key={candidate.name}>
                {candidate.name}: {candidate.votes} votos
              </li>
            ))}
          </ul>
          <h2 className="title-border">O vencedor é: {winner.name}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
