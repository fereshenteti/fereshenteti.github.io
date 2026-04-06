import { FC } from "react";

interface CustomTagProps{
    text: string;
    variant?: string; 
    className?: string;
}

export const CustomTag: FC<CustomTagProps> = (props) => {

    const { text, variant, className } = props;

    return (
        <div className={`custom-tag ${variant} ${className}`}>
            {text}
        </div>
    )
}