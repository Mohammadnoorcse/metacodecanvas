import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const { title } = useParams();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswering, setIsAnswering] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [endQuiz, setEndQuiz] = useState(false);
  const [quizData, setQuizData] = useState([]); // Initialize as an empty array

  const handleAnswerOptionClick = (isCorrect, index) => {
    setIsAnswering(true);
    setSelectedAnswer({ isCorrect, index });
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
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
          "http://localhost:8000/api/v1/ReadQuizByHeader?header=html"
        );
        setQuizData([response.data.data]); // Wrap data in an array
      } catch (error) {
        console.error(error);
      }
    }
    fetchQuizAns();
  }, []);

  if (quizData.length === 0) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  const currentQuiz = quizData[currentQuestion];

  if (!currentQuiz) {
    return <div>No data available</div>; // Handle case when there is no data
  }

  return (
    <div className="w-full min-h-screen flex justify-center bg-color mt-14">
      <div className="container-content flex flex-col gap-4 items-center">
        <h1 className="text-white pt-5 text-xl font-bold">{title} Contest</h1>
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

        <div className={endQuiz ? "hidden" : "w-full md:w-[40rem] flex flex-col gap-3 items-center"}>
          <h1 className="text-white">{quizData.questionText}</h1>
          <div className="w-full grid grid-cols-2 gap-7">
            {currentQuiz.answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
                disabled={isAnswering}
                className="bg-slate-600 h-[2rem] text-white rounded-lg cursor-pointer"
                style={{
                  backgroundColor:
                    selectedAnswer && selectedAnswer.index === index
                      ? answerOption.isCorrect
                        ? "green"
                        : "red"
                      : "",
                }}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
