import { useState } from "react";

const ResumeBuilder = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    role: "",
    summary: "",
    education: "",
    skills: "",
    projects: [
      { title: "", tech: "", desc1: "", desc2: "" }
    ]
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleProjectChange = (index, e) => {
    const updated = [...data.projects];
    updated[index][e.target.name] = e.target.value;
    setData({ ...data, projects: updated });
  };

  const addProject = () => {
    setData({
      ...data,
      projects: [...data.projects, { title: "", tech: "", desc1: "", desc2: "" }]
    });
  };

  const saveResume = () => {
    localStorage.setItem("resumeData", JSON.stringify(data));
    alert("Resume Saved ✅");
  };

  return (
    <div className="grid gap-6 xl:grid-cols-2">

      {/* FORM SIDE */}
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold">Resume Builder</h2>

        <div className="mt-4 space-y-4">

          <input name="fullName" placeholder="Full Name" onChange={handleChange} className="input" />
          <input name="email" placeholder="Email" onChange={handleChange} className="input" />
          <input name="phone" placeholder="Phone" onChange={handleChange} className="input" />
          <input name="linkedin" placeholder="LinkedIn" onChange={handleChange} className="input" />
          <input name="github" placeholder="GitHub" onChange={handleChange} className="input" />

          <input name="role" placeholder="Target Role (e.g. MERN Developer)" onChange={handleChange} className="input" />

          <textarea name="summary" placeholder="Professional Summary" onChange={handleChange} className="input h-24" />

          <textarea name="education" placeholder="Education" onChange={handleChange} className="input h-20" />

          <textarea name="skills" placeholder="Skills (comma separated)" onChange={handleChange} className="input h-20" />

          {/* PROJECTS */}
          <div>
            <h3 className="font-semibold mt-4">Projects</h3>

            {data.projects.map((proj, index) => (
              <div key={index} className="border p-3 rounded-xl mt-3 space-y-2">
                <input name="title" placeholder="Project Title" onChange={(e)=>handleProjectChange(index,e)} className="input" />
                <input name="tech" placeholder="Tech Stack" onChange={(e)=>handleProjectChange(index,e)} className="input" />
                <input name="desc1" placeholder="Description 1" onChange={(e)=>handleProjectChange(index,e)} className="input" />
                <input name="desc2" placeholder="Description 2" onChange={(e)=>handleProjectChange(index,e)} className="input" />
              </div>
            ))}

            <button onClick={addProject} className="mt-3 text-blue-600">
              + Add Project
            </button>
          </div>

          <button onClick={saveResume} className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
            Save Resume
          </button>

        </div>
      </div>

      {/* PREVIEW SIDE (ATS STYLE) */}
      <div className="bg-gray-200 p-6 rounded-2xl">
        <div className="bg-white max-w-[800px] mx-auto p-8 shadow-md">

          <h1 className="text-2xl font-bold">{data.fullName || "Your Name"}</h1>
          <p className="text-sm text-gray-600">
            {data.email} | {data.phone}
          </p>
          <p className="text-sm text-blue-600">
            {data.linkedin} | {data.github}
          </p>

          {/* ROLE */}
          <p className="mt-2 font-semibold">{data.role}</p>

          {/* SUMMARY */}
          <div className="mt-4">
            <h3 className="font-bold border-b">SUMMARY</h3>
            <p className="text-sm mt-2">{data.summary}</p>
          </div>

          {/* EDUCATION */}
          <div className="mt-4">
            <h3 className="font-bold border-b">EDUCATION</h3>
            <p className="text-sm mt-2">{data.education}</p>
          </div>

          {/* SKILLS */}
          <div className="mt-4">
            <h3 className="font-bold border-b">SKILLS</h3>
            <p className="text-sm mt-2">{data.skills}</p>
          </div>

          {/* PROJECTS */}
          <div className="mt-4">
            <h3 className="font-bold border-b">PROJECTS</h3>

            {data.projects.map((proj, i) => (
              <div key={i} className="mt-3">
                <p className="font-semibold">{proj.title}</p>
                <p className="text-sm text-gray-600">{proj.tech}</p>
                <ul className="list-disc ml-5 text-sm">
                  <li>{proj.desc1}</li>
                  <li>{proj.desc2}</li>
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;