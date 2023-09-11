import {MouseEventHandler} from "react";
export interface CustomButtonProps{
    title :string;
    containerStyles?: string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean;

}
export interface SearchManufacturerProps{
    manufacturer:String,
    setManufacturer:(manufacturer:string)=>void;
}

export interface CarProps{
    city_mpg:number;
class:string;
combination_mpnumber:number;
cylindenumber:number;
displacementnumber:number;
drive:string;
fuel_type:string;
highway_mpnumber:number;
make:string;
model:string;
transmission:string;
year:number;
}