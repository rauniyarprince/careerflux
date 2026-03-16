const Dashboard = () => {
  const selectedCareer = localStorage.getItem("selectedCareer");
  const profileData = JSON.parse(localStorage.getItem("profileData"));

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
          <p className="text-sm text-gray-500">Roadmap Progress</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">35%</h3>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Quiz Score</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">78%</h3>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Interview Readiness</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">Intermediate</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;