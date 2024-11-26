import classes from './ProductPage.module.css';
import { useState } from 'react';
import products from '../../products';

export default function ProductPage() {
    const product = products[0];
    const [activeImg, setActiveImage] = useState(0);

    return (
        <div className={classes.ProductPage}>
            <div className={classes.imgs_container}>
                <div className={classes.active}>
                    <img src={product.pictures[activeImg]} alt={`Product ${activeImg}`} />
                </div>
                <div className={classes.imgs}>
                    {product.pictures && product.pictures.length > 0 && (
                        product.pictures.map((img, index) => (
                            <img
                                src={img}
                                key={index}
                                alt={`Thumbnail ${index}`}
                                onClick={() => setActiveImage(index)}
                                className={activeImg === index ? classes.activeThumbnail : ''}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
