import { useRef, forwardRef, useImperativeHandle } from "react";
import classes from './OrderDetailModal.module.css';
import { createPortal } from 'react-dom';
import * as FaIcons from 'react-icons/fa6';
import { useTranslation } from "react-i18next";

const OrderDetailModal = forwardRef(function OrderDetailModal({ order, onClose }, ref) {
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

    return createPortal(
        <dialog ref={modalRef} className={classes.modal}>
            {order ? (
                <div className={classes.modalContent}>
                    {/* Order details */}
                    <div className={classes.order_details}>
                        <div>
                            <p>#{order.orderID}</p>
                            <p>{t("Order Details")}</p>
                        </div>
                        <div className={classes.icon_container}>
                            <FaIcons.FaX onClick={onClose} className={classes.icon} />
                        </div>
                    </div>
                    <div className={classes.container}>
                        <p>{t("Items")}</p>
                        <div>
                            {order.items?.map((item, index) => (
                                <div key={index}>
                                    <p>{item.name}</p>
                                    <p>{item.quantity}</p>
                                    <p>{item.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={classes.container}>
                        <div className={classes.section}>
                            <p>{t("Created at")}</p>
                            <p>{order.orderDate}</p>
                        </div>
                        <div className={classes.section}>
                            <p>{t("Delivery Date")}</p>
                            <p>{order.deliveryDate}</p>
                        </div>
                        <div className={classes.section}>
                            <p>{t("Delivery Status")}</p>
                            <p>{order.deliveryStatus}</p>
                        </div>
                        <div className={classes.section}>
                            <p>{t("Payment Method")}</p>
                            <p>{order.paymentMethod}</p>
                        </div>
                    </div>
                    <div className={classes.container}>
                        <div className={classes.section}>
                            <p>{t("Customer Name")}</p>
                            <p>{order.customerName}</p>
                        </div>
                        <div className={classes.section}>
                            <p>{t("Customer Phone")}</p>
                            <p>{order.phoneNumber}</p>
                        </div>
                        <div className={classes.section}>
                            <p>{t("Customer Email")}</p>
                            <p>{order.email}</p>
                        </div>
                        <div className={classes.section}>
                            <p>{t("Customer Address")}</p>
                            <p>{order.deliveryAddress}</p>
                        </div>
                    </div>
                    <div className={classes.payment_details}>
                        <p className={classes.title}>{t("Payment")}</p>
                        <div className={classes.section}>
                            <p>{t("Subtotal")}</p>
                            <p>{order.totalPrice - order.deliveryPricing}</p>
                        </div>
                        <div className={classes.section}>
                            <p>{t("Delivery Fee")}</p>
                            <p>{order.deliveryPricing}</p>
                        </div>
                        <div className={classes.section}>
                            <p>{t("Total")}</p>
                            <p>{order.totalPrice}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={classes.modalContent}>
                    <p>{t("No order selected. Please select an order.")}</p>
                </div>
            )}
        </dialog>,
        document.getElementById('root') // Ensure this element exists in your HTML
    );
});

export default OrderDetailModal;
