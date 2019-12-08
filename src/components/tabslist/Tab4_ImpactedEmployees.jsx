import React, { Component } from "react";
import BootstrapTable from "../common/BootstrapTable";

class Tab4_ImpactedEmployees extends Component {
  render() {
    return (
      <>
        <div id="tabFour" className="tab-pane fade ">
          <div className="BusinesscaseImpactedemp">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <div className="labelgrid-group">
                    <label className="control-label labelredTheme">
                      Plan :
                    </label>
                    <div className="labelgrid">
                      Mgmt Prog Enterprise Wireline
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="labelgrid-group topRightlabel">
                    <label className="control-label labelredTheme">
                      Business Case number :{" "}
                    </label>
                    <div className="labelgrid">RIFV109147</div>
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
                          <span>Impacted Organization</span>{" "}
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
                        <div className="commentsGrid">Employee</div>
                        <div className="commentsTab">
                          <div className="selectedEmp">
                            <BootstrapTable />
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
                                  className="btn btn-primary btn-next btn-black-small"
                                >
                                  Next
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
                                >
                                  Save and Submit
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

export default Tab4_ImpactedEmployees;
