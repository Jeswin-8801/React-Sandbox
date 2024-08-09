interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger"; // ? for optional
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <center>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </center>
  );
};

export default Button;
