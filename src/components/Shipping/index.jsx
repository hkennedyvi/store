import React from 'react';
import './shipping.scss';

function Shipping() {

    return (
        <div className="shipping-container">
            <div className="shipping-card">
                <div className="shipping-card-inner">
                    <div className="shipping-card-front">
                        <div>
                            <i className="fas fa-box"></i>
                        </div>
                        <h1 className="shipping-card-header">
                            1
                        </h1>
                    </div>
                    <div className="shipping-card-back">
                        <h2 className="shipping-card-secondary-header">
                            PACK
                        </h2>
                        <p className="shipping-card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip.
                        </p>
                    </div>
                </div>
            </div>
            <div className="shipping-card">
                <div className="shipping-card-inner">
                    <div className="shipping-card-front">
                        <div>
                            <i className="fas fa-shipping-fast"></i>
                        </div>
                        <h1 className="shipping-card-header">
                            2
                        </h1>
                    </div>
                    <div className="shipping-card-back">
                        <h2 className="shipping-card-secondary-header">
                            SHIP
                        </h2>
                        <p className="shipping-card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip.
                        </p>
                    </div>
                </div>
            </div>
            <div className="shipping-card">
                <div className="shipping-card-inner">
                    <div className="shipping-card-front">
                        <div>
                            <i className="fas fa-box-open"></i>
                        </div>
                        <h1 className="shipping-card-header">
                            3
                        </h1>
                    </div>
                    <div className="shipping-card-back">
                        <h2 className="shipping-card-secondary-header">
                            ENJOY
                        </h2>
                        <p className="shipping-card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Shipping;