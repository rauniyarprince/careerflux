import { roadmapData } from "../../data/roadmapData";

const Roadmap = () => {
  const selectedCareer = localStorage.getItem("selectedCareer");
  const steps = roadmapData[selectedCareer] || [];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800">Career Roadmap</h2>
      <p className="mt-1 text-sm text-gray-500">
        Your personalized roadmap for {selectedCareer || "your selected career"}.
      </p>

      <div className="mt-6 space-y-4">
        {steps.length > 0 ? (
          steps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-blue-600 font-semibold">
                Step {index + 1}
              </p>
              <h3 className="mt-1 text-lg font-medium text-gray-800">{step}</h3>
            </div>
          ))
        ) : (
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-gray-500">No roadmap found. Please select a career goal first.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Roadmap;