import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import FormPage from "../../pages/FormPage/FormPage";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit" element={<FormPage />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
