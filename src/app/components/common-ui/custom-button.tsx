import { Button } from "@mui/material";
import { FC } from "react";
import { ReactSVG } from 'react-svg';

interface MyCustomButtonProps{
    btnIcon: any;
    btnText: string;
    className?: string;
    onClick?: () => void;
}

export const MyCustomButton: FC<MyCustomButtonProps> = (props) => {

    const { btnIcon, btnText, className, onClick } = props;

    return (
        <Button variant="outlined" className={`my-custom-button ${className}`} onClick={onClick}>
            <ReactSVG src={btnIcon} className="custom-button-icon"/>
            <span className="custom-button-text">{btnText}</span>
        </Button>
    )
}