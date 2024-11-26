import { useRef, forwardRef, useImperativeHandle } from "react"
import { createPortal } from "react-dom";
import classes from './AddCategoryModal.module.css'
import { useTranslation } from "react-i18next";
const AddCategoryModal = forwardRef(function AddCategoryModal(_, ref) {
    const modalRef = useRef(null);
    const { t } = useTranslation();
    useImperativeHandle(ref, () => ({
        open: () => {
            modalRef.current.showModal()
        },
        close: () => {
            modalRef.current.close();
        }
    }))
    return (
        <dialog ref={modalRef} className={classes.modal}>
            <h2>{t("Add Category")}</h2>
            <form action="" method="dialog">
                <div className={classes.input_container}>
                    <label>{t("Category Name")}</label>
                    <input type="text" />
                </div>
                <div className={classes.input_container}>
                    <label>{t("Category Description")}</label>
                    <textarea />
                </div>
                <div className={classes.btn_container}>
                    <button type="submit">{t("Add")}</button>
                    <button type="reset">{t("Cancel")}</button>
                </div>
            </form>
        </dialog>
    )
})

export default AddCategoryModal;