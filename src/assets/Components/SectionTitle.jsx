import React from 'react';

const SectionTitle = ({sectionTitle, subTitle}) => {
    return (
        <div className="text-center m-8">
            <p>{subTitle}</p>
            <h3 className='uppercase'>{sectionTitle}</h3>
        </div>
    );
};

export default SectionTitle;