import Button from "../Button/Button";
import logo from "../../assets/images/noface.png";
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { Link } from 'react-router';
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import { FaGlobe } from 'react-icons/fa';
const Header = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();
    const irAFav = () => {
        navigate(ROUTES.favoritos)
    }
    const cambiarIdioma = (e) => {
        i18n.changeLanguage(e.target.value);
      };
    return (
        <header className="sticky top-0 bg-[#333] w-full flex justify-between items-center px-5 py-2.5 text-white z-50">
            <Link to={ROUTES.home}>
                <img src={logo} alt="noface-inicio" className="h-[50px] object-contain transition-transform transition-opacity duration-300 ease-in-out hover:scale-110 hover:opacity-80" />
            </Link>
            <h1 className="font-bold">{t('header.titles')}</h1>
            <div className="flex items-center gap-2">
                <FaGlobe className="text-xl" />
                <select
                    onChange={cambiarIdioma}
                    defaultValue={i18n.language}
                    className="bg-[#444] text-white p-1 rounded"
                >
                    <option value="es">{t("Button.esp")}</option>
                    <option value="en">{t("Button.ing")}</option>
                </select>
            <Button onClick={irAFav} text={t('favoritos.titles')}></Button>
            </div>
        </header>
    );


};
export default Header;