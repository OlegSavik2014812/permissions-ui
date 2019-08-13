import React from "react";
import style from './Treatment.module.css'
import {Translate} from "react-translated";

const Treatment = (props) => {
    return (

        <div className={style.treatment}>
            <div className={style.date}><Translate text='date {date}' data={{date: props.treatment.date}}/></div>
            <div className={style.description}><Translate text='Description: {description}'
                                                          data={{description: props.treatment.description}}/></div>
            <div className={style.cost}><Translate text='cost {cost}'
                                                   data={{cost: props.treatment.cost}}/></div>
        </div>
    )
};
export default Treatment;