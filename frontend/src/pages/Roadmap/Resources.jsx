import { Link } from "react-router-dom";
import { resourcesData } from "../../data/resourcesData";

const Resources = () => {
  const selectedCareer = localStorage.getItem("selectedCareer");
  const resources = resourcesData[selectedCareer] || [];

  if (!selectedCareer) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800">Learning Resources</h2>
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

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Learning Resources</h2>
        <p className="mt-1 text-sm text-gray-500">
          Curated resources for {selectedCareer}.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {resources.length > 0 ? (
          resources.map((resource) => (
            <div
              key={resource.id}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {resource.level}
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  {resource.type}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {resource.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {resource.description}
              </p>

              <a
                href={resource.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
              >
                Open Resource
              </a>
            </div>
          ))
        ) : (
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-gray-500">
              No resources available for your selected career.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;