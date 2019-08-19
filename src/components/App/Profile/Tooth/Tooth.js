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

    let complaintsRef = React.createRef();
    let treatmentsRef = React.createRef();
    let scrollDownComplaints = () => complaintsRef.current.scrollTop = complaintsRef.current.scrollHeight;
    let scrollDownTreatments = () => treatmentsRef.current.scrollTop = treatmentsRef.current.scrollHeight;
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
                    <div>
                        <div className={style.complaints} ref={complaintsRef}>
                            {complainComponents}
                        </div>
                        {tooth ? <ComplainForm scrollOnSubmit={scrollDownComplaints}/> : ""}
                    </div>
                    <div>
                        <div className={style.treatments} ref={treatmentsRef}>
                            {treatmentsComponents}
                        </div>
                        {tooth ? <TreatmentForm scrollOnSubmit={scrollDownTreatments}/> : ""}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Tooth;