import React, {Component} from 'react'

import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import {complainOnTooth} from "../../../../redux/reducers/teethReducer";

class ComplainForm extends Component {
    state = {
        tooth: null,
        user: null
    };

    componentDidMount() {
    debugger
        this.setState({
            tooth: this.props.tooth,
            user: this.props.user
        })
    }

    onSubmit = (formData) => {
        this.props.complainOnTooth(this.state.user.userId, this.state.tooth.toothNumber, formData.complaint)
    };

    render() {
        let tooth = this.props.tooth;
        let user = this.props.user;
        return (
            <div>
                <form>
                    <div>
                    </div>
                    <div>
                        {user.login}
                    </div>
                    <div>
                        {tooth.toothType}
                    </div>
                    <div>
                        <textarea name="complaint"/>>
                    </div>
                    <div>
                        <Button href={""} onClick={this.onSubmit}>Complain</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {complainOnTooth})(ComplainForm);