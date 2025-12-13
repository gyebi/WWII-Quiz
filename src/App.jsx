
import { useState } from 'react'
import './App.css';

const quizData = [
  {
    question: "In which year did World War II begin?",
    options: ["1935", "1937", "1939", "1941"],
    answer: 2
  },
  {
    question: "Which event is widely considered to have started World War II?",
    options: [
      "Attack on Pearl Harbor",
      "German invasion of Poland",
      "Battle of Britain",
      "Invasion of France"
    ],
    answer: 1
  },
  {
    question: "Who was the leader of Nazi Germany during World War II?",
    options: [
      "Joseph Stalin",
      "Winston Churchill",
      "Adolf Hitler",
      "Benito Mussolini"
    ],
    answer: 2
  },
  {
    question: "Which country was NOT part of the Axis Powers?",
    options: ["Germany", "Italy", "Japan", "Soviet Union"],
    answer: 3
  },
  {
    question: "What was the name of the genocide carried out by Nazi Germany?",
    options: [
      "The Final Solution",
      "The Cold War",
      "The Great Purge",
      "Operation Barbarossa"
    ],
    answer: 0
  },
  {
    question: "Which battle is considered the turning point on the Eastern Front?",
    options: [
      "Battle of Normandy",
      "Battle of Stalingrad",
      "Battle of Dunkirk",
      "Battle of the Bulge"
    ],
    answer: 1
  },
  {
    question: "Which country did the United States fight after the attack on Pearl Harbor?",
    options: ["Germany", "Italy", "Japan", "Soviet Union"],
    answer: 2
  },
  {
    question: "What was the Allied invasion of Nazi-occupied Europe in 1944 called?",
    options: [
      "Operation Barbarossa",
      "Operation Market Garden",
      "Operation Overlord",
      "Operation Torch"
    ],
    answer: 2
  },
  {
    question: "Which two cities were atomic bombs dropped on in 1945?",
    options: [
      "Tokyo and Kyoto",
      "Osaka and Nagasaki",
      "Hiroshima and Nagasaki",
      "Hiroshima and Tokyo"
    ],
    answer: 2
  },
  {
    question: "In which year did World War II officially end?",
    options: ["1944", "1945", "1946", "1947"],
    answer: 1
  }
];


function App() {

  const [screen, setScreen] = useState('start');
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);


  if (screen === 'start'){
   return (
      <div  className= 'app'>
        <h1>React Quiz</h1>
        <p> Let's see how best you know your World War II History</p>
        <button onClick = {()=> setScreen('question')}> 

          Start Quiz 
        </button>
      </div>
   );

}

 if(screen === 'question'){
    
    const current = quizData[index]; 

    return (
      <div className = 'app'>
        <h1> React History Quiz</h1>
        <h2> Question {index + 1} of {quizData.length}</h2>

        <h3> {current.question}</h3>

        <div className= 'options'>
          {current.options.map((opt, i) => (
            <button key={i} className={selected===i ? 'selected' : ''} onClick = {() => setSelected(i)}> 
            {opt}
            </button>
          ))}
        </div>

        <button disabled = {selected === null} onClick = {()=> {
          if (selected === current.answer){

            setScore(score + 1)
          }

          setSelected(null);

          if(index + 1 < quizData.length ) {

            setIndex (index + 1)

          } else {

            setScreen('end');

          }
        }}>

          Next Question

        </button>
      </div>
    )
  }


if(screen === 'end'){
  return(
    <div className = 'app'>
      <h1> Quiz Finished ! </h1>

      <h2> Yor Score : { score} / {quizData.length}</h2>

      <p> 
        {score === quizData.length
        ? 'Perfect you know you WW2 history'
        : score >= Math.ceil(quizData.length / 2 )
        ? 'Nice Job , You are on Fire'
        : 'No worries this is how you learn'}
      </p>

      <button onClick = {() => {
          setIndex(0);
          setScore(0);
          setSelected(null);
          setScreen('start');
      }}>

          Restart Quiz

        </button>
    </div>
  )

  
}

return null


}

export default App;