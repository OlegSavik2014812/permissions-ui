import React from "react";
import Treatment from "./Treatment/Treatment";
import Complaint from "./Complaint/Complaint";
import good from './../../../../assets/images/teeth/goodTooth.png'
import bad from './../../../../assets/images/teeth/badTooth.png'

import style from './Tooth.module.css'
import {localizeTextWithParams} from "../../../../utils/translator/Translator";
import ComplainForm from "../ComplaintForm/ComplaintForm";

const Tooth = (props) => {
    let toothType = props.tooth.toothType;


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
    let toothImage = null;

    let complaints = props.tooth.complaints;
    let treatments = props.tooth.treatments;

    if (complaints && complaints.length !== 0) {
        toothImage = bad;
    } else {
        toothImage = good;
    }
    let complainComponents = complaints ? complaints.map(complaint => <Complaint complaint={complaint}/>) : "";
    let treatmentsComponents = treatments ? treatments.map(treatment => <Treatment treatment={treatment}/>) : "";

    let type = localizeTextWithParams("type {type}", {type: toothType});
    let number = localizeTextWithParams("generalNumber {number}", {number: props.tooth.toothNumber});
    let id = localizeTextWithParams("patientId {id}", {id: props.tooth.userId});

    return (

        <div className={style.tooth}>
            <div className={style.gridContainer}>
                <div className={style.toothImage}>
                    <img className={style.toothImage} src={toothImage} alt={type}/>
                </div>
                <div className={style.toothInformation}>
                    <h2>{type}</h2>
                    <p>{number}</p>
                    <p>{id}</p>
                </div>
                <div className={style.activity}>
                    <div className={style.complaints}>
                        {complainComponents}
                        <ComplainForm user={props.user} tooth={props.tooth}/>
                    </div>
                    <div className={style.treatments}>
                        {treatmentsComponents}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Tooth;