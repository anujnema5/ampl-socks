import React from 'react';
import clsx from 'clsx';


const Text = ({ variant, children, className }) => {
    const defaultColor = "";

    const renderText = () => {
        const isCustomColorProvided = className && className.match(/text-(\w+)-(\d+)/);
        switch (variant) {
            case 'p':
                return <p className={clsx("text-base font-medium", !isCustomColorProvided && defaultColor, className)}>{children}</p>;
            case 'small':
                return <small className={clsx("text-sm font-semibold", !isCustomColorProvided && defaultColor, className)}>{children}</small>;
            case 'span':
                return <span className={clsx("text-sm font-semibold", !isCustomColorProvided && defaultColor, className)}>{children}</span>;
            default:
                return <p className={clsx("text-base", !isCustomColorProvided && defaultColor, className)}>{children}</p>; // default to 'p'
        }
    };

    return <>{renderText()}</>;
};

export default Text;