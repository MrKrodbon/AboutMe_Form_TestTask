import Button from "../Button/Button";
import s from "./Pagination.module.scss";

interface PaginationProps {
  label?: string;
  onClick?: () => void;
}

export const Pagination = ({ label, onClick }: PaginationProps) => {
  return (
    <div className={s.wrapper}>
      <Button label={label} className={s.button} onClick={onClick} />
    </div>
  );
};
