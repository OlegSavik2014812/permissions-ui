import {Translate} from "react-translated";
import React from "react";

export const localizeText = (key) => <Translate text={key}/>;
export const localizeTextWithParams = (key, data) => <Translate text={key} data={data}/>;