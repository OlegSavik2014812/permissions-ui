import React from "react";
import Treatment from "./Treatment/Treatment";
import Complaint from "./Complaint/Complaint";
import good from './../../../../assets/images/teeth/goodTooth.png'
import bad from './../../../../assets/images/teeth/badTooth.png'

import style from './Tooth.module.css'
import {Translate} from "react-translated";

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
                    <h2><Translate text='type {type}' data={{type: toothType}}/></h2>
                    <p><Translate text='generalNumber {number}' data={{number: props.tooth.toothNumber}}/></p>
                    <p><Translate text='patientId {id}' data={{id: props.tooth.userId}}/></p>
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