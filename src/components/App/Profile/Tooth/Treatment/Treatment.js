import React from "react";
import style from './Treatment.module.css'
const Treatment = (props) => {
    return (

        <div className={style.treatment}>
            <div className={style.date}>Date {props.treatment.date}</div>
            <div className={style.description}>Description: {props.treatment.description}</div>
            <div className={style.cost}>Cost {props.treatment.cost}</div>
        </div>
    )
};
export default Treatment;