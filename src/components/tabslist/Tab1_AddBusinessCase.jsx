import React, { Component } from "react";
import { connect } from "react-redux";
import {StoreCtcUserData} from "../../redux/actions/ctcActions";

class Tab1_AddBusinessCase extends Component {
  render() {
    return (
      <>
        <div id="tabOne" className="tab-pane fade in active">
          <div className="container-fluid">
            <form className="form-horizontal plancodeForm">
              <div className="row">
                <div className="col-md-1">
                  <label className="control-label addformleftlable">
                    Plan Code :
                  </label>
                </div>
                <div className="col-md-3 col-sm-10 addformdleft">
                  <input
                    type="text"
                    className="form-control "
                    placeholder="RIFV"
                    id="planName-input"
                  />
                  <span className="glyphicon glyphicon-search form-control-feedback"></span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <label className="control-label addformleftlable">
                    SetID :
                  </label>
                </div>

                <div className="col-md-3 col-sm-10 addformdleft">
                  <input
                    type="text"
                    className="form-control "
                    placeholder=""
                    id="setId-input"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <label className="control-label addformleftlable">
                    Status :
                  </label>
                </div>

                <div className="col-md-3 col-sm-10 addformdleft">
                  <select className="select-dropbox" id="planCodeStatus">
                    <option>Active</option>
                  </select>
                </div>
              </div>
              <div className="row">
                {" "}
                <div id="home" className="tab-pane fade ">
                  <div className="container-fluid">
                    <div className="findEmp">
                      <table
                        id="findExitemp"
                        className="table table-bordered table-striped"
                        cellspacing="0"
                        width="100%"
                      >
                        <thead>
                          <tr>
                            <th></th>
                            <th scope="col">Business case number</th>

                            <th scope="col">Plan Code Id</th>
                            <th scope="col">Bus Case Status</th>
                            <th scope="col">Effective date/time</th>
                            <th scope="col">HRBP Manager</th>
                            <th scope="col">Section Manager</th>
                            <th scope="col">Type of RIF</th>
                            <th scope="col">Severance Calc</th>
                            <th scope="col">EID</th>
                            <th scope="col">Employee Id</th>
                            <th scope="col">Employee Name</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 ">
                  <button
                    type="button"
                    className="btn btn-primary btn-black btn-addblock btn-addOne AddPlancode"
                    id="addPlanCode"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
            <div
              className="Businesscaseplancode"
              id="planCode"
              style={{ display: "none" }}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="labelgrid-group">
                    <label className="control-label labelredTheme">
                      Plan :{" "}
                    </label>
                    <div className="labelgrid" id="planName"></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="labelgrid-group pull-right labelRspace">
                    <label className="control-label labelredTheme">
                      SetID :{" "}
                    </label>
                    <div className="labelgrid" id="setId"></div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="panel panelnoradius  panel-default">
                    <div className="panel-heading headingBlack">Plan Table</div>
                    <div className="panel-body border-panel-body">
                      <div className="planCode-Grid">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="labelgrid-group">
                              <label className="control-label labelblckTheme flex-left">
                                *Effective Date :
                              </label>
                            </div>
                          </div>

                          <div className="col-md-2 date">
                            <div
                              className="input-group input-append date"
                              id="planCodedatePicker1"
                            >
                              <input
                                type="text"
                                className="form-control"
                                name="date"
                              />
                              <span className="input-group-addon add-on">
                                <span className="glyphicon glyphicon-calendar"></span>
                              </span>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="labelgrid-group">
                              <label className="control-label labelblckTheme flex-left">
                                Status :
                              </label>
                            </div>
                          </div>

                          <div className="col-md-2">
                            <select className="select-dropbox">
                              <option>Active</option>
                            </select>
                          </div>
                          <div className="col-md-2">
                            <div className="labelgrid-group">
                              <label className="control-label labelblckTheme flex-left">
                                Batch Rpt from Date :
                              </label>
                            </div>
                          </div>

                          <div className="col-md-2 date">
                            <div
                              className="input-group input-append date"
                              id="planCodedatePicker2"
                            >
                              <input
                                type="text"
                                className="form-control"
                                name="date"
                              />
                              <span className="input-group-addon add-on">
                                <span className="glyphicon glyphicon-calendar"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div className="labelgrid-group">
                              <label className="control-label labelblckTheme flex-left">
                                Description :
                              </label>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="input-group input-append date">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Mgmt Prog Enterprise Wireline"
                              />
                            </div>
                          </div>

                          <div className="col-md-2">
                            <div className="labelgrid-group">
                              <label className="control-label labelblckTheme flex-left">
                                Batch Rpt to Date :
                              </label>
                            </div>
                          </div>

                          <div className="col-md-2 date">
                            <div
                              className="input-group input-append date"
                              id="planCodedatePicker3"
                            >
                              <input
                                type="text"
                                className="form-control"
                                name="date"
                              />
                              <span className="input-group-addon add-on">
                                <span className="glyphicon glyphicon-calendar"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div className="labelgrid-group">
                              <label className="control-label labelblckTheme flex-left">
                                *Mgt/Assoc Plan :
                              </label>
                            </div>
                          </div>

                          <div className="col-md-2">
                            <div className="input-group input-append date">
                              <select className="select-dropbox">
                                <option>Management</option>
                                <option></option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-2">
                            <div className="labelgrid-group">
                              <label className="control-label labelblckTheme flex-left">
                                Region :
                              </label>
                            </div>
                          </div>

                          <div className="col-md-2">
                            <div className="input-group input-append">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Company"
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <label className="custom-checkbox">
                              Suppress from Late Notify Email
                              <input type="checkbox" />
                              <span className="customtick"></span>
                            </label>
                            <label className="custom-checkbox">
                              Suppress from TimeSheet Reminder Email
                              <input type="checkbox" />
                              <span className="customtick"></span>
                            </label>
                            <label className="custom-checkbox">
                              Suppress from Career Svcs File
                              <input type="checkbox" />
                              <span className="customtick"></span>
                            </label>
                          </div>
                        </div>

                        <div className="row rowTopnopadd">
                          <div className="col-md-2">
                            <div className="labelgrid-group">
                              <label className="control-label labelblckTheme flex-left">
                                Redeployment Period :
                              </label>
                            </div>
                          </div>

                          <div className="col-md-2">
                            <div className="input-group input-append date">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="30"
                              />
                            </div>
                          </div>

                          <div className="col-md-2">
                            <div className="labelgrid-group">
                              <label className="control-label labelblckTheme flex-left">
                                Volunteer Periond :
                              </label>
                            </div>
                          </div>

                          <div className="col-md-2">
                            <div className="input-group input-append">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="0"
                              />
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="input-group input-append">
                              <label className="custom-checkbox">
                                Force BAU Processing
                                <input type="checkbox" checked />
                                <span className="customtick"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div className="labelgrid-group">
                              <label className="control-label labelblckTheme flex-left">
                                Severance Calc Method :
                              </label>
                            </div>
                          </div>

                          <div className="col-md-2">
                            <div className="input-group input-append date">
                              <input type="text" className="form-control" />
                            </div>
                          </div>

                          <div className="col-md-2">
                            <div className="labelgrid-group">
                              <label className="control-label labelblckTheme flex-left">
                                Starting Business Case Seq Num :
                              </label>
                            </div>
                          </div>

                          <div className="col-md-2">
                            <div className="input-group input-append">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="input-group input-append">
                              <label className="custom-checkbox fontbold">
                                Allow EEs wless Than 1 Yr Svc
                                <input type="checkbox" checked />
                                <span className="customtick"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div className="labelgrid-group">
                              <label className="control-label labelblckTheme flex-left">
                                Payroll Earning Code :
                              </label>
                            </div>
                          </div>

                          <div className="col-md-2">
                            <div className="input-group input-append date">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>

                          <div className="col-md-2">
                            <div className="labelgrid-group">
                              <label className="control-label labelblckTheme flex-left">
                                Payroll Recurring Code :
                              </label>
                            </div>
                          </div>

                          <div className="col-md-2">
                            <div className="input-group input-append">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Company"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label className="control-label labelblckTheme fontweight flex-left">
                              Last Business Case Seq Num :<span>109145</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 ">
                  <div className="clearfix">
                    <div className="pull-left">
                      <button
                        type="button"
                        className="btn btn-primary btn-save btn-black-small"
                        id="savePlan"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-search btn-black-medium"
                      >
                        Return to Search
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="clearfix">
                    <div className="pull-right">
                      <button
                        type="button"
                        className="btn btn-primary btn-add btn-black-small"
                      >
                        Add
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-update btn-black-medium "
                      >
                        Update/Display
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-history btn-black-medium"
                      >
                        Correct History
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
        </div>
      </>
    );
  }
}

export default connect(
  state => ({ userData: state.user_reducer }),
  { StoreCtcUserData }
)(Tab1_AddBusinessCase);

