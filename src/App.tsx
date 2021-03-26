import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 12;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // starts trivia with an async function
  const startTrivia = async () => {

  }

  // checks answer when a mouse event on a button is taking place
  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {

  }

  // moves on to the next question of the quiz
  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>Quiz about everything</h1>

      <button className="start" onClick = { startTrivia }>Start</button>

      <p className="score">Score:</p>

      <p>Loading questions ...</p>

      <QuestionCard
        questionNr = { number + 1 }
        totalQuestions = { TOTAL_QUESTIONS }
        question = { questions[number].question }
        answers = { questions[number].answers }
        userAnswer = { userAnswers ? userAnswers[number] : undefined }
        callback = { checkAnswer }
      />

      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  )
}

export default App;
