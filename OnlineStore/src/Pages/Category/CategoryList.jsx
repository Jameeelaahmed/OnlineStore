import classes from './CategoryList.module.css'
import tableclasses from '../OrdersList/Orders.module.css'
import { useTranslation } from 'react-i18next'
import * as FaIcons from 'react-icons/fa6'
import categories from '../../Category'
import { useState, useRef } from 'react'
import * as FaIcon from 'react-icons/fa6'
import AddCategoryModal from '../../Components/AddCategoryModal/AddCategoryModal'
export default function CategoryList() {
    const { t } = useTranslation();
    const [pages, setPages] = useState(1);
    const totalPages = Math.ceil(categories.length / 7);
    const modalRef = useRef(null);

    function openAddModal() {
        modalRef.current.open();
    }

    return (
        <div className={classes.categorylist}>
            <div className={`${tableclasses.tableWrapper} ${classes.category}`}>
                <div className={classes.add_category}>
                    <FaIcon.FaPlus className={classes.icon} />
                    <button className={classes.add} onClick={openAddModal}>{t("Add Category")}</button>
                    <AddCategoryModal ref={modalRef} />
                </div>
                <div className={tableclasses.search}>
                    <input type="text" placeholder={t("Search")} />
                    <FaIcon.FaMagnifyingGlass className={tableclasses.search_icon} />
                </div>
                <table className={tableclasses.table}>
                    <thead>
                        <tr className={tableclasses.head}>
                            <th>{t("Category ID")}</th>
                            <th>{t("Category Name")}</th>
                            <th>{t("Category Description")}</th>
                            <th>{t("Action")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.length > 0 &&
                            categories.slice((pages - 1) * 7, pages * 7).map((category) => (
                                <tr key={category.id}>
                                    <td dir="ltr">{category.id}</td>
                                    <td dir="ltr">{category.categoryName}</td>
                                    <td dir="ltr">{category.description}</td>
                                    <td>
                                        <FaIcons.FaPenToSquare className={tableclasses.icon_edit} />
                                        <FaIcons.FaTrash className={tableclasses.icon_delete} />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            {categories.length > 0 && <div className={tableclasses.pagination}>
                <span onClick={() => setPages(pages > 1 ? pages - 1 : pages)} className={tableclasses.arrow}><FaIcons.FaCaretRight className={tableclasses.icon} /></span>
                {[...Array(totalPages)].map((_, index) => (
                    <span
                        key={index}
                        className={pages === index + 1 ? tableclasses.active : ""}
                        onClick={() => setPages(index + 1)}
                    >
                        {index + 1}
                    </span>
                ))}

                <span onClick={() => setPages(pages < Math.ceil(categories.length / 10) ? pages + 1 : pages)} className={tableclasses.arrow}><FaIcons.FaCaretLeft className={tableclasses.icon} /></span>
            </div>}
        </div>
    )
}