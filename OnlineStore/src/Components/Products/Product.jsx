import classes from './Products.module.css'
// import hoddie from '../../assets/hoddie.png'
import img from '../../assets/8b36b2da46236f3d175bfa8d95058793.png'
export default function Product() {
    return (
        <div className={classes.product}>
            <div className={classes.center}>
                <div className={classes.image}>
                    <img src={img} alt="" className={classes.product_img} />
                </div>
            </div>
            <div className={classes.product_container}>
                <p className={classes.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et praesentium omnis possimus officiis soluta architecto voluptatibus beatae id nam commodi voluptates voluptate ab illo sequi, asperiores voluptas? Facere, at quidem!</p>
                <p className={classes.price}>1000$</p>
            </div>
        </div>
    )
}