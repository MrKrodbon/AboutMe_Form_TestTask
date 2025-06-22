type ButtonTypes = "submit" | "button" | "reset";

interface ButtonProps {
  label?: string;
  type?: ButtonTypes;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ label, className, type, disabled, onClick }: ButtonProps) => {
  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
