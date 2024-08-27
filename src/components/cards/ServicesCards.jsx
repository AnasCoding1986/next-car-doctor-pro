
import Image from 'next/image';
import React from 'react';

const ServicesCards = ({service}) => {

    const {title,img,price,description} = service || {};
    console.log(img);
    

    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <Image height={120} width={120} src={img} alt={title}></Image>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-between items-center">
                        <h6 className='text-primary font-semibold'>Price: ${price}</h6>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCards;