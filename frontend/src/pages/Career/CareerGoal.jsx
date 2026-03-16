import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import { careerOptions } from "../../data/careerOptions";

const CareerGoal = () => {
  const navigate = useNavigate();
  const [selectedCareer, setSelectedCareer] = useState(null);

  const handleContinue = () => {
    if (!selectedCareer) return;
    localStorage.setItem("Selected Career:", selectedCareer);
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Choose Your Career Goal</h2>
        <p className="mt-1 text-sm text-gray-500">
          Select a career path to generate your personalized roadmap.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {careerOptions.map((career) => (
          <div
            key={career.id}
            onClick={() => setSelectedCareer(career.title)}
            className={`cursor-pointer rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md ${
              selectedCareer === career.title
                ? "border-blue-600 ring-2 ring-blue-100"
                : "border-gray-200"
            }`}
          >
            <h3 className="text-lg font-semibold text-gray-800">{career.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{career.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {career.skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 max-w-xs">
        <Button onClick={handleContinue}>Continue</Button>
      </div>
    </div>
  );
};

export default CareerGoal;