import { useMemo } from "react";

const ATSChecker = () => {
  const resumeData = JSON.parse(localStorage.getItem("resumeData")) || {};

  const result = useMemo(() => {
    let score = 0;
    const suggestions = [];
    const strengths = [];

    if (resumeData.fullName?.trim()) {
      score += 10;
      strengths.push("Full name is present.");
    } else {
      suggestions.push("Add your full name.");
    }

    if (resumeData.email?.trim()) {
      score += 10;
      strengths.push("Email is included.");
    } else {
      suggestions.push("Add a professional email address.");
    }

    if (resumeData.phone?.trim()) {
      score += 10;
      strengths.push("Phone number is included.");
    } else {
      suggestions.push("Add your phone number.");
    }

    if (resumeData.role?.trim()) {
      score += 10;
      strengths.push("Target role is clearly mentioned.");
    } else {
      suggestions.push("Mention your target role clearly.");
    }

    if (resumeData.summary?.trim() && resumeData.summary.trim().length > 40) {
      score += 15;
      strengths.push("Professional summary looks good.");
    } else {
      suggestions.push("Write a stronger professional summary.");
    }

    if (resumeData.education?.trim()) {
      score += 10;
      strengths.push("Education section is present.");
    } else {
      suggestions.push("Add your education details.");
    }

    if (resumeData.skills?.trim()) {
      score += 15;
      strengths.push("Skills section is present.");
    } else {
      suggestions.push("Add relevant technical skills.");
    }

    const validProjects =
      resumeData.projects?.filter(
        (p) => p.title?.trim() || p.tech?.trim() || p.desc1?.trim()
      ) || [];

    if (validProjects.length >= 1) {
      score += 20;
      strengths.push("Projects section is included.");
    } else {
      suggestions.push("Add at least one strong project.");
    }

    if (validProjects.length > 0) {
      const firstProject = validProjects[0];
      if (!firstProject.tech?.trim()) {
        suggestions.push("Mention tech stack in your projects.");
      }
      if (!firstProject.desc1?.trim() || !firstProject.desc2?.trim()) {
        suggestions.push("Add 2 impact-focused bullet points for each project.");
      }
    }

    let level = "Low";
    if (score >= 80) level = "Excellent";
    else if (score >= 60) level = "Good";
    else if (score >= 40) level = "Average";

    const finalResult = { score, level, strengths, suggestions };
    localStorage.setItem("atsResult", JSON.stringify(finalResult));
    return finalResult;
  }, [resumeData]);

  const hasResume = Object.keys(resumeData).length > 0;

  if (!hasResume) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800">ATS Checker</h2>
        <p className="mt-2 text-sm text-gray-500">
          No resume data found. Please build your resume first.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800">ATS Resume Checker</h2>
        <p className="mt-1 text-sm text-gray-500">
          Your resume has been analyzed for ATS-friendliness.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">ATS Score</p>
          <h3 className="mt-2 text-3xl font-bold text-gray-800">
            {result.score}%
          </h3>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Resume Level</p>
          <h3 className="mt-2 text-2xl font-semibold text-gray-800">
            {result.level}
          </h3>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Projects Added</p>
          <h3 className="mt-2 text-2xl font-semibold text-gray-800">
            {resumeData.projects?.filter((p) => p.title?.trim()).length || 0}
          </h3>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800">Strengths</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {result.strengths.length > 0 ? (
              result.strengths.map((item, index) => (
                <li key={index}>• {item}</li>
              ))
            ) : (
              <li>• No strengths detected yet.</li>
            )}
          </ul>
        </div>

        <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800">Improvements</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {result.suggestions.length > 0 ? (
              result.suggestions.map((item, index) => (
                <li key={index}>• {item}</li>
              ))
            ) : (
              <li>• Your resume looks well-optimized.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ATSChecker;