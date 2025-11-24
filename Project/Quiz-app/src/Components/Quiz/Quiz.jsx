import React, { useState , useRef} from 'react'
import './Quiz.css'
import { data } from '../../assets/data';
const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
// when we click corr/wrong ans its not locking ques with 1 optn it allowing to click multiple optn.
// to lock 1 corr/wrong optn we are using (lock state).. & wraping using if-condn below..
     let [lock, setLock] = useState(false);
      let[score, setScore] = useState(0);
      let [res, setResult] = useState(false);

// when we click wonrg optn d corr optn as to be highlighted for that we create 4 refernce var with hook(useRef)..
// putting it in "else-condtn" & linking it with <li> tag 
   let Option1 = useRef(null);
   let Option2 = useRef(null);
   let Option3 = useRef(null);
   let Option4 = useRef(null);   // storing this it into an 1 array

  let option_array = [Option1, Option2, Option3, Option4];


// for checking ans & clicking it
    const checkAns = (e, ans) => {
    if(lock === false) {
      if(question.ans===ans){
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev=> prev+1);
      }
      else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans-1].current.classList.add("correct");
      }
    }
  }

// adding functionality to NEXT & BACK btn
const next = () => {
  
      // only any 1 optn clicked means d NEXT btn will be able to click..
      if(lock===true) {
        if(index === data.length-1) {
          setResult(true);
          return 0;
        }
        setIndex(++index);
        setQuestion(data[index]);
        setLock(false);
        option_array.map((option) => {
          option.current.classList.remove("wrong");
          option.current.classList.remove("correct");
          return null;
        })
        
      }
}

const back = () => {
  if (index > 0) {
    const newIndex = index - 1;
    setIndex(newIndex);
    setQuestion(data[newIndex]);

    const prevAns = selectedAnswers[newIndex];

    // clear old classes
    option_array.forEach((opt) => {
      opt.current.classList.remove("correct");
      opt.current.classList.remove("wrong");
    });

    if (prevAns) {
      // restore previous selected option
      const correctAns = data[newIndex].ans;
      
      if (prevAns === correctAns) {
        option_array[prevAns - 1].current.classList.add("correct");
      } else {
        option_array[prevAns - 1].current.classList.add("wrong");
        option_array[correctAns - 1].current.classList.add("correct");
      }

      // lock question (cannot change answer)
      setLock(true);
    } else {
      // no answer previously - allow answering
      setLock(false);
    }
  }
};



const reset = () =>{
  setIndex(0);
  setQuestion(data[0]);
  setScore(0);
  setLock(false);
  setResult(false);
}

  return (
    <div className = "container">
         <h1>Quiz App</h1>
         <hr />
         {res?<></>:<>
         <h2>{index+1}. {question.question}</h2>
         <ul>
          <li ref={Option1} onClick={(e) => {checkAns(e, 1)}}>{question.option1}</li>
          <li ref={Option2} onClick={(e) => {checkAns(e, 2)}}>{question.option2}</li>
          <li ref={Option3} onClick={(e) => {checkAns(e, 3)}}>{question.option3}</li>
          <li ref={Option4} onClick={(e) => {checkAns(e, 4)}}>{question.option4}</li>
         </ul>
         <button onClick={next}>Next</button>
         <button onClick={back}>Back</button>
         <div className="index">{index+1} of {data.length}  questions</div>
         </>}
         {res? <>
         <h2>You Scored {score} out of {data.length}</h2>
         <button onClick={reset}>Reset</button> 
         </>:<></>}
    </div>
  )
}

export default Quiz
