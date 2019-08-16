import React, {Component} from "react";
import human_jaws from "./../../../assets/images/teeth/human_jaws.jpg";
import Tooth from "./Tooth/Tooth";
import {localizeTextWithParams} from "../../../utils/translator/Translator";
import Popover from "@material-ui/core/Popover";

/*let tooth = this.props.teeth.find(tooth => tooth.toothNumber === toothNumber);*/
class Profile extends Component {
    state = {
        selectedTooth: null,
        anchor: null,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.selectedTooth !== this.props.selectedTooth) {
            this.setState({selectedTooth: this.props.selectedTooth});
        }
    };

    handleClick = (event) => {
        let anchor = event.currentTarget;
        let toothNumber = parseInt(anchor.alt);
        let userTooth = this.props.userTeeth.find(tooth => toothNumber === tooth.toothNumber);
        if (userTooth) {
            this.setState({selectedTooth: userTooth});
        } else {
            this.props.getToothInfo(toothNumber);
        }
        this.setState({anchor: anchor});
    };

    handleClose = () => {
        this.setState({anchor: null});
    };

    render() {
        let username = this.props.user ? localizeTextWithParams("profile {name}", {name: this.props.user.login}) : '';
        const open = Boolean(this.state.anchor);
        const id = open ? 'simple-popover' : undefined;
        let coords = [
            "240,263,16", "242,227,16", "248,193,16", "259,161,14",
            "273,132,14", "289,108,13", "309,87 ,12", "339,77 ,14",
            "372,77 ,13", "404,87 ,13", "423,110,13", "438,135,14",
            "455,164,15", "466,194,15", "471,229,16", "466,265,15",
            "467,318,15", "471,353,13", "466,390,15", "451,424,16",
            "430,458,15", "410,481,11", "392,492,11", "370,500,9",
            "347,501,10", "322,494,10", "303,482,11", "284,458,14",
            "266,428,16", "250,394,17", "243,357,16", "244,319,18"
        ];
        let toothAreaMap = coords.map(coordinate => {
            let alt = `${coords.indexOf(coordinate) + 1}`;

            return <area onClick={this.handleClick} target="_top" alt={alt} title={alt} aria-describedby={id}
                         coords={coordinate} shape="circle"/>
        });
        return (
            <div>
                <h1>{username}</h1>
                <Popover id={id} open={open} anchorEl={this.state.anchor} onClose={this.handleClose}
                         anchorOrigin={{vertical: 'center', horizontal: 'center',}}
                         transformOrigin={{vertical: 'top', horizontal: 'bottom',}}>
                    <Tooth tooth={this.state.selectedTooth} user={this.props.user}/>
                </Popover>
                <div>
                    <img src={human_jaws} alt={"jaws"} useMap={"#image-map"}/>
                    <map name="image-map">
                        {toothAreaMap}
                    </map>
                </div>
            </div>
        )
    }
}

export default Profile;