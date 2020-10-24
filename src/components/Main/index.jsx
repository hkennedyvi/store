import React from 'react';
import './main.scss';
import productImage from '../../assets/converse.jpg';

function Main() {

    return (
        <div className="main-container">
            <div className="main-content">
                <img className="product-image" src={productImage} alt="product" />
                
                <form className="product-form" action="">
                <h1>PRODUCT NAME</h1>
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
            <div className="small-content">
                <img className="product-image" src={productImage} alt="product" />
            </div>
            <div className="small-content">
                <img className="product-image" src={productImage} alt="product" />
            </div>
            <div className="small-content">
                <img className="product-image" src={productImage} alt="product" />
            </div>
            <div className="small-content">
                <img className="product-image" src={productImage} alt="product" />
            </div>
            <div className="small-content">
                <img className="product-image" src={productImage} alt="product" />
            </div>
            <div className="small-content">
                <img className="product-image" src={productImage} alt="product" />
            </div>
            <div className="small-content">
                <img className="product-image" src={productImage} alt="product" />
            </div>
            <div className="small-content">
                <img className="product-image" src={productImage} alt="product" />
            </div>
        </div>
    );
}

export default Main;