import React from "react";
import Treatment from "./Treatment/Treatment";
import Complaint from "./Complaint/Complaint";

import style from './Tooth.module.css'
import {localizeTextWithParams} from "../../../../utils/translator/Translator";
import ComplainForm from "../ComplaintForm/ComplaintForm";
import ToothImage from "./ToothImage/ToothImage";


const Tooth = (props) => {
    let tooth = props.tooth;

    let toothType;
    let complaints;
    let treatments;
    let toothNumber;
    if (tooth) {
        toothType = tooth.toothType;
        complaints = tooth.complaints;
        treatments = tooth.treatments;
        toothNumber = tooth.toothNumber;

    }
    let complainComponents = complaints ? complaints.map(complaint => <Complaint complaint={complaint}/>) : "";
    let treatmentsComponents = treatments ? treatments.map(treatment => <Treatment treatment={treatment}/>) : "";

    let type = localizeTextWithParams("type {type}", {type: toothType});
    let number = localizeTextWithParams("generalNumber {number}", {number: toothNumber});
    let id = localizeTextWithParams('patientName {name}', {name: props.user.login});

    return (

        <div className={style.tooth}>
            <div className={style.gridContainer}>
                <div className={style.toothImage}>
                    <ToothImage toothType={toothType}/>
                </div>
                <div className={style.toothInformation}>
                    <h2>{type}</h2>
                    <p>{number}</p>
                    <p>{id}</p>
                </div>
                <div className={style.activity}>
                    <div className={style.complaints}>
                        {complainComponents}
                        {tooth ? <ComplainForm user={props.user} tooth={tooth}/> : ""}
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