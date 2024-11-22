import classes from './Header.module.css'
import i18n from '../../i18n';
// import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import img from '../../assets/avatar.jpg'
import * as FaIcons from 'react-icons/fa6'
export default function Header() {
    const [currentLang, setCurrentLang] = useState(i18n.language);
    // const { t } = useTranslation();
    const handleLanguageChange = (lang) => {
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        i18n.changeLanguage(lang).then(() => {
            setCurrentLang(lang); // Trigger re-render
        }).catch((err) => console.error("Error changing language:", err));
    };

    console.log(i18n.language);
    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <p className={classes.logo}>Logo</p>
            </div>
            <div className={classes.nav}>
                <ul>
                    <li>
                        {currentLang === 'ar' ? (
                            <button onClick={() => handleLanguageChange('en')} className={classes.lan_button}>
                                en
                            </button>
                        ) : (
                            <button onClick={() => handleLanguageChange('ar')} className={classes.lan_button}>
                                ar
                            </button>
                        )}
                    </li>
                    <li>
                        <img src={img} alt='profile' className={classes.profile} />
                    </li>
                    <li>
                        <FaIcons.FaRightFromBracket className={classes.icon} />
                    </li>
                </ul>
            </div>
        </div>
    )
}