import React, { Component } from "react";
import { connect } from "react-redux";
import BootstrapTable from "../common/BootstrapTable";

class Tab5_EmployeeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEmployeesList: [],
      addBusinessCase: props.fmsData.businessCaseData
    };
  }

  componentWillReceiveProps(props) {
    if (props && props.fmsData && props.fmsData.businessCaseData) {
      console.log("Store Reducerssss tab3", props);
      this.setState({
        addBusinessCase: props.fmsData.businessCaseData,
        selectedEmployeesList: props.fmsData.selectedEmployees
      });
    }
  }

  saveAndSubmitMethod() {
    this.props.changeCurrentTab(0, "home");
  }

  render() {
    let { plan_code, set_id, plan_table } = this.state.addBusinessCase;

    return (
      <>
        <div id="tabFive" className="tab-pane fade ">
          <div className="BusinesscaseEmployeeinfo">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <div className="labelgrid-group">
                    <label className="control-label labelredTheme">
                      Plan :
                    </label>
                    <div className="labelgrid">
                      {plan_table && plan_table.description}
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="labelgrid-group topRightlabel">
                    <label className="control-label labelredTheme">
                      Business Case number :{" "}
                    </label>
                    <div className="labelgrid">{plan_code}0001</div>
                  </div>
                </div>
              </div>

              <div id="cmbc-tab">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div
                      className="panel-heading active"
                      role="tab"
                      id="headingOne"
                    >
                      <h4 className="panel-title">
                        {" "}
                        <a
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          {" "}
                          <span>Employee Information</span>{" "}
                        </a>{" "}
                      </h4>{" "}
                    </div>
                    <div
                      id="collapseOne"
                      className="panel-collapse collapse in"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div className="emp-tableBlock">
                        <div className="commentsGrid">Table Name</div>
                        <div className="commentsTab">
                          <div className="selectedEmp">
                            <BootstrapTable checkMode="" tableData={this.state.selectedEmployeesList} tableName="selectEmps" />
                          </div>
                        </div>
                        <div className="row rowbottomspace">
                          <div className="col-md-8 ">
                            <div className="clearfix">
                              <div className="pull-left">
                                <button
                                  type="button"
                                  className="btn btn-primary btn-previous btn-black-small"
                                >
                                  Previous
                                </button>

                                <button
                                  type="button"
                                  className="btn btn-primary btn-saveDraft btn-black-medium"
                                >
                                  Save as Draft
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-saveSubmint btn-black-medium"
                                  onClick={this.saveAndSubmitMethod.bind(this)}
                                >
                                  Save and Submit
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-next btn-black-small"
                                >
                                  Print
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(state => ({ fmsData: state.fpms_reducer }))(
  Tab5_EmployeeInfo
);
