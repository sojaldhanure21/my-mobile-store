import { Routes, Route } from "react-router";
import LandingPage from "../pages/LandingPage";
import AdminProfilePage from "../pages/AdminPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin-dashboard" element={<AdminProfilePage />} />
    </Routes>
  );
};
