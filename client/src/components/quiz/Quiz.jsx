


//  const questions = [
//     {   
//         // headerName
//         questionText: 'What is the capital of France?',
//         answerOptions: [
//             { answerText: 'New York', isCorrect: false },
//             { answerText: 'London', isCorrect: false },
//             { answerText: 'Paris', isCorrect: true },
//             { answerText: 'Dublin', isCorrect: false },
//         ],
//     },
//     {  
//         // headerName
//         // code
//         questionText: 'Who is CEO of Tesla?',
//         answerOptions: [
//             { answerText: 'Jeff Bezos', isCorrect: false },
//             { answerText: 'Elon Musk', isCorrect: true },
//             { answerText: 'Bill Gates', isCorrect: false },
//             { answerText: 'Tony Stark', isCorrect: false },
//         ],
//     },
    
// ];



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Quiz = () => {
    const { title } = useParams();
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isAnswering, setIsAnswering] = useState(false); 
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [endQuiz, setEndQuiz] = useState(false);
    const [quizData, setQuizData] = useState(null); // Initialize as null

    const handleAnswerOptionClick = (isCorrect, index) => {
        setIsAnswering(true);
        setSelectedAnswer({ isCorrect, index });
        if (isCorrect) {
            setScore(score + 1);
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < quizData.length) { // Correct variable reference
                setCurrentQuestion(nextQuestion);
            } else {
                setShowResult(true);
                setEndQuiz(true);
            }
            setIsAnswering(false);
            setSelectedAnswer(null);
        }, 1000); // 1000 milliseconds = 1 second
    };

    useEffect(() => {
        async function fetchQuizAns() {
          try {
            const response = await axios.get(
              `http://localhost:8000/api/v1/ReadQuizByHeader?header=${title}`
            );
            setQuizData(response.data.data); // Wrap data in an array
          } catch (error) {
            console.error(error);
          }
        }
        fetchQuizAns();
      }, []);

    if (!quizData) {
        return <div>Loading...</div>; // Display loading message while fetching data
    }

    return (
       <>

        {quizData.length>0?<div className="w-full min-h-screen flex justify-center bg-color mt-14">
            <div className="container-content flex flex-col gap-4 items-center">
                <h1 className="text-white pt-5 text-xl font-bold capitalize">{title} Contest</h1>
                <div className="w-full h-[5rem] md:w-[40rem] bg-slate-400 rounded-md flex justify-between px-[1rem]">
                    <div className="flex gap-2 items-center">
                        <span className="text-gray-800 font-bold">Total score:</span>
                        <span className="text-gray-800 font-bold">{score}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="text-gray-800 font-bold">Total Questions:</span>
                        <span className="text-gray-800 font-bold">{quizData.length}</span>
                    </div>
                </div>
                
                {!endQuiz && (
                    <div className="w-full md:w-[40rem] flex flex-col gap-3 items-center">
                        <h1 className="text-white">{quizData[currentQuestion].questionText}</h1>
                        <div className="w-full grid grid-cols-2 gap-7">
                            {quizData[currentQuestion].answerOptions.map((answerOption, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
                                    disabled={isAnswering}
                                    className="bg-slate-600 h-[2rem] text-white rounded-lg cursor-pointer"
                                    style={{
                                        backgroundColor: 
                                            selectedAnswer && selectedAnswer.index === index
                                                ? (answerOption.isCorrect ? 'green' : 'red')
                                                : ''
                                    }}
                                >
                                    {answerOption.answerText}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>:

        <div className='w-full min-h-screen flex justify-center bg-color mt-14'>
            <div className="container-content flex flex-col gap-4 items-center justify-center">
                <span className='text-white text-xl font-bold'>Please waiting up coming Contest!</span>
            </div>

        </div>
        
        
        }
       
       
       
       </>
    );
};

export default Quiz;
