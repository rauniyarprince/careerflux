import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Profile from "../pages/Profile/Profile";
import CareerGoal from "../pages/Career/CareerGoal";
import Dashboard from "../pages/Dashboard/Dashboard";
import Roadmap from "../pages/Roadmap/Roadmap";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/career-goal" element={<CareerGoal />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;