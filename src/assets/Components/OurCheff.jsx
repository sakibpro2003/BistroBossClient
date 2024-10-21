import React from 'react';
//BistroBossClient\src\assets\home
import chefServiceImg from '../home/chef-service.jpg'

const OurCheff = () => {
    return (
        <div className='relative'>
            <img src={chefServiceImg} className='h-60 lg:h-max' alt="" />
            <div className='bg-white absolute bottom-8 right-9 w-10/12 lg:bottom-1/4 lg:p-12 lg:w-1/2 lg:right-1/4 '>
                <h3 className='text-center font-bold lg:text-3xl '>Bistro Boss</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo fugiat blanditiis asperiores voluptatem tempora deleniti, praesentium facere atque quasi voluptates. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem delectus ex eaque ipsum, rerum architecto qu</p>
            </div>
        </div>
    );
};

export default OurCheff;