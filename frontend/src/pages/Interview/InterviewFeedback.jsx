import { Link } from "react-router-dom";

const InterviewFeedback = () => {
  const result = JSON.parse(localStorage.getItem("interviewResult"));

  if (!result) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800">
          Interview Feedback
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          No interview result found. Please complete the mock interview first.
        </p>
      </div>
    );
  }

  const getStrengthMessage = () => {
    if (result.scorePercentage >= 80) {
      return "Your answers were detailed and showed strong confidence.";
    }
    if (result.scorePercentage >= 50) {
      return "You answered reasonably well but can improve depth and clarity.";
    }
    return "You need to improve your confidence and answer structure.";
  };

  const getImprovementMessage = () => {
    if (result.scorePercentage >= 80) {
      return "Keep practicing role-specific questions and refine communication further.";
    }
    if (result.scorePercentage >= 50) {
      return "Try to answer with more detail, examples, and better structure.";
    }
    return "Focus on fundamentals, communication, and answering in complete sentences.";
  };

  return (
    <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">Interview Feedback</h2>
      <p className="mt-1 text-sm text-gray-500">
        Here is your mock interview performance summary.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl bg-gray-50 p-5">
          <p className="text-sm text-gray-500">Career</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">
            {result.selectedCareer}
          </h3>
        </div>

        <div className="rounded-2xl bg-gray-50 p-5">
          <p className="text-sm text-gray-500">Questions Answered</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">
            {result.answeredQuestions} / {result.totalQuestions}
          </h3>
        </div>

        <div className="rounded-2xl bg-gray-50 p-5">
          <p className="text-sm text-gray-500">Score</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">
            {result.scorePercentage}%
          </h3>
        </div>

        <div className="rounded-2xl bg-gray-50 p-5">
          <p className="text-sm text-gray-500">Level</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">
            {result.level}
          </h3>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
          <p className="text-sm font-medium text-green-700">Strengths</p>
          <p className="mt-2 text-gray-700">{getStrengthMessage()}</p>
        </div>

        <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
          <p className="text-sm font-medium text-orange-700">
            Areas to Improve
          </p>
          <p className="mt-2 text-gray-700">{getImprovementMessage()}</p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="text-sm font-medium text-blue-700">Interview Tips</p>
        <ul className="mt-3 space-y-2 text-sm text-gray-700">
          <li>• Answer in a structured way: intro → explanation → example.</li>
          <li>• Keep technical answers clear and simple.</li>
          <li>• For HR questions, sound confident and honest.</li>
          <li>• Practice speaking about your projects and skills regularly.</li>
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/dashboard"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Go to Dashboard
        </Link>

        <Link
          to="/interview"
          className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
        >
          Retake Interview
        </Link>
      </div>
    </div>
  );
};

export default InterviewFeedback;