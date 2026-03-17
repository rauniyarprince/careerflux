import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import { interviewQuestions } from "../../data/interviewQuestions";

const Interview = () => {
  const navigate = useNavigate();
  const selectedCareer = localStorage.getItem("selectedCareer");
  const questions = interviewQuestions[selectedCareer] || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [responses, setResponses] = useState([]);

  if (!selectedCareer) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800">Mock Interview</h2>
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
        <h2 className="text-2xl font-bold text-gray-800">Mock Interview</h2>
        <p className="mt-2 text-sm text-gray-500">
          No interview questions available for {selectedCareer}.
        </p>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    if (!answer.trim()) {
      alert("Please write your answer first.");
      return;
    }

    const updatedResponses = [
      ...responses,
      {
        questionId: currentQuestion.id,
        type: currentQuestion.type,
        question: currentQuestion.question,
        answer: answer.trim(),
      },
    ];

    if (currentIndex < questions.length - 1) {
      setResponses(updatedResponses);
      setCurrentIndex(currentIndex + 1);
      setAnswer("");
    } else {
      let score = 0;

      updatedResponses.forEach((item) => {
        const wordCount = item.answer.split(" ").filter(Boolean).length;

        if (wordCount >= 20) {
          score += 1;
        }
      });

      const scorePercentage = Math.round((score / questions.length) * 100);

      let level = "Beginner";
      if (scorePercentage >= 80) level = "Advanced";
      else if (scorePercentage >= 50) level = "Intermediate";

      const feedback = {
        selectedCareer,
        totalQuestions: questions.length,
        answeredQuestions: updatedResponses.length,
        scorePercentage,
        level,
        responses: updatedResponses,
      };

      localStorage.setItem("interviewResult", JSON.stringify(feedback));
      navigate("/interview-feedback");
    }
  };

  return (
    <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">AI Mock Interview</h2>
        <p className="mt-1 text-sm text-gray-500">
          Career: {selectedCareer}
        </p>
      </div>

      <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium text-blue-600">
            Question {currentIndex + 1} of {questions.length}
          </p>

          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
            {currentQuestion.type}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-gray-800">
          {currentQuestion.question}
        </h3>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Your Answer
        </label>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows="8"
          placeholder="Write your answer here..."
          className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="mt-6 max-w-xs">
        <Button onClick={handleNext}>
          {currentIndex === questions.length - 1
            ? "Finish Interview"
            : "Next Question"}
        </Button>
      </div>
    </div>
  );
};

export default Interview;