import React from "react";
import Incisor from './../../../../../assets/images/teeth/Incisor.png';
import Canine from './../../../../../assets/images/teeth/Canine.png';
import PreMolar from './../../../../../assets/images/teeth/PreMolar.png';
import Molar from './../../../../../assets/images/teeth/Molar.png'
import style from "./ToothImage.module.css";

const ToothImage = (props) => {
    let toothType = props.toothType;
    let toothImage;
    switch (toothType) {
        case('MOLAR'): {
            toothImage = Molar;
            break
        }
        case('CANINE'): {
            toothImage = Canine;
            break
        }
        case('PREMOLAR'): {
            toothImage = PreMolar;
            break
        }
        case('INCISOR'): {
            toothImage = Incisor;
            break
        }
        default: {
            break;
        }
    }
    return (<>
        <img className={style.baseToothImage} src={toothImage} alt={toothType}/>
    </>);
};
export default ToothImage;