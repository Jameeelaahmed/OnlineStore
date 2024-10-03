import Product from './Product'
import classes from './Products.module.css'
export default function Products() {
    return (
        <div className={classes.products}>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    )
}