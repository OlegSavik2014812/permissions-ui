import React, {Component} from "react";
import Tooth from "./Tooth/Tooth";
import human_jaws from "./../../../assets/images/teeth/human_jaws.jpg";
import Popup from "reactjs-popup";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            tooth: null
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({open: true});
    }

    closeModal() {
        this.setState({open: false});
    }

    getUserTooth(toothNumber) {

        let tooth = this.props.teeth.find(tooth => tooth.toothNumber === toothNumber);
        debugger;
        if (tooth) {
            this.setState({tooth: tooth});
            this.openModal();
        } else {
            return " ";
        }
    }

    render() {
        let username = this.props.user ? this.props.user.login + `'s Profile` : '';


        return (<div>
                <h1>{username}</h1>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}>
                    <Tooth tooth={this.state.tooth}/>
                </Popup>

                <img src={human_jaws} alt={"jaws"} usemap="#image-map"/>
                <map name="image-map">
                    <area onClick={() => this.getUserTooth(1)} target="_top" alt="1" title="1"
                          coords="240,263,16"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(2)} target="_top" alt="2" title="2"
                          coords="242,227,16"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(3)} target="_top" alt="3" title="3"
                          coords="248,193,16"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(4)} target="_top" alt="4" title="4"
                          coords="259,161,14"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(5)} target="_top" alt="5" title="5"
                          coords="273,132,14"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(6)} target="_top" alt="6" title="6"
                          coords="289,108,13"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(7)} target="_top" alt="7" title="7"
                          coords="309,87,12"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(8)} target="_top" alt="8" title="8"
                          coords="339,77,14"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(9)} target="_top" alt="9" title="9"
                          coords="372,77,13"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(10)} target="_top" alt="10" title="10"
                          coords="404,87,13"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(11)} target="_top" alt="11" title="11"
                          coords="423,110,13"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(12)} target="_top" alt="12" title="12"
                          coords="438,135,14"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(13)} target="_top" alt="13" title="13"
                          coords="455,164,15"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(14)} target="_top" alt="14" title="14"
                          coords="466,194,15"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(15)} target="_top" alt="15" title="15"
                          coords="471,229,16"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(16)} target="_top" alt="16" title="16"
                          coords="466,265,15"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(17)} target="_top" alt="17" title="17"
                          coords="467,318,15"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(18)} target="_top" alt="18" title="18"
                          coords="471,353,13"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(19)} target="_top" alt="19" title="19"
                          coords="466,390,15"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(20)} target="_top" alt="20" title="20"
                          coords="451,424,16"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(21)} target="_top" alt="21" title="21"
                          coords="430,458,15"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(22)} target="_top" alt="22" title="22"
                          coords="410,481,11"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(23)} target="_top" alt="23" title="23"
                          coords="392,492,11"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(24)} target="_top" alt="24" title="24"
                          coords="370,500,9"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(25)} target="_top" alt="25" title="25"
                          coords="347,501,10"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(26)} target="_top" alt="26" title="26"
                          coords="322,494,10"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(27)} target="_top" alt="27" title="27"
                          coords="303,482,11"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(28)} target="_top" alt="28" title="28"
                          coords="284,458,14"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(29)} target="_top" alt="29" title="29"
                          coords="266,428,16"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(30)} target="_top" alt="30" title="30"
                          coords="250,394,17"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(31)} target="_top" alt="31" title="31"
                          coords="243,357,16"
                          shape="circle"/>
                    <area onClick={() => this.getUserTooth(32)} target="_top" alt="32" title="32"
                          coords="244,319,18"
                          shape="circle"/>
                </map>
            </div>
        )
    }
}

export default Profile;