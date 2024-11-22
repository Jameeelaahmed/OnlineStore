import classes from './AddProduct.module.css'
import { useTranslation } from 'react-i18next'
import * as FaIcons from 'react-icons/fa6'
import { useState, useRef } from 'react'
// import img from '../../assets/8b36b2da46236f3d175bfa8d95058793.png'
export default function AddProduct() {
    const { t } = useTranslation();
    const [activeImg, setActiveImg] = useState("");
    const [thumbnails, setThumbnails] = useState([]);
    const addCModal = useRef();
    function handleOpenModal() {
        addCModal.current.open();
    }
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const newThumbnails = [];
        files.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                newThumbnails.push(reader.result);
                if (newThumbnails.length === files.length) {
                    setActiveImg(newThumbnails[0]);
                    setThumbnails((prev) => [...prev, ...newThumbnails]);
                }
            };
            reader.readAsDataURL(file);
        });
    };
    return (
        <form className={classes.form_container}>
            <div className={classes.head}>
                <div className={classes.title}>
                    <FaIcons.FaPlus className={classes.icon} />
                    <p className={classes.main_title}>{t("Add New Product")}</p>
                </div>
                <div className={classes.buttons}>
                    <button className={classes.button}>
                        <FaIcons.FaCheck className={classes.icon} />
                        <p>{t("Add Product")}</p>
                    </button>
                    <button className={classes.button}>{t("Cancel")}</button>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.side_one}>
                    <div className={classes.top_con}>
                        <p className={classes.inner_title}>{t("General Information")}</p>
                        <div className={classes.input_container}>
                            <label htmlFor="name">{t("Product Name")}</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className={classes.input_container}>
                            <label htmlFor="description">{t("Product Description")}</label>
                            <textarea type="text" id="description" name="description" />
                        </div>
                    </div>
                    <div className={classes.bottom_con}>
                        <p className={classes.inner_title}>{t("Pricing And Stock")}</p>
                        <div className={classes.bottom}>
                            <div className={classes.input_container}>
                                <label htmlFor="price">{t("Base Pricing")}</label>
                                <input type="number" id="price" name="price" />
                            </div>
                            <div className={classes.input_container}>
                                <label htmlFor="stock">{t("Stock")}</label>
                                <input type="number" id="stock" name="stock" />
                            </div>
                            <div className={classes.input_container}>
                                <label htmlFor="discount">{t("Discount")}</label>
                                <input type="number" id="discount" name="discount" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.side_two}>
                    <div className={classes.upload_img}>
                        <p>{t("Upload Img")}</p>
                        <div className={classes.preview}>
                            {activeImg ? (
                                <img src={activeImg} alt="Active preview" />
                            ) : (
                                <span>Upload Image Preview</span>
                            )}
                        </div>
                        <div className={classes.thumnnails_container}>
                            <div className={classes.thumbnails}>
                                {thumbnails.map((thumb, index) => (
                                    <img
                                        key={index}
                                        src={thumb}
                                        alt={`Thumbnail ${index + 1}`}
                                        className={classes.thumbnail}
                                        onClick={() => setActiveImg(thumb)} // Set active image on click
                                    />
                                ))}
                            </div>
                            <div className={classes.image}>
                                <label htmlFor="img" className={classes.customFileUpload}>
                                    <FaIcons.FaCloudArrowUp className={classes.icon} />
                                </label>
                                <input
                                    type="file"
                                    id="img"
                                    name="img"
                                    accept="image/*"
                                    multiple // Allow multiple file uploads
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={classes.category}>
                        <p>{t("Category")}</p>
                        <select>
                            <option value="1" className={classes.select}>{t("Category 1")}</option>
                            <option value="2" className={classes.select}>{t("Category 2")}</option>
                            <option value="3" className={classes.select}>{t("Category 3")}</option>
                            <option value="4" className={classes.select}>{t("Category 4")}</option>
                        </select>
                        <div className={classes.select_icon}>
                            <FaIcons.FaChevronDown />
                        </div>
                        <button className={classes.button} onClick={handleOpenModal}>{t("Add Category")}</button>
                    </div>
                </div>
            </div>
        </form>
    )
}