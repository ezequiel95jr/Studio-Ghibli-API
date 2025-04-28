

const Button = ({onClick, text, type= "button" }) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClick} type={type}>
      {text}
    </button>
  );
}
export default Button;