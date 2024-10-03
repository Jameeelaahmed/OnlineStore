import classes from './AddProduct.module.css'
export default function AddProduct() {
    return (
        <form className={classes.form_container}>
            <div className={classes.input}>
                <div className={classes.input_container}>
                    <label htmlFor="name">Product Name</label>
                    <input type="text" id="name" name="name" />

                </div>
                <div className={classes.input_container}>
                    <label htmlFor="name">Product Name</label>
                    <input type="text" id="name" name="name" />
                </div>
            </div>
            <div className={classes.input}>
                <div className={classes.input_container}>
                    <label htmlFor="name">Product Name</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className={classes.input_container}>
                    <label htmlFor="name">Product Name</label>
                    <input type="text" id="name" name="name" />
                </div>
            </div>
            <div className={classes.input}>
                <div className={classes.input_container}>
                    <label htmlFor="name">Product Name</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className={classes.input_container}>
                    <label htmlFor="name">Product Name</label>
                    <input type="text" id="name" name="name" />
                </div>
            </div>
            <input type="submit" className={classes.submit} />
        </form>
    )
}