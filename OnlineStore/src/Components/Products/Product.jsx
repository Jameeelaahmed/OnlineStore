import classes from './Products.module.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import * as FaIcons from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import img from '../../assets/8b36b2da46236f3d175bfa8d95058793.png';
import Delete from '../DeleteModal/Delete';

export default function Product({ productID, productName, productDescription, productPrice }) {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const deleteRef = useRef()

    function handleClick() {
        navigate(`/products/${productID}`);
    }

    function toggleDropdownHandler() {
        setShowDropdown((prevState) => !prevState);

    }

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function deleteProductHandler() {
        deleteRef.current.open();
        setShowDropdown(false);
    }

    return (
        <div className={classes.product}>
            <div className={classes.dropdown} ref={dropdownRef}>
                <FaIcons.FaEllipsisVertical className={classes.icon} onClick={toggleDropdownHandler} />
                <div className={`${classes.action_dropdown} ${showDropdown ? classes.show : ''}`}>
                    <p>{t("Edit")}</p>
                    <p onClick={deleteProductHandler}>{t("Delete")}</p>
                    <Delete ref={deleteRef} />
                </div>
            </div>
            <div onClick={handleClick}>
                <div className={classes.center}>
                    <div className={classes.image}>
                        <img src={img} alt="" className={classes.product_img} />
                    </div>
                </div>
                <div className={classes.product_container}>
                    <h3 className={classes.title}>{productName}</h3>
                    <p className={classes.description}>{productDescription}</p>
                    <p className={classes.price}>{productPrice}</p>
                </div>
            </div>
        </div>
    );
}
