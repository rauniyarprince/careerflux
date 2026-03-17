import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Profile from "../pages/Profile/Profile";
import CareerGoal from "../pages/Career/CareerGoal";
import Dashboard from "../pages/Dashboard/Dashboard";
import Roadmap from "../pages/Roadmap/Roadmap";
import Quiz from "../pages/Quiz/Quiz";
import QuizResult from "../pages/Quiz/QuizResults";
import Interview from "../pages/Interview/Interview";
import InterviewFeedback from "../pages/Interview/InterviewFeedback";
import ResumeBuilder from "../pages/Resume/ResumeBuilder";

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
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz-result" element={<QuizResult />} />
          <Route path = "/interview" element = {<Interview />} />
          <Route path = "/interview-feedback"  element ={<InterviewFeedback /> } />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;