import Button from "../Button/Button";
import logo from "../../assets/images/noface.png";
import { Link } from 'react-router';
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
const Header = () => {

    const navigate = useNavigate();
    const irAFav = () => {
        navigate("/favoritos")
    }
    return (
        <header className="w-full flex justify-between items-center px-5 py-2.5 bg-[#333] text-white">
            <Link to={`/`}>
            <img src={logo} alt="noface-inicio" className="h-[50px] object-contain transition-transform transition-opacity duration-300 ease-in-out hover:scale-110 hover:opacity-80"/>
            </Link>
            <h1 className="header__title text-2xl font-bold">Studio Ghibli API</h1>
            <Button onClick={irAFav} text="Favoritos"></Button>
        </header>
    );


};
export default Header;