import { NavLink } from "react-router";
import s from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? s.active : "")}
      >
        Головна
      </NavLink>
      <NavLink
        to={"/submit"}
        className={({ isActive }) => (isActive ? s.active : "")}
      >
        Перегляд статей
      </NavLink>
    </>
  );
};

export default Navigation;
