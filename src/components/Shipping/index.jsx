import React from 'react';
import './shipping.scss';

function Shipping() {

    return (
        <div className="shipping-container">
            <div className="shipping-card">
                <div className="shipping-card-inner">
                    <div className="shipping-card-front">
                        <h1 className="shipping-card-header">
                            SHIPPING CARD
                    </h1>
                        <div>
                            <i className="fas fa-shipping-fast"></i>
                        </div>
                    </div>
                    <div className="shipping-card-back">
                        THIS IS THE BACK
                    </div>
                </div>
            </div>
            <div className="shipping-card">
                <div className="shipping-card-inner">
                    <div className="shipping-card-front">
                        <h1 className="shipping-card-header">
                            SHIPPING CARD
                    </h1>
                        <div>
                            <i className="fas fa-shipping-fast"></i>
                        </div>
                    </div>
                    <div className="shipping-card-back">
                        THIS IS THE BACK
                    </div>
                </div>
            </div>
            <div className="shipping-card">
                <div className="shipping-card-inner">
                    <div className="shipping-card-front">
                        <h1 className="shipping-card-header">
                            SHIPPING CARD
                    </h1>
                        <div>
                            <i className="fas fa-shipping-fast"></i>
                        </div>
                    </div>
                    <div className="shipping-card-back">
                        THIS IS THE BACK
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shipping;