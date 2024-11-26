import Product from './Product'
import classes from './Products.module.css'
import { useState } from 'react'
import Delete from '../DeleteModal/Delete';
export default function Products() {
    const [deleteProductID, setDeleteProductID] = useState(null);

    const products = [
        {
            id: 1,
            name: "Refrigerator",
            description: "A high-capacity refrigerator with advanced cooling technology.",
            price: "$499.99",
        },
        {
            id: 2,
            name: "Washing Machine",
            description: "Efficient and quiet washing machine with multiple settings.",
            price: "$349.99",
        },
        {
            id: 3,
            name: "Microwave",
            description: "Compact microwave with fast heating and defrost options.",
            price: "$99.99",
        },
        {
            id: 4,
            name: "Dishwasher",
            description: "Energy-efficient dishwasher with a sleek design.",
            price: "$299.99",
        },
        {
            id: 5,
            name: "Dishwasher",
            description: "Energy-efficient dishwasher with a sleek design.",
            price: "$299.99",
        },
        {
            id: 6,
            name: "Dishwasher",
            description: "Energy-efficient dishwasher with a sleek design.",
            price: "$299.99",
        },
        {
            id: 7,
            name: "Dishwasher",
            description: "Energy-efficient dishwasher with a sleek design.",
            price: "$299.99",
        },
        {
            id: 8,
            name: "Dishwasher",
            description: "Energy-efficient dishwasher with a sleek design.",
            price: "$299.99",
        },
        {
            id: 9,
            name: "Dishwasher",
            description: "Energy-efficient dishwasher with a sleek design.",
            price: "$299.99",
        },
        {
            id: 10,
            name: "Dishwasher",
            description: "Energy-efficient dishwasher with a sleek design.",
            price: "$299.99",
        },
        {
            id: 11,
            name: "Dishwasher",
            description: "Energy-efficient dishwasher with a sleek design.",
            price: "$299.99",
        },
        {
            id: 12,
            name: "Dishwasher",
            description: "Energy-efficient dishwasher with a sleek design.",
            price: "$299.99",
        },
    ];

    const openDeleteModal = (id) => {
        setDeleteProductID(id);
    };

    const closeDeleteModal = () => {
        setDeleteProductID(null);
    };

    const handleDeleteConfirm = () => {
        console.log(`Deleting product with ID: ${deleteProductID}`);
        setDeleteProductID(null);
    };

    return (
        <div className={classes.products}>
            {products.map((product) => (
                <Product
                    key={product.id}
                    productID={product.id}
                    productName={product.name}
                    productDescription={product.description}
                    productPrice={product.price}
                />
            ))}
        </div>
    )
}