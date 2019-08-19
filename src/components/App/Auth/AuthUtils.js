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
    return (
        <div>
            <div>
                <input {...input}{...props}/>
            </div>
            {hasError ? <span>{meta.error}</span> : ""}
        </div>
    )
};