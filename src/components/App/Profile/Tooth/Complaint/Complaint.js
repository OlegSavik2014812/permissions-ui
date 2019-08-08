import React from "react";
import style from './Complaint.module.css'

const Complaint = (props) => {
    return (
        <div className={style.complaint}>
            <div className={style.date}>{props.complaint.date}</div>
            <div className={style.description}>{props.complaint.description}</div>
        </div>
    )
};
export default Complaint;