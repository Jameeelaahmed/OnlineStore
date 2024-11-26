import classes from './AddUserModal.module.css'
import { useRef, useImperativeHandle, forwardRef } from 'react'
import { useTranslation } from 'react-i18next';
const AddUserModal = forwardRef(function AddUserModal(_, ref) {
    const modalRef = useRef(null);
    const { t } = useTranslation();
    useImperativeHandle(ref, () => ({
        open: () => {
            modalRef.current.showModal();
        },
        close: () => {
            modalRef.current.close();
        }
    }));
    return (
        <dialog className={classes.modal} ref={modalRef}>
            <h2>{t("Add User")}</h2>
            <form>
                <div className={classes.container}>
                    <div className={classes.input_container}>
                        <label htmlFor="name">{t("Name")}</label>
                        <input type="text" id="name" />
                    </div>
                    <div className={classes.input_container}>
                        <label htmlFor="email">{t("Email")}</label>
                        <input type="email" id="email" />
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.input_container}>
                        <label htmlFor="phone">{t("Phone Number")}</label>
                        <input type="tel" id="phone" />
                    </div>
                    <div className={classes.input_container}>
                        <label htmlFor="join">{t("Join Date")}</label>
                        <input type="date" id="join" />
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.input_container}>
                        <label htmlFor="age">{t("Age")}</label>
                        <input type="number" id="age" />
                    </div>
                    <div className={classes.input_container}>
                        <label htmlFor="role">{t("Role")}</label>
                        <select id="role">
                            <option value="admin">{t("Admin")}</option>
                            <option value="user">{t("User")}</option>
                        </select>
                    </div>
                </div>
                <div className={classes.btn_container}>
                    <button type="submit">{t("Add")}</button>
                    <button type="reset">{t("Cancel")}</button>
                </div>
            </form>
        </dialog>
    )
})

export default AddUserModal;