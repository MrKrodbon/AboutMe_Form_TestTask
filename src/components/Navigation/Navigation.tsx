import { NavLink } from "react-router";
const Navigation = () => {
  return (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/submit"}>Submit Form</NavLink>
    </>
  );
};

export default Navigation;
