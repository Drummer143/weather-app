import React from 'react';

type AdditionalInfoItemProps = {
    text: string | number
    bottomText: string
};

const AdditionalInfoItem: React.FC<AdditionalInfoItemProps> = ({ bottomText, text }) => {

    return (
        <div className='w-20'>
            <p>{text}</p>
            <p>{bottomText}</p>
        </div>
    )
}

export default AdditionalInfoItem;