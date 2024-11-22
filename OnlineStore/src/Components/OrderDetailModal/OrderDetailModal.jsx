import { useRef, forwardRef, useImperativeHandle } from "react";
import classes from './OrderDetailModal.module.css';
import { createPortal } from 'react-dom';
import { useTranslation } from "react-i18next";
const OrderDetailModal = forwardRef(function OrderDetailModal({ order, onClose }, ref) {
    const modalRef = useRef(null);
    const { t } = useTranslation();
    // Expose the open and close methods using useImperativeHandle
    useImperativeHandle(ref, () => ({
        open: () => {
            modalRef.current.showModal();
        },
        close: () => {
            modalRef.current.close();
        }
    }));

    console.log(order)

    return createPortal(
        <dialog ref={modalRef} className={classes.modal}>
            <div className={classes.modalContent}>
                {order ? (
                    <>
                        <div className={classes.order_details}>
                            <p>#{order.orderID}</p>
                            <p>{t("Order Details")}</p>
                        </div>
                        <div className="">
                            <p>{t("Items")}</p>
                            <div>
                                {/* {order.items.map((item, index) => (
                                    <div key={index}>
                                        <p>{item.name}</p>
                                        <p>{item.quantity}</p>
                                        <p>{item.price}</p>
                                    </div>
                                ))} */}
                            </div>
                        </div>
                        <>
                            <div className="">
                                <p>{t("Created at")}</p>
                                <p>{order.orderDate}</p>
                            </div>
                            <div>
                                <p>{t("Delivery Date")}</p>
                                <p>{order.deliveryDate}</p>
                            </div>
                            <div>
                                <p>{t("Delivery Status")}</p>
                                <p>{order.deliveryStatus}</p>
                            </div>
                            <div>
                                <p>{t("Payment Method")}</p>
                                <p>{order.paymentMethod}</p>
                            </div>
                        </>
                        <>
                            <div>
                                <p>{t("Customer Name")}</p>
                                <p>{order.customerName}</p>
                            </div>
                            <div>
                                <p>{t("Customer Phone")}</p>
                                <p>{order.phoneNumber}</p>
                            </div>
                            <div>
                                <p>{t("Customer Email")}</p>
                                <p>{order.email}</p>
                            </div>
                            <div>
                                <p>{t("Customer Address")}</p>
                                <p>{order.deliveryAddress}</p>
                            </div>
                        </>
                        <>
                            <p>{t("Payment")}</p>
                            <div>
                                <p>{t("Subtotal")}</p>
                                <p>{order.totalPrice - order.deliveryPricing}</p>
                            </div>
                            <div>
                                <p>{t("Delivery Fee")}</p>
                                <p>{order.deliveryPricing}</p>
                            </div>
                            <div>
                                <p>{t("Total")}</p>
                                <p>{order.totalPrice}</p>
                            </div>
                        </>
                    </>
                ) : (
                    <p>No order details available.</p>
                )}
                <button onClick={() => ref.current.close()}>Close</button>
            </div>
        </dialog>,
        document.getElementById('root') // Ensure this element exists in your HTML
    );
});

export default OrderDetailModal;
