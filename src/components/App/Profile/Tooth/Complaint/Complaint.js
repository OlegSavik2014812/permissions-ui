import React from "react";
import style from './Complaint.module.css'
import {Translate} from "react-translated";

const Complaint = (props) => {
    return (
        <div className={style.complaint}>
            <div className={style.date}><Translate text='date {date}' data={{date: props.complaint.date}}/></div>
            <div className={style.description}><Translate text='Description: {description}'
                                                          data={{description: props.complaint.description}}/></div>
        </div>
    )
};
export default Complaint;