import { useRef, forwardRef, useImperativeHandle, useEffect } from "react";
import classes from './Delete.module.css';
import { createPortal } from "react-dom";
import * as FaIcons from 'react-icons/fa6';
import { useTranslation } from "react-i18next";

const Delete = forwardRef(function Delete(_, ref) {
    const modalRef = useRef(null);
    const wrapperRef = useRef(null);
    const { t } = useTranslation();

    useImperativeHandle(ref, () => ({
        open: () => {
            modalRef.current.showModal();
        },
        close: () => {
            modalRef.current.close();
        }
    }));

    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            modalRef.current.close();
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleCancel = () => {
        modalRef.current.close();
    };

    return createPortal(
        <dialog ref={modalRef} className={classes.modal}>
            <div ref={wrapperRef} className={classes.modal}>
                <div className={classes.icon_container}></div>
                <FaIcons.FaTrash className={classes.icon} />
                <p className={classes.title}>{t("Are you sure that you want to delete ?")}</p>
                <div className={classes.actions}>
                    <button className={classes.cancel} onClick={handleCancel}>
                        {t("Cancel")}
                    </button>
                    <button className={classes.delete}>{t("Delete")}</button>
                </div>
            </div>
        </dialog>,
        document.getElementById('root')
    );
});

export default Delete;
