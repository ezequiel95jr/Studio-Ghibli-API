import './Button.css';

const Button = ({onClick, text, type= "button" }) => {
  return (
    <button className="button" onClick={onClick} type={type}>
      {text}
    </button>
  );
}
export default Button;