import { ROUTES } from "../../const/routes";
import Logo from "../../assets/images/noface.png";
import studioLogo from "../../assets/images/studio.png";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
const NotFound = () => {
      const { t } = useTranslation();
    return (
        <div className="relative flex flex-col items-center justify-center gap-3 bg-black-100/10 rounded-xl shadow-lg p-8 text-white text-center animate-fade-in">
            <img
                src={studioLogo}
                alt={"Studio Ghibli Logo"}
                className="object-contain w-auto h-[200px]"
            />
            <p className="text-lg font-semibold text-gray-300">{t('NotFound.error404')}</p>
            <p className="text-sm text-gray-400">{t('NotFound.inicio')}</p>
            <Link to={ROUTES.home}>
                <img src={Logo} alt="noface-inicio" className="h-[50px] object-contain transition-transform transition-opacity duration-300 ease-in-out hover:scale-110 hover:opacity-80" />
            </Link>
        </div>
    );
}


export default NotFound;
