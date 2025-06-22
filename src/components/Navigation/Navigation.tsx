import { NavLink } from "react-router";
import s from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? s.active : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/submit"}
        className={({ isActive }) => (isActive ? s.active : "")}
      >
        Submit Form
      </NavLink>
    </>
  );
};

export default Navigation;
