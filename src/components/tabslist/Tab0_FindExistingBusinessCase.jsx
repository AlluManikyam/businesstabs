import React, { Component } from "react";
import ExistingTable from "../common/ExistingTable";
import { connect } from "react-redux";

class Tab0_FindExistingBusinessCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEmployees: []
    };
  }

  componentWillReceiveProps(props) {
    console.log("Store Reducerssss tab000000 before", props);

    if (props && props.fmsData && props.fmsData.selectedEmployees) {
      console.log("Store Reducerssss tab000000", props);
      this.setState({
        selectedEmployees: props.fmsData.selectedEmployees
      });
    }
  }
  render() {
    let { selectedEmployees } = this.state;
    console.log("selectedEmployeesList", selectedEmployees);
    return (
      <>
        <div id="home" className="tab-pane fade ">
          <div className="container-fluid mt-5">
            {selectedEmployees && selectedEmployees.length > 0 ? (
              <ExistingTable checkMode="" />
            ) : (
              <div className="employess-data">No records found</div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default connect(state => ({ fmsData: state.fpms_reducer }))(
  Tab0_FindExistingBusinessCase
);
