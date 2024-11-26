import { useState, useEffect } from 'react';
import classes from './sidebar.module.css';
import * as FaIcon from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { CgListTree } from "react-icons/cg";
import { CgShapeRhombus } from "react-icons/cg";

export default function Sidebar({ opened, closed }) {
    const { t } = useTranslation();
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const text = 'WELCOME JAMEELA';
    const [activeIndex, setActiveIndex] = useState(0); // Track the active li
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
    const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);

    // Reset the text animation when the sidebar is opened
    useEffect(() => {
        if (opened) {
            setCurrentText('');
            setCurrentIndex(0);
        }
    }, [opened]);

    useEffect(() => {
        if (currentIndex < text.length && opened) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, opened]);

    function handleClose() {
        closed();
        setIsProductDropdownOpen(false);
        setIsOrderDropdownOpen(false);
    }

    function handleActive(index) {
        setActiveIndex(index);
    }

    const toggleProductDropdown = () => {
        setIsProductDropdownOpen(!isProductDropdownOpen);
    };

    const toggleOrderDropdown = () => {
        setIsOrderDropdownOpen(!isOrderDropdownOpen);
    };

    return (
        <>
            {opened && <div className={classes.backdrop} onClick={handleClose}></div>}
            {opened &&
                <div className={`${classes.sidebar} ${opened ? classes.sidebar_active : classes.close}`}>
                    <p className={classes.arrow_container} onClick={closed}>
                        <FaIcon.FaX className={classes.close} />
                    </p>
                    <div className={classes.profile}>
                        <p className={classes.user}>{currentText}</p>
                    </div>
                    <ul>
                        <NavLink
                            className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ''}`}
                            to="/dashboard"
                            onClick={closed}
                        >
                            <li>
                                <FaIcon.FaHouse className={classes.icon} />
                                <p>{t('Dashboard')}</p>
                            </li>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `${classes.link} ${isActive ? classes.active : ""}`
                            }
                            to="category"
                            onClick={closed}
                        >
                            <li>
                                <FaIcon.FaList className={classes.icon} />
                                <p>{t("Categories List")}</p>
                            </li>
                        </NavLink>
                        <li className={classes.dropdown_cont} onClick={toggleProductDropdown}>
                            <div className={classes.cont}>
                                <CgListTree className={classes.icon} />
                                <p>{t("Products")}</p>
                            </div>
                            <div>
                                <FaIcon.FaAngleDown className={classes.dropdownIcon} />
                            </div>
                        </li>
                        {/* Dropdown List */}
                        <ul
                            className={`${classes.dropdown} ${isProductDropdownOpen ? classes.dropdownOpen : ""
                                }`}
                        >
                            <NavLink
                                className={({ isActive }) =>
                                    `${classes.link} ${classes.dropdown_link} ${isActive ? classes.active : ""}`
                                }
                                to="/products"
                                onClick={closed}
                            >
                                <li>
                                    <CgShapeRhombus className={classes.small_icon} />
                                    <p>{t("Products List")}</p>
                                </li>
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `${classes.link} ${isActive ? classes.active : ""}`
                                }
                                to="/AddProduct"
                                onClick={closed}
                            >
                                <li>
                                    <CgShapeRhombus className={classes.small_icon} />
                                    <p>{t("Add Product")}</p>
                                </li>
                            </NavLink>
                        </ul>
                        <li className={classes.dropdown_cont} onClick={toggleOrderDropdown}>
                            <div className={classes.cont}>
                                <CgListTree className={classes.icon} />
                                <p>{t("Orders")}</p>
                            </div>
                            <div>
                                <FaIcon.FaAngleDown className={classes.dropdownIcon} />
                            </div>
                        </li>
                        {/* Dropdown List */}
                        <ul
                            className={`${classes.dropdown} ${isOrderDropdownOpen ? classes.dropdownOpen : ""
                                }`}
                        >
                            <NavLink
                                className={({ isActive }) =>
                                    `${classes.link} ${classes.dropdown_link} ${isActive ? classes.active : ""}`
                                }
                                to="/orders"
                                onClick={closed}
                            >
                                <li>
                                    <CgShapeRhombus className={classes.small_icon} />
                                    <p>{t("Orders List")}</p>
                                </li>
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `${classes.link} ${isActive ? classes.active : ""}`
                                }
                                to="/make-order"
                                onClick={closed}
                            >
                                <li>
                                    <CgShapeRhombus className={classes.small_icon} />
                                    <p>{t("Create Order")}</p>
                                </li>
                            </NavLink>
                        </ul>
                        <NavLink
                            className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ''}`}
                            to="/users"
                            onClick={closed}
                        >
                            <li>
                                <FaIcon.FaUser className={classes.icon} />
                                <p>{t('Users')}</p>
                            </li>
                        </NavLink>
                    </ul>
                </div>}
        </>
    );
}
