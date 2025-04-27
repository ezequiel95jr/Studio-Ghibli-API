import styles from './Header.module.css';   
const Header = () => {  
    return (
        <header className={styles.header}>
            <h1 className="header__title">Studio Ghibli API</h1>    
        </header>
     );


};
export default Header;