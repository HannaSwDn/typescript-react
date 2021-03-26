import React from 'react';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
}

enum Direction {
  Up = 1,
  Down,
  Right,
  Left
}

console.log(Direction)

/*
  to specify to TypeScript that we are using a functional component, we use React.FC
  we specify the props inside of the angle brackets, <>
*/
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions
}) => (
  <div>
    <p className="number">
      Question: { questionNr } / { totalQuestions }
    </p>
    <p dangerouslySetInnerHTML = {{ __html: question }}></p>
    <div>
      {answers.map(answer => (
        <div>
          <button disabled={ userAnswer } onClick = { callback }>
            <span dangerouslySetInnerHTML = {{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
)

export default QuestionCard;