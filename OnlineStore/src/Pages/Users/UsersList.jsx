import tableclasses from '../OrdersList/Orders.module.css'
import classes from './UsersList.module.css'
import { useTranslation } from 'react-i18next'
import * as FaIcon from 'react-icons/fa6'
import { useState, useRef } from 'react'
import users from '../../users'
import AddUserModal from '../../Components/AddUserModal/AddUserModal'
export default function UsersList() {
    const { t } = useTranslation();
    const [pages, setPages] = useState(1);
    const totalPages = Math.ceil(users.length / 7);
    const modalRef = useRef(null);

    function openAddModal() {
        modalRef.current.open();
    }

    return (
        <div className={classes.usersList}>
            <div className={`${tableclasses.tableWrapper} ${classes.users}`}>
                <div className={classes.add_user}>
                    <FaIcon.FaPlus className={classes.icon} />
                    <button className={classes.add} onClick={openAddModal}>{t("Add User")}</button>
                    <AddUserModal ref={modalRef} />
                </div>
                <div className={tableclasses.search}>
                    <input type="text" placeholder={t("Search")} />
                    <FaIcon.FaMagnifyingGlass className={tableclasses.search_icon} />
                </div>
                <table className={tableclasses.table}>
                    <thead>
                        <tr className={tableclasses.head}>
                            <th>{t("Id")}</th>
                            <th>{t("Name")}</th>
                            <th>{t("Email")}</th>
                            <th>{t("Phone Number")}</th>
                            <th>{t("Join Date")}</th>
                            <th>{t("Age")}</th>
                            <th>{t("Role")}</th>
                            <th>{t("Action")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 &&
                            users.slice((pages - 1) * 7, pages * 7).map((user) => (
                                <tr key={user.id}>
                                    <td dir="ltr">{user.id}</td>
                                    <td dir="ltr">{user.name}</td>
                                    <td dir="ltr">{user.email}</td>
                                    <td dir="ltr">{user.phoneNumber}</td>
                                    <td dir="ltr">{user.joinDate}</td>
                                    <td dir="ltr">{user.age}</td>
                                    <td dir="ltr">{user.role}</td>
                                    <td>
                                        <FaIcon.FaPenToSquare className={tableclasses.icon_edit} />
                                        <FaIcon.FaTrash className={tableclasses.icon_delete} />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            {users.length > 0 && <div className={tableclasses.pagination}>
                <span onClick={() => setPages(pages > 1 ? pages - 1 : pages)} className={tableclasses.arrow}><FaIcon.FaCaretRight className={tableclasses.icon} /></span>
                {[...Array(totalPages)].map((_, index) => (
                    <span
                        key={index}
                        className={pages === index + 1 ? tableclasses.active : ""}
                        onClick={() => setPages(index + 1)}
                    >
                        {index + 1}
                    </span>
                ))}

                <span onClick={() => setPages(pages < Math.ceil(users.length / 10) ? pages + 1 : pages)} className={tableclasses.arrow}><FaIcon.FaCaretLeft className={tableclasses.icon} /></span>
            </div>}
        </div>

    )
}