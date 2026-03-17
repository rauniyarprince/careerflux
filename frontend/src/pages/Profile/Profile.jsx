import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/common/InputField";
import Button from "../../components/common/Button";

const Profile = () => {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState(() => {
    const saved = localStorage.getItem("profileData");
    return saved
      ? JSON.parse(saved)
      : {
          fullName: "",
          education: "",
          college: "",
          skills: "",
          interests: "",
        };
  });

  const handleChange = (e) => {
    setProfileData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("profileData", JSON.stringify(profileData));
    navigate("/career-goal");
  };

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-2xl font-bold text-gray-800">Profile Setup</h2>
      <p className="mb-6 text-sm text-gray-500">
        Fill in your details to personalize your journey.
      </p>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          name="fullName"
          value={profileData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        <InputField
          label="Education"
          name="education"
          value={profileData.education}
          onChange={handleChange}
          placeholder="e.g. B.Tech CSE"
        />
        <InputField
          label="College"
          name="college"
          value={profileData.college}
          onChange={handleChange}
          placeholder="Enter your college name"
        />
        <InputField
          label="Skills"
          name="skills"
          value={profileData.skills}
          onChange={handleChange}
          placeholder="e.g. HTML, CSS, JavaScript"
        />
        <InputField
          label="Interests"
          name="interests"
          value={profileData.interests}
          onChange={handleChange}
          placeholder="e.g. Web Development, Data Analysis"
        />

        <Button type="submit" className="mt-2">
          Save Profile
        </Button>
      </form>
    </div>
  );
};

export default Profile;