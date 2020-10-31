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

    let defaultProduct = allProducts[0];

    const [selectedProduct, setSelectedProduct] = useState({
        productId: defaultProduct.productId,
        productName: defaultProduct.productName,
        productPrice: defaultProduct.productPrice,
        productImage: defaultProduct.productImage
    });

    function selectProduct(e) {
        let product = e.target;
        
        setSelectedProduct({
            productName: product.title,
            productImage: product.src,
            productPrice: product.getAttribute('price')
        });
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
                        <h1 className="product-name">{selectedProduct.productName}</h1>
                        <p className="product-price">{selectedProduct.productPrice}</p>
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
                {allProducts.map((item) => {
                    return (
                        <div key={item.productId} className="small-content">
                            <img
                                onClick={selectProduct}
                                className="product-image-small"
                                alt="product"
                                src={item.productImage}
                                title={item.productName}
                                price={item.productPrice}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Shop;