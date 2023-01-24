import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Questions } from "../pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<Questions />} />

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
