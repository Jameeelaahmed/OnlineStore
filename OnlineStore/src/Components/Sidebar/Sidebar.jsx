import { useState, useEffect } from 'react';
import classes from './sidebar.module.css';
import * as FaIcon from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const { t } = useTranslation();
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const text = 'WELCOME JAMEELA';
    const [isOpen, setIsOpen] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0); // Track the active li

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    function handleClose() {
        setIsOpen(prev => !prev);
    }

    function handleActive(index) {
        setActiveIndex(index); // Set the clicked li as active
    }

    return (
        <div className={`${classes.sidebar} ${isOpen ? "" : classes.sidebar_active}`}>
            <p className={classes.arrow_container} onClick={handleClose}>
                <FaIcon.FaArrowLeft className={classes.close} />
            </p>
            <div className={classes.profile}>
                <p className={classes.user}>{currentText}</p>
            </div>
            <ul>
                <Link
                    className={`${classes.link} ${activeIndex === 0 ? classes.active : ''}`}
                    onClick={() => handleActive(0)}
                    to="/"
                >
                    <FaIcon.FaHome className={classes.icon} />
                    <p>{t('Dashboard')}</p>
                </Link>
                <Link
                    className={`${classes.link} ${activeIndex === 1 ? classes.active : ''}`}
                    onClick={() => handleActive(1)}
                    to="/products"
                >
                    <FaIcon.FaCartPlus className={classes.icon} />
                    <p>Products</p>
                </Link>
                <li
                    className={`${classes.link} ${activeIndex === 2 ? classes.active : ''}`}
                    onClick={() => handleActive(2)}
                    to="/AddProduct"
                >
                    <FaIcon.FaCartPlus className={classes.icon} />
                    <p>Add Products</p>
                </li>
                <li
                    className={`${classes.link} ${activeIndex === 3 ? classes.active : ''}`}
                    onClick={() => handleActive(3)}
                >
                    <p>Orders</p>
                </li>
                <li
                    className={`${classes.link} ${activeIndex === 4 ? classes.active : ''}`}
                    onClick={() => handleActive(4)}
                >
                    <p>Make Order</p>
                </li>
                <li
                    className={`${classes.link} ${activeIndex === 5 ? classes.active : ''}`}
                    onClick={() => handleActive(5)}
                >
                    <p>Users</p>
                </li>
            </ul>
        </div>
    );
}
