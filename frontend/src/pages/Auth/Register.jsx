import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/common/InputField";
import Button from "../../components/common/Button";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("registerData", JSON.stringify(formData));
    navigate("/profile");
  };

  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold text-gray-800">Register</h2>
      <p className="mb-6 text-sm text-gray-500">
        Create your account to start learning.
      </p>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <InputField
          label="Mobile Number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter your mobile number"
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create password"
        />
        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
        />
        <Button type="submit">Create Account</Button>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-blue-600">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;