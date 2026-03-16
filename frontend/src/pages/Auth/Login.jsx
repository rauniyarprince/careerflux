import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/common/InputField";
import Button from "../../components/common/Button";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold text-gray-800">Login</h2>
      <p className="mb-6 text-sm text-gray-500">
        Sign in to continue your career journey.
      </p>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <Button type="submit">Login</Button>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        Don’t have an account?{" "}
        <Link to="/register" className="font-medium text-blue-600">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;