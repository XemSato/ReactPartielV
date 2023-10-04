import React from 'react';

const Baniere = ({title, description, url}) => {
    return (
        <div className="baniere" style={{backgroundImage: `url(${url})`}}>
            <div className='Flexbox'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Baniere;