import React from 'react';

const SectionTitle = ({title,subTitle}) => {
    return (
        <div className='text-center'>
            <h2 className='text-yellow-600 border-b-4'>{subTitle}</h2>
            
            <h2 className=' text-4xl border-b-4'>{title}</h2>
        </div>
    );
};

export default SectionTitle;