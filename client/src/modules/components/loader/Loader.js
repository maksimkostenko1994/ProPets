import React from 'react';

const Loader = () => {
    return (
        <div style={{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh'
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
    );
};

export default Loader;