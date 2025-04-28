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
        <header className={styles.header}>
            <Link to={`/`}>
            <img src={logo} alt="noface-inicio" className={styles.logo}/>
            </Link>
            <h1 className="header__title text-xl font-bold">Studio Ghibli API</h1>
            <Button onClick={irAFav} text="Favoritos"></Button>
        </header>
    );


};
export default Header;