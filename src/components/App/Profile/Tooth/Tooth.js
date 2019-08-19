import React from "react";
import Treatment from "./Treatment/Treatment";
import Complaint from "./Complaint/Complaint";

import style from './Tooth.module.css'
import {localizeTextWithParams} from "../../../../utils/translator/Translator";
import ComplainForm from "../DentalRequestForm/ComplaintForm/ComplaintForm";
import ToothImage from "./ToothImage/ToothImage";
import TreatmentForm from "../DentalRequestForm/TreatmentForm/TreatmentForm";


const Tooth = (props) => {
    let tooth = props.tooth;

    let toothType = tooth.toothType;

    let complaints = tooth.complaints;
    let complainComponents = complaints ? complaints.map(complaint => <Complaint complaint={complaint}/>) : "";

    let treatments = tooth.treatments;
    let treatmentsComponents = treatments ? treatments.map(treatment => <Treatment treatment={treatment}/>) : "";

    let type = localizeTextWithParams("type {type}", {type: toothType});
    let number = localizeTextWithParams("generalNumber {number}", {number: tooth.toothNumber});
    let patientName = localizeTextWithParams('patientName {name}', {name: props.user.login});

    return (
        <div className={style.tooth}>
            <div className={style.gridContainer}>
                <div className={style.toothImage}>
                    <ToothImage toothType={toothType}/>
                </div>
                <div className={style.toothInformation}>
                    <h2>{type}</h2>
                    <p>{number}</p>
                    <p>{patientName}</p>
                </div>
                <div className={style.activity}>
                    <div className={style.complaints}>
                        {complainComponents}
                        {tooth ? <ComplainForm user={props.user} tooth={tooth} /> : ""}
                    </div>
                    <div className={style.treatments}>
                        {treatmentsComponents}
                        {tooth ? <TreatmentForm user={props.user} tooth={tooth}/> : ""}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Tooth;