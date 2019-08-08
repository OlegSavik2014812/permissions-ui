import React from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUserTeeth} from "../../../redux/reducers/teethReducer";
import Tooth from "./Tooth/Tooth";

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger;
        let matchedUserId = this.props.match.params.userId;
        this.props.getUserTeeth(matchedUserId);
    }

    render() {
        return (<div>
                {this.props.teeth.map(tooth => <Tooth tooth={tooth}/>)}
            </div>
        )
    }

}

let mapStateToProps = (state) => ({
    teeth: state.teethPage.teeth
});

export default compose(
    withRouter,
    connect(mapStateToProps, {getUserTeeth})
)(ProfileContainer);