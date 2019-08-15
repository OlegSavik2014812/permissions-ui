import React from "react";
import style from './Treatment.module.css'
import {localizeTextWithParams} from "../../../../../utils/translator/Translator";

const Treatment = (props) => {
    let localizedDate = localizeTextWithParams("date {date}", {date: props.treatment.date});
    let localizedDescription = localizeTextWithParams("description: {description}", {description: props.treatment.description});
    let localizedCost = localizeTextWithParams("cost {cost}", {cost: props.treatment.cost});

    return (
        <div className={style.treatment}>
            {localizedDate}
            {localizedDescription}
            <div className={style.cost}>
                {localizedCost}
            </div>
        </div>
    )
};
export default Treatment;