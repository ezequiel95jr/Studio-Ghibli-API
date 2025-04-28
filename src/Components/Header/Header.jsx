import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";
const Header = () => {  
       
        const navigate = useNavigate();
 const irAFav = () => {
            navigate("/favoritos")
        }
    return (
        <header className="sticky bg-gray-600 top-0 w-full flex justify-between items-center px-4 py-2">
            <h1 className="header__title text-xl font-bold">Studio Ghibli API</h1>
            <Button onClick={irAFav} text="Favoritos"></Button>
        </header>
     );


};
export default Header;