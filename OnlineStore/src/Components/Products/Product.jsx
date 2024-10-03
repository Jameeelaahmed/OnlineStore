import classes from './Products.module.css'
import laptop from '../../assets/lap.png'
export default function Product() {
    return (
        <div className={classes.product}>
            <div className={classes.center}>
                <div className={classes.image}>
                    <img src={laptop} alt="" className={classes.product_img} />
                </div>
            </div>
            <div className={classes.product_container}>
                <p className={classes.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et praesentium omnis possimus officiis soluta architecto voluptatibus beatae id nam commodi voluptates voluptate ab illo sequi, asperiores voluptas? Facere, at quidem!</p>
                <p className={classes.price}>1000$</p>
            </div>
        </div>
    )
}