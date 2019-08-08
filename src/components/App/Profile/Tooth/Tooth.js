import React from "react";
import Treatment from "./Treatment/Treatment";
import Complaint from "./Complaint/Complaint";

import Molar from './../../../../assets/images/teeth/Molar.png'
import Canine from './../../../../assets/images/teeth/Canine.png'
import Incisor from './../../../../assets/images/teeth/Incisor.png'
import PreMolar from './../../../../assets/images/teeth/PreMolar.png'
import good from './../../../../assets/images/teeth/goodTooth.png'
import bad from './../../../../assets/images/teeth/badTooth.png'

import style from './Tooth.module.css'

const Tooth = (props) => {
    let toothType = props.tooth.toothType;


    let toothImage = null;
    /*switch (toothType) {
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
    }*/

    toothImage = props.tooth.complaints.length === 0 ? good : bad;

    return (

        <div className={style.tooth}>
            <div className={style.gridContainer}>
                <div className={style.toothImage}>
                    <img className={style.toothImage} src={toothImage} alt={toothType}/>
                </div>
                <div className={style.toothInformation}>
                    <h2> {toothType}</h2>
                    <p>Tooth general number {props.tooth.toothNumber}</p>
                    <p>Patient id {props.tooth.userId}</p>
                </div>
                <div className={style.activity}>
                    <div className={style.complaints}>
                        {props.tooth.complaints.map(complaint => <Complaint complaint={complaint}/>)}
                    </div>
                    <div className={style.treatments}>
                        {props.tooth.treatments.map(treatment => <Treatment treatment={treatment}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Tooth;