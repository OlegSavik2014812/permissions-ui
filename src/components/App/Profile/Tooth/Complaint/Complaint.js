import React from "react";
import style from './Complaint.module.css'
import {localizeTextWithParams} from "../../../../../utils/translator/Translator";

const Complaint = (props) => {
    let localizedDate = localizeTextWithParams("date {date}", {date: props.complaint.date});
    let localizedDescription = localizeTextWithParams("Description: {description}", {description: props.complaint.description});
    return (
        <div className={style.complaint}>
            <div className={style.date}>
                {localizedDate}
            </div>
            <div className={style.description}>
                {localizedDescription}
            </div>
        </div>
    )
};
export default Complaint;