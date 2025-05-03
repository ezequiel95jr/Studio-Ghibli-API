import Button from "../Button/Button";
import logo from "../../assets/images/noface.png";
import { Link } from 'react-router';
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
const Header = () => {

    const navigate = useNavigate();
    const irAFav = () => {
        navigate(ROUTES.favoritos)
    }
    return (
        <header className="sticky top-0 bg-[#333] w-full flex justify-between items-center px-5 py-2.5 text-white z-50">
            <Link to={ROUTES.home}>
            <img src={logo} alt="noface-inicio" className="h-[50px] object-contain transition-transform transition-opacity duration-300 ease-in-out hover:scale-110 hover:opacity-80"/>
            </Link>
            <h1 className="header__title text-2xl font-bold">Proyecto Studio Ghibli</h1>
            <Button onClick={irAFav} text="Favoritos"></Button>
        </header>
    );


};
export default Header;