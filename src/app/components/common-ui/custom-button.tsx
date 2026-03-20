import { Button } from "@mui/material";
import { FC, RefObject } from "react";
import { ReactSVG } from 'react-svg';
import { ClashDisplay } from "../../../fonts/fonts";

interface MyCustomButtonProps{
    btnIcon: any;
    btnText: string;
    className?: string;
    ref?: RefObject<HTMLButtonElement | null>;
    id?: string;
    onClick?: () => void;
}

export const MyCustomButton: FC<MyCustomButtonProps> = (props) => {

    const { btnIcon, btnText, className, ref, id, onClick } = props;

    return (
        <Button ref={ref} id={id} variant="outlined" className={`my-custom-button ${className}`} onClick={onClick}>
            <ReactSVG src={btnIcon} className="custom-button-icon"/>
            <span className={"custom-button-text " + ClashDisplay.className}>{btnText}</span>
        </Button>
    )
}