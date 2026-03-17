const Dashboard = () => {
  const selectedCareer = localStorage.getItem("selectedCareer");
  const profileData = JSON.parse(localStorage.getItem("profileData"));
  const quizResult = JSON.parse(localStorage.getItem("quizResult"));
  const interviewResult = JSON.parse(localStorage.getItem("interviewResult"));
  const resumeData = JSON.parse(localStorage.getItem("resumeData"));

  const isResumeReady =
    resumeData?.fullName &&
    resumeData?.email &&
    resumeData?.skills &&
    resumeData?.projects;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800">
        Welcome, {profileData?.fullName || "User"}
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        Here is your learning journey overview.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Selected Career</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">
            {selectedCareer || "Not selected"}
          </h3>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Quiz Score</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">
            {quizResult ? `${quizResult.scorePercentage}%` : "Not attempted"}
          </h3>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Interview Readiness</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">
            {interviewResult ? interviewResult.level : "Not attempted"}
          </h3>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Resume Status</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">
            {isResumeReady ? "Ready" : "Incomplete"}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;