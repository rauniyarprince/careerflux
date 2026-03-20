import { useState } from "react";
import { roadmapData } from "../../data/roadmapData";

const Roadmap = () => {
  const selectedCareer = localStorage.getItem("selectedCareer");
  const steps = roadmapData[selectedCareer] || [];

  const savedProgress = JSON.parse(localStorage.getItem("roadmapProgress")) || {};
  const initialCareerProgress = savedProgress[selectedCareer] || [];

  const [careerProgress, setCareerProgress] = useState(initialCareerProgress);

  const handleToggleStep = (index) => {
    const updatedProgress = JSON.parse(localStorage.getItem("roadmapProgress")) || {};
    let updatedCareerProgress = updatedProgress[selectedCareer] || [];

    if (updatedCareerProgress.includes(index)) {
      updatedCareerProgress = updatedCareerProgress.filter((item) => item !== index);
    } else {
      updatedCareerProgress = [...updatedCareerProgress, index];
    }

    updatedProgress[selectedCareer] = updatedCareerProgress;
    localStorage.setItem("roadmapProgress", JSON.stringify(updatedProgress));
    setCareerProgress(updatedCareerProgress);
  };

  const completedCount = careerProgress.length;
  const totalSteps = steps.length;
  const progressPercentage =
    totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800">Career Roadmap</h2>
        <p className="mt-1 text-sm text-gray-500">
          Your personalized roadmap for {selectedCareer || "your selected career"}.
        </p>

        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600">Progress</p>
            <p className="text-sm font-semibold text-blue-600">
              {progressPercentage}%
            </p>
          </div>

          <div className="h-3 w-full rounded-full bg-gray-200">
            <div
              className="h-3 rounded-full bg-blue-600 transition-all"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <p className="mt-2 text-sm text-gray-500">
            {completedCount} of {totalSteps} steps completed
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {steps.length > 0 ? (
          steps.map((step, index) => {
            const isCompleted = careerProgress.includes(index);

            return (
              <div
                key={index}
                className={`rounded-2xl border bg-white p-5 shadow-sm ${
                  isCompleted ? "border-green-300 bg-green-50" : "border-gray-200"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-blue-600">
                      Step {index + 1}
                    </p>
                    <h3
                      className={`mt-1 text-lg font-medium ${
                        isCompleted ? "text-green-700" : "text-gray-800"
                      }`}
                    >
                      {step}
                    </h3>
                  </div>

                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <input
                      type="checkbox"
                      checked={isCompleted}
                      onChange={() => handleToggleStep(index)}
                      className="h-4 w-4"
                    />
                    Complete
                  </label>
                </div>
              </div>
            );
          })
        ) : (
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-gray-500">
              No roadmap found. Please select a career goal first.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Roadmap;