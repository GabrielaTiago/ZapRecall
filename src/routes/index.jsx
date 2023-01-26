import { Navigate, Route, Routes } from "react-router-dom";
import { Home, FlashCards } from "../pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<FlashCards />} />

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
