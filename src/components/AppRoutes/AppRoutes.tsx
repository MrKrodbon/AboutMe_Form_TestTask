import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import FormPage from "../../pages/FormPage/FormPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/submit" element={<FormPage />} />
    </Routes>
  );
};

export default AppRoutes;
