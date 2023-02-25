import React from 'react';

type GoogleMaterialIconProps = {
    iconName: string;

    size?: string | number;
    color?: string;
    FILL?: 0 | 1;
    wght?: number;
    GRAD?: number;
    opsz?: number;
    className?: string;

    onClick?: React.MouseEventHandler<HTMLSpanElement>
};

const GoogleMaterialIcon: React.FC<GoogleMaterialIconProps> = ({
    size = 1,
    color,
    className,
    iconName,
    FILL = 0,
    GRAD = 0,
    opsz = 48,
    wght = 400,
    onClick
}) => {
    return (
        <span
            onClick={onClick}
            className={'aspect-square'
                .concat(' material-symbols-outlined')
                .concat(className ? ` ${className}` : '')}
            style={{
                fontSize: typeof size === 'number' ? `${size}rem` : size,
                color,
                fontVariationSettings: `'FILL' ${FILL}, 'wght' ${wght}, 'GRAD' ${GRAD}, 'opsz' ${opsz}`
            }}
        >
            {iconName}
        </span>
    );
};
export default GoogleMaterialIcon;
