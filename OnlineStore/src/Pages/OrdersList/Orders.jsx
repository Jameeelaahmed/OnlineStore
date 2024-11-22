import classes from './Orders.module.css'
import { useTranslation } from 'react-i18next'
import * as FaIcons from 'react-icons/fa6'
import { useState, useRef } from 'react';
import OrderDetailModal from '../../Components/OrderDetailModal/OrderDetailModal';
import orders from '../../orderslist';
import { CiCircleMore } from "react-icons/ci";

export default function Orders() {
    const { t } = useTranslation();
    const [pages, setPages] = useState(1);


    const closeModal = () => {
        setSelectedOrder(null);
    };
    const [selectedOrder, setSelectedOrder] = useState(null);
    const modalRef = useRef(null);

    function handleOpenModal(order) {
        setSelectedOrder(order);
        modalRef.current.open();
    }
    const totalPages = Math.ceil(orders.length / 7);

    return (
        <div className={classes.orders}>
            <div className={classes.togfil}>
                <FaIcons.FaFilter className={classes.icon} />
                <div className={classes.toggle}>
                    <p>{t("Completed")}</p>
                    <p>{t("In Transit")}</p>
                    <p>{t("Delivered")}</p>
                    <p>{t("Cancelled")}</p>
                </div>
            </div>
            <div className={classes.tableWrapper}>
                <table className={classes.table}>
                    <thead>
                        <tr className={classes.head}>
                            <th>{t("Order ID")}</th>
                            <th>{t("Customer")}</th>
                            <th>{t("Order")}</th>
                            <th>{t("Quantity")}</th>
                            <th>{t("Order Date")}</th>
                            <th>{t("Delivery Date")}</th>
                            <th>{t("Delivery Pricing")}</th>
                            <th>{t("Total Price")}</th>
                            <th>{t("Delivery Status")}</th>
                            <th>{t("Delivery Address")}</th>
                            <th>{t("Payment Method")}</th>
                            <th>{t("Action")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 &&
                            orders.slice((pages - 1) * 7, pages * 7).map((order) => (
                                <tr key={order.orderID} onClick={() => handleOpenModal(order)}>
                                    <td dir="ltr">{order.orderID}</td>
                                    <td dir="ltr">{order.customerName}</td>
                                    <td>
                                        {order.order[0]?.item}
                                        {order.order.length > 1 && (
                                            <CiCircleMore />
                                        )}
                                    </td>
                                    <td>{order.order[0]?.quantity}</td>
                                    <td dir="ltr">{order.orderDate}</td>
                                    <td dir="ltr">{order.deliveryDate}</td>
                                    <td dir="ltr">{order.deliveryPricing}</td>
                                    <td dir="ltr">{order.totalPrice}</td>
                                    <td dir="ltr">{order.deliveryStatus}</td>
                                    <td dir="ltr">{order.deliveryAddress}</td>
                                    <td dir="ltr">{order.paymentMethod}</td>
                                    <td>
                                        <FaIcons.FaPencil className={classes.icon_edit} />
                                        <FaIcons.FaTrash className={classes.icon_delete} />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            {orders.length > 0 && <div className={classes.pagination}>
                <span onClick={() => setPages(pages > 1 ? pages - 1 : pages)} className={classes.arrow}><FaIcons.FaCaretRight className={classes.icon} /></span>
                {[...Array(totalPages)].map((_, index) => (
                    <span
                        key={index}
                        className={pages === index + 1 ? classes.active : ""}
                        onClick={() => setPages(index + 1)}
                    >
                        {index + 1}
                    </span>
                ))}

                <span onClick={() => setPages(pages < Math.ceil(orders.length / 10) ? pages + 1 : pages)} className={classes.arrow}><FaIcons.FaCaretLeft className={classes.icon} /></span>
            </div>}
            {selectedOrder && (
                <OrderDetailModal
                    ref={modalRef}
                    order={selectedOrder}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}