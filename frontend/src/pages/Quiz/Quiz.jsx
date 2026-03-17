import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import { quizData } from "../../data/quizData";

const Quiz = () => {
  const navigate = useNavigate();
  const selectedCareer = localStorage.getItem("selectedCareer");
  const questions = quizData[selectedCareer] || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setAnswers] = useState([]);

  if (!selectedCareer) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800">Quiz</h2>
        <p className="mt-2 text-sm text-gray-500">
          Please select a career goal first.
        </p>

        <div className="mt-4">
          <Link
            to="/career-goal"
            className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Go to Career Goal
          </Link>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800">Quiz</h2>
        <p className="mt-2 text-sm text-gray-500">
          No quiz available for {selectedCareer}.
        </p>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    if (!selectedOption) {
      alert("Please select an option first.");
      return;
    }

    const updatedAnswers = [
      ...answers,
      {
        questionId: currentQuestion.id,
        selected: selectedOption,
        correct: currentQuestion.answer,
      },
    ];

    if (currentIndex < questions.length - 1) {
      setAnswers(updatedAnswers);
      setCurrentIndex(currentIndex + 1);
      setSelectedOption("");
    } else {
      let score = 0;

      updatedAnswers.forEach((item) => {
        if (item.selected === item.correct) {
          score += 1;
        }
      });

      const result = {
        selectedCareer,
        totalQuestions: questions.length,
        correctAnswers: score,
        scorePercentage: Math.round((score / questions.length) * 100),
      };

      localStorage.setItem("quizResult", JSON.stringify(result));
      navigate("/quiz-result");
    }
  };

  return (
    <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Quiz</h2>
        <p className="mt-1 text-sm text-gray-500">Career: {selectedCareer}</p>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-blue-600">
          Question {currentIndex + 1} of {questions.length}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-gray-800">
          {currentQuestion.question}
        </h3>
      </div>

      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => (
          <label
            key={index}
            className={`block cursor-pointer rounded-xl border p-4 transition ${
              selectedOption === option
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 bg-white hover:bg-gray-50"
            }`}
          >
            <input
              type="radio"
              name="quiz-option"
              value={option}
              checked={selectedOption === option}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="mr-3"
            />
            {option}
          </label>
        ))}
      </div>

      <div className="mt-6 max-w-xs">
        <Button onClick={handleNext}>
          {currentIndex === questions.length - 1 ? "Submit Quiz" : "Next Question"}
        </Button>
      </div>
    </div>
  );
};

export default Quiz;