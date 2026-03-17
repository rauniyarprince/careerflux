import { Link } from "react-router-dom";

const QuizResult = () => {
  const result = JSON.parse(localStorage.getItem("quizResult"));

  if (!result) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800">Quiz Result</h2>
        <p className="mt-2 text-sm text-gray-500">
          No quiz result found. Please complete a quiz first.
        </p>
      </div>
    );
  }

  const getSuggestion = () => {
    if (result.scorePercentage >= 80) {
      return "Excellent performance. You are doing very well.";
    }
    if (result.scorePercentage >= 50) {
      return "Good progress. Revise a few topics and practice more.";
    }
    return "You need more practice. Focus on fundamentals and repeat the roadmap steps.";
  };

  return (
    <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">Quiz Result</h2>
      <p className="mt-1 text-sm text-gray-500">
        Here is your latest performance summary.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-gray-50 p-5">
          <p className="text-sm text-gray-500">Career</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">
            {result.selectedCareer}
          </h3>
        </div>

        <div className="rounded-2xl bg-gray-50 p-5">
          <p className="text-sm text-gray-500">Correct Answers</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">
            {result.correctAnswers} / {result.totalQuestions}
          </h3>
        </div>

        <div className="rounded-2xl bg-gray-50 p-5">
          <p className="text-sm text-gray-500">Score</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">
            {result.scorePercentage}%
          </h3>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="text-sm font-medium text-blue-700">Suggestion</p>
        <p className="mt-2 text-gray-700">{getSuggestion()}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/dashboard"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Go to Dashboard
        </Link>

        <Link
          to="/roadmap"
          className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
        >
          Back to Roadmap
        </Link>
      </div>
    </div>
  );
};

export default QuizResult;