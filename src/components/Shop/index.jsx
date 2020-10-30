import React, { useState } from 'react';
import './shop.scss';
import productImage from '../../assets/converse.jpg';
// import productImage2 from '../../assets/painted_vans.jpg';

function Shop() {

    const allProducts = [
        {
            productId: 1,
            productName: 'Cool Product',
            productPrice: '$20',
            productImage: productImage
        },
        {
            productId: 2,
            productName: 'Cooler Product',
            productPrice: '$25',
            productImage: productImage
        },
        {
            productId: 3,
            productName: 'Coolest Product',
            productPrice: '$30',
            productImage: productImage
        },
        {
            productId: 4,
            productName: 'Nice Product',
            productPrice: '$20',
            productImage: productImage
        },
        {
            productId: 5,
            productName: 'Nicer Product',
            productPrice: '$25',
            productImage: productImage
        },
        {
            productId: 6,
            productName: 'Nicest Product',
            productPrice: '$30',
            productImage: productImage
        },
        {
            productId: 7,
            productName: 'Rad Product',
            productPrice: '$20',
            productImage: productImage
        },
        {
            productId: 8,
            productName: 'Radder Product',
            productPrice: '$25',
            productImage: productImage
        }
    ];

    const [selectedProduct, setSelectedProduct] = useState({
        productId: allProducts[0].productId,
        productName: allProducts[0].productName,
        productPrice: allProducts[0].productPrice,
        productImage: allProducts[0].productImage
    });

    function selectProduct(e) {
        setSelectedProduct({
            productName: e.target.title,
            productImage: e.target.src,

            // Needs debugging
            productPrice: e.target.price
        })
    };

    return (
        <div>
            <h1 className="shop-header">
                SHOP
            </h1>
            <div className="shop-container">
                <div className="main-content">
                    <img className="product-image-main" src={selectedProduct.productImage} alt="product" />
                    <form className="product-form" action="">
                        <h1>{selectedProduct.productName}</h1>
                        <p>{selectedProduct.productPrice}</p>
                        <div className="product-form-item">
                            <label className="product-form-label" htmlFor="">
                                Size:
                            <select className="product-form-select" name="" id="">
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                            </label>
                        </div>
                        <div className="product-form-item">
                            <label className="product-form-label" htmlFor="">
                                Color:
                            <select className="product-form-select" name="" id="">
                                    <option value="red">Red</option>
                                    <option value="blue">Blue</option>
                                    <option value="black">Black</option>
                                </select>
                            </label>
                        </div>
                        <input className="product-form-submit" type="submit" value="Add to Cart" />
                    </form>
                </div>
                {allProducts.map((item, index) => {
                    return (
                        <div className="small-content">
                            <img
                                onClick={selectProduct}
                                className="product-image-small"
                                alt="product"
                                src={allProducts[index].productImage}
                                productId={allProducts[index].productId}
                                title={allProducts[index].productName}
                                price={allProducts[index].productPrice}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Shop;