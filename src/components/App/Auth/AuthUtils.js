import {Translator} from "react-translated";
import {Field} from "redux-form";
import React from "react";

export const getTranslatedField = (name, type, placeholder) =>
    <Translator>
        {({translate}) => (
            <Field
                component={"input"}
                name={`${name}`}
                type={`${type}`}
                placeholder={translate({
                    text: `${placeholder}`,
                })}
            />
        )}
    </Translator>;

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    let hasValStyle = input.value ? " has-val" : "";
    props.className = props.className + hasValStyle;

    let error = meta.error;
    return (
        <div>
            <input  {...input}{...props}/>
            <Translator>
                {({translate}) => (
                    <span className="focus-input100" data-placeholder={translate({text: `${props.textVal}`})}/>
                )}
            </Translator>
            {hasError ? <div className={"alert-validation"}>{error}</div> : ""}

        </div>
    )
};