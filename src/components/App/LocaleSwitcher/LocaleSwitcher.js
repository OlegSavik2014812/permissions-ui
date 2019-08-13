import React from "react";
import {Translator} from "react-translated";
import {connect} from "react-redux";
import {setLang} from "../../../redux/reducers/langReducer";

const localize = (text) => <Translator>
    {({translate}) => (
        <option
            placeholder={translate({
                text: text
            })}
        />
    )}</Translator>;

class LocaleSwitcher extends React.Component {
    handleChange(e) {
    }

    render() {
        return (
            <p>
                <span>Switch Locale:</span>
                <select onChange={this.handleChange}>
                    <option value={'en'}>{localize('english')}</option>
                    <option value={'ru'}>{localize('russian')}</option>
                </select>
            </p>
        );
    }
}

export default connect(null, {setLang})(LocaleSwitcher);