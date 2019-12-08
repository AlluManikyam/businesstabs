import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert"
import {storeBusinessCaseData} from "../../redux/actions/fmsActions";
import commonUtils from '../../utils/ApiCalls.js'


class Tab1_AddBusinessCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addBusinessCase: {
        plan_code: "",
        set_id: "",
        status: "Active",
        plan_table: {
          effective_date: "",
          status: "Active",
          batch_rpt_from_date: "",
          batch_rpt_to_date: "",
          description: "",
          mgt_associate_plan: "Management",
          region: "",
          redeployment_period: "",
          volunteer_periond: "",
          severance_calc_method: "",
          starting_business_case_seq_num: "",
          payroll_earning_code: "",
          payroll_recurring_code: "",
          last_business_case_seq_num: "",
          suppress_from_late_notify_email: false,
          suppress_from_timesheet_reminder_email: false,
          suppress_from_career_svcs_file: false,
          force_bau_processing: true,
          allow_ees_wless_than_oneyear_svc: true
        }
      }
    };

    console.log("Store Reducerssss",this.props)
  }

  onChangeValues(e) {
    let { addBusinessCase } = this.state;
    addBusinessCase[e.target.name] = e.target.value;
    this.setState({
      addBusinessCase
    });
  }

  onChangePlanCodeValues(e) {
    let { addBusinessCase } = this.state;
    let { plan_table } = addBusinessCase;
    plan_table[e.target.name] = e.target.value;
    this.setState({
      addBusinessCase
    });
  }

  addBusinessCaseMethod() {
    const effective_date = document.getElementById("effective_date").value;
    const batch_rpt_from_date = document.getElementById("batch_rpt_from_date")
      .value;
    const batch_rpt_to_date = document.getElementById("batch_rpt_to_date")
      .value;
    let { addBusinessCase } = this.state;
    let { plan_table } = addBusinessCase;
    plan_table.effective_date = effective_date;
    plan_table.batch_rpt_from_date = batch_rpt_from_date;
    plan_table.batch_rpt_to_date = batch_rpt_to_date;
    document.getElementById("errorPlan").innerHTML=""
    document.getElementById("errorSetId").innerHTML=""
    if(addBusinessCase.plan_code===""){
      document.getElementById("errorPlan").innerHTML="Please Enter Plancode"
      window.scrollTo(0,0)
    }
    if(addBusinessCase.set_id===""){
      document.getElementById("errorSetId").innerHTML="Please Enter Set ID"
      window.scrollTo(0,0)
    }
    if(addBusinessCase.plan_code!==""&&addBusinessCase.set_id!==""){
     
    // API calling
    commonUtils.storeAddBusinessCase(addBusinessCase).then((data)=>{
      if (data) {
        swal({
          title: "Plancode saved successfully",
          icon: "success",
        })
        .then(() => {
          this.props.storeBusinessCaseData(addBusinessCase);
          this.props.changeCurrentTab(2,"tabTwo")
        })
      }

    }).catch((err)=>{
      console.log("error",err)

    })
    }
    
   
  }

  render() {
    let { plan_code, set_id, plan_table } = this.state.addBusinessCase;

    return (
      <>
        <div id="tabOne" className="tab-pane fade in active">
          <div className="container-fluid">
            <form
              className="form-horizontal plancodeForm"
              id="form_businesscase"
            >
              <div className="row align-items-center">
                <div className="col-md-1">
                  <label className="control-label addformleftlable">
                    Plan Code :
                  </label>
                </div>
                <div className="col-md-3 col-sm-10 addformdleft">
                  <input
                    type="text"
                    className="form-control "
                    name="plan_code"
                    onChange={this.onChangeValues.bind(this)}
                    value={plan_code}
                    placeholder="RIFV"
                    id="planName-input"
                  />
                
                  <span className="glyphicon glyphicon-search form-control-feedback"></span>
                </div>
                <div className="error" id="errorPlan"></div>
                
              </div>
              <div className="row align-items-center">
                <div className="col-md-1">
                  <label className="control-label addformleftlable">
                    SetID :
                  </label>
                </div>

                <div className="col-md-3 col-sm-10 addformdleft">
                  <input
                    type="text"
                    className="form-control"
                    name="set_id"
                    onChange={this.onChangeValues.bind(this)}
                    value={set_id}
                    placeholder=""
                    id="setId-input"
                  />
                </div>
                <div className="error" id="errorSetId"></div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <label className="control-label addformleftlable">
                    Status :
                  </label>
                </div>

                <div className="col-md-3 col-sm-10 addformdleft">
                  <select
                    className="select-dropbox"
                    onChange={this.onChangeValues.bind(this)}
                    name="status"
                    id="planCodeStatus"
                  >
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
                      Plan :
                    </label>
                    <div className="labelgrid" id="planName">{plan_code}</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="labelgrid-group pull-right labelRspace">
                    <label className="control-label labelredTheme">
                      SetID :
                    </label>
                    <div className="labelgrid" id="setId">{set_id}</div>
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
                                id="effective_date"
                                onChange={this.onChangePlanCodeValues.bind(
                                  this
                                )}
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
                            <select
                              className="select-dropbox"
                              onChange={this.onChangePlanCodeValues.bind(this)}
                              name="status"
                            >
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
                                id="batch_rpt_from_date"
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
                                value={plan_table.description}
                                name="description"
                                onChange={this.onChangePlanCodeValues.bind(
                                  this
                                )}
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
                                id="batch_rpt_to_date"
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
                              <select
                                className="select-dropbox"
                                onChange={this.onChangePlanCodeValues.bind(
                                  this
                                )}
                                name="mgt_associate_plan"
                              >
                                <option>Management</option>
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
                                name="region"
                                value={plan_table.region}
                                onChange={this.onChangePlanCodeValues.bind(
                                  this
                                )}
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
                                name="redeployment_period"
                                value={plan_table.redeployment_period}
                                onChange={this.onChangePlanCodeValues.bind(
                                  this
                                )}
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
                                name="volunteer_periond"
                                value={plan_table.volunteer_periond}
                                onChange={this.onChangePlanCodeValues.bind(
                                  this
                                )}
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
                              <input
                                type="text"
                                className="form-control"
                                name="severance_calc_method"
                                value={plan_table.severance_calc_method}
                                onChange={this.onChangePlanCodeValues.bind(
                                  this
                                )}
                              />
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
                                name="starting_business_case_seq_num"
                                value={
                                  plan_table.starting_business_case_seq_num
                                }
                                onChange={this.onChangePlanCodeValues.bind(
                                  this
                                )}
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
                                name="payroll_earning_code"
                                value={plan_table.payroll_earning_code}
                                onChange={this.onChangePlanCodeValues.bind(
                                  this
                                )}
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
                                name="payroll_recurring_code"
                                value={plan_table.payroll_recurring_code}
                                onChange={this.onChangePlanCodeValues.bind(
                                  this
                                )}
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
                        onClick={this.addBusinessCaseMethod.bind(this)}
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
  state => ({ fmsData: state.fpms_reducer }),
  { storeBusinessCaseData }
)(Tab1_AddBusinessCase);

