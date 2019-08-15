import React, {Component} from "react";
import human_jaws from "./../../../assets/images/teeth/human_jaws.jpg";
import Tooth from "./Tooth/Tooth";
import {localizeTextWithParams} from "../../../utils/translator/Translator";
import Popover from "@material-ui/core/Popover";

/*let tooth = this.props.teeth.find(tooth => tooth.toothNumber === toothNumber);*/
class Profile extends Component {
    state = {
        tooth: null,
        anchorEl: null
    };
    handleClick = (event) => {
        let toothNumber = parseInt(event.currentTarget.alt);
        let tooth = this.props.teeth.find(tooth => toothNumber === tooth.toothNumber);
        if (tooth) {
            this.setState({tooth: tooth});
            this.setState({anchorEl: event.currentTarget});
        }

    };

    render() {
        let username = this.props.user ?
            localizeTextWithParams("profile {name}", {name: this.props.user.login}) : '';


        const handleClose = () => {
            this.setState({anchorEl: null});
        };

        const open = Boolean(this.state.anchorEl);
        const id = open ? 'simple-popover' : undefined;

        let coords = ["240,263,16","242,227,16"]

        return (<div>
                <h1>{username}</h1>
                <Popover id={id} open={open} anchorEl={this.state.anchorEl} onClose={handleClose}
                         anchorOrigin={{
                             vertical: 'button',
                             horizontal: 'center',
                         }}
                         transformOrigin={{
                             vertical: 'top',
                             horizontal: 'bottom',
                         }}
                >
                    <Tooth tooth={this.state.tooth}/>
                </Popover>
                <div>
                    <img src={human_jaws} alt={"jaws"} useMap="#image-map"/>
                    <map name="image-map">
                        <area onClick={this.handleClick} target="_top" alt="1" title="1" aria-describedby={id}
                              coords="240,263,16"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="2" title="2" aria-describedby={id}
                              coords="242,227,16"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="3" title="3" aria-describedby={id}
                              coords="248,193,16"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="4" title="4" aria-describedby={id}
                              coords="259,161,14"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="5" title="5" aria-describedby={id}
                              coords="273,132,14"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="6" title="6" aria-describedby={id}
                              coords="289,108,13"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="7" title="7" aria-describedby={id}
                              coords="309,87,12"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="8" title="8" aria-describedby={id}
                              coords="339,77,14"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="9" title="9" aria-describedby={id}
                              coords="372,77,13"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="10" title="10" aria-describedby={id}
                              coords="404,87,13"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="11" title="11" aria-describedby={id}
                              coords="423,110,13"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="12" title="12" aria-describedby={id}
                              coords="438,135,14"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="13" title="13" aria-describedby={id}
                              coords="455,164,15"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="14" title="14" aria-describedby={id}
                              coords="466,194,15"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="15" title="15" aria-describedby={id}
                              coords="471,229,16"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="16" title="16" aria-describedby={id}
                              coords="466,265,15"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="17" title="17" aria-describedby={id}
                              coords="467,318,15"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="18" title="18" aria-describedby={id}
                              coords="471,353,13"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="19" title="19" aria-describedby={id}
                              coords="466,390,15"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="20" title="20" aria-describedby={id}
                              coords="451,424,16"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="21" title="21" aria-describedby={id}
                              coords="430,458,15"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="22" title="22" aria-describedby={id}
                              coords="410,481,11"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="23" title="23" aria-describedby={id}
                              coords="392,492,11"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="24" title="24" aria-describedby={id}
                              coords="370,500,9"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="25" title="25" aria-describedby={id}
                              coords="347,501,10"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="26" title="26" aria-describedby={id}
                              coords="322,494,10"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="27" title="27" aria-describedby={id}
                              coords="303,482,11"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="28" title="28" aria-describedby={id}
                              coords="284,458,14"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="29" title="29" aria-describedby={id}
                              coords="266,428,16"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="30" title="30" aria-describedby={id}
                              coords="250,394,17"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="31" title="31" aria-describedby={id}
                              coords="243,357,16"
                              shape="circle"/>
                        <area onClick={this.handleClick} target="_top" alt="32" title="32" aria-describedby={id}
                              coords="244,319,18"
                              shape="circle"/>
                    </map>
                </div>
            </div>
        )
    }
}

export default Profile;