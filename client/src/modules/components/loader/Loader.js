import React from 'react';

const Loader = () => {
    return (
        <div style={{
            position: "fixed",
            top: 0,
            backgroundColor: "rgba(255,255,255,0.9)",
            width: "100vw",
            height: '100vh',
            zIndex: "1000"
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: "100%"
            }}>
                <div className="lds-roller">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
        </div>
    );
};

export default Loader;