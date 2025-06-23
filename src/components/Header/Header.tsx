import s from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.navigation}>
        <Navigation />
      </div>
      <div className={s.title}>
        <h1 className="pr-4 pl-4">Привіт! Я Євгеній — Frontend-розробник.</h1>
      </div>
    </div>
  );
};

export default Header;
