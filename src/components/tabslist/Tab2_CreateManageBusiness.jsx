import React,{Component} from 'react';
import { connect } from "react-redux";
import store from "../../redux/store";

import {storeManageBusinessCaseData} from "../../redux/actions/fmsActions";


class Tab2_CreateManageBusiness extends Component{
  constructor(props) {
    super(props);
    this.state = {
    addBusinessCase:props.fmsData.businessCaseData,
    manageBusinessCase: {
    plan: "",
    business_case_number: "",
    business_case_data: {
      line_of_business_description: "Verizon orporate",
      business_case_status: "Draft",
      business_unit_vp: "TECH, ARCH, & PLNG/Uiots YI, laaayt",
      contract_company_name: "",
      cancellation_date: "",
      selection_manager:"",
      hrbp:"",
      hrbp_manager:"",
      hrbp_backup_support:"",
      servarance_sme:"",
      legal_contact:""
    },
    business_case_data_management: {
      change_in_business_status:"Active",
      too_meet_budjetry_initiates: "Active",
      status:"Active",
      notification_date: "02/12/2019",
      off_payroll_date: "20/12/2019",
      notification_period_plan: "20",
      last_day_worked: "1"
    },
    rif_information: {
      type_of_rif: "",
      individual: false,
      rate_and_rank: false,
      functional_group_elimination: false,
      job_code: "JD210",
      career_band: "",
      number_of_employees_currently_performing_work: "",
      number_to_be_reduced: ""
    },
    comments: {
      date_time_entered: "",
      entered_by: "",
      comment: "",
      created_by: "",
      created_date_time: "",
      updated_by: "",
      last_update_date_time: ""
    }
  }
}

  
}

componentWillReceiveProps(props){
  if(props&&props.fmsData&&props.fmsData.businessCaseData){
    console.log("Store Reducerssss Tab2",props)
    this.setState({
      addBusinessCase:props.fmsData.businessCaseData
    })
  }
}
onChangeBusinessCaseDataValues(e) {
  let { manageBusinessCase } = this.state;
  let { business_case_data } = manageBusinessCase;
  business_case_data[e.target.name] = e.target.value;
  this.setState({
    manageBusinessCase
  });
}

onChangeBusinessCaseDataManagementValues(e) {
  let { manageBusinessCase } = this.state;
  let { business_case_data_management } = manageBusinessCase;
  business_case_data_management[e.target.name] = e.target.value;
  this.setState({
    manageBusinessCase
  });
}

onChangeCommentsValues(e){
  let { manageBusinessCase } = this.state;
  let { comments } = manageBusinessCase;
  comments[e.target.name] = e.target.value;
  this.setState({
    manageBusinessCase
  });
}

  saveAsDraftMethod() {
    const off_payroll_date = document.getElementById("off_payroll_date")
      .value;
    let { manageBusinessCase } = this.state
    let { business_case_data_management } = manageBusinessCase;
    business_case_data_management.off_payroll_date = off_payroll_date;
    this.props.storeManageBusinessCaseData(manageBusinessCase);
    console.log("stprrrrrr",store.getState())
    this.props.changeCurrentTab(3, "tabThree")

  }

    render(){
      let {plan, business_case_number,business_case_data,business_case_data_management, comments} = this.state.manageBusinessCase
      let { plan_code, set_id, plan_table } = this.state.addBusinessCase;
        return (
            <>
                <div id="tabTwo" className="tab-pane fade ">
                <div className="BusinesscaseData">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="labelgrid-group">
                          <label className="control-label labelredTheme">
                            Plan :{plan}
                          </label>
                          <div className="labelgrid">
                            Plan: Mgmt Prog Enterprise Wireline
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="labelgrid-group topRightlabel">
                          <label className="control-label labelredTheme">
                            Business Case Number :{business_case_number}
                          </label>
                          <div className="labelgrid">New</div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content">
                      <div id="cmbc-tab">
                        <div className="cdard-block">
                          <div className="bcdTapwrapper center-block">
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
                                      <span>Business Case Data</span>{" "}
                                    </a>{" "}
                                  </h4>{" "}
                                </div>
                                <div
                                  id="collapseOne"
                                  className="panel-collapse collapse in"
                                  role="tabpanel"
                                  aria-labelledby="headingOne"
                                >
                                  <div className="panel-headGroup">
                                    <div className="group-block">
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="labelgrid-group">
                                            <div className="col-sm-6">
                                              <label className="control-label labelredTheme flex-left">
                                                Line of Business Description :
                                              </label>
                                            </div>
                                            <div className="col-sm-6">
                                              <div className="labelgrid flex-left">
                                                {plan_table&&plan_table.description}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="labelgrid-group">
                                            <div className="col-sm-5">
                                              <label className="control-label labelredTheme flex-left">
                                                Bus Case Status :
                                              </label>
                                            </div>
                                            <div className="col-sm-7">
                                              <div className="labelgrid flex-left">
                                                Draft
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="labelgrid-group">
                                            <div className="col-sm-5">
                                              <label className="control-label labelredTheme flex-left">
                                                Business Unit/VP :
                                              </label>
                                            </div>
                                            <div className="col-sm-7">
                                              <div className="labelgrid flex-left">
                                                TECH, ARCH, & PLNG/Uiots YI,
                                                laaayt S
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="labelgrid-group">
                                            <div className="col-sm-5">
                                              <label className="control-label labelredTheme flex-left">
                                                Contract Company Name :
                                              </label>
                                            </div>
                                            <div className="col-sm-7">
                                              <div className="labelgrid flex-left">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={business_case_data.contract_company_name}
                                name="contract_company_name"
                                onChange={this.onChangeBusinessCaseDataValues.bind(
                                  this
                                )}
                                                />{" "}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-6"></div>
                                        <div className="col-md-6">
                                          <div className="labelgrid-group">
                                            <div className="col-sm-5">
                                              <label className="control-label labelredTheme flex-left">
                                                Cancellation Date :
                                              </label>
                                            </div>
                                            <div className="col-sm-7 date">
                                              <div
                                                className="input-group input-append date leftPickerDisable"
                                                id="datePickeddr"
                                              >
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  disabled
                                                  name="date"
                                                  
                                                />{" "}
                                                <span className="input-group-addon add-on">
                                                  <span className="glyphicon glyphicon-calendar"></span>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Data Form*/}
                                  <div className="GridFrom">
                                    <div className="row">
                                      <div className="col-md-3">
                                        <div className="form-group">
                                          <label>
                                            Selection Manager
                                            <span className="pull-right-align">
                                              :
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="input-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                            value={business_case_data.selection_manager}
                                            name="selection_manager"
                                            onChange={this.onChangeBusinessCaseDataValues.bind(
                                              this
                                            )}
                                          />
                                          <div className="input-group-btn">
                                            <button
                                              className="btn btn-default"
                                              type="submit"
                                            >
                                              {" "}
                                              <i className="glyphicon glyphicon-search"></i>{" "}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-5">
                                        <div className="col-sm-4">
                                          <span className="flex-left labelSuccess">
                                            Siasay, Taita Y
                                          </span>
                                        </div>
                                        <div className="col-sm-7">
                                          <span className="flex-left childlabel">
                                            664/896-4316
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-3">
                                        <div className="form-group">
                                          <label>
                                            HRBP
                                            <span className="pull-right-align">
                                              :
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="input-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                            value={business_case_data.hrbp}
                                            name="hrbp"
                                            onChange={this.onChangeBusinessCaseDataValues.bind(
                                              this
                                            )}
                                          />
                                          <div className="input-group-btn">
                                            <button
                                              className="btn btn-default"
                                              type="submit"
                                            >
                                              {" "}
                                              <i className="glyphicon glyphicon-search"></i>{" "}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-5">
                                        <div className="col-sm-4">
                                          <span className="flex-left labelSuccess">
                                            IIayt, Uiat Y
                                          </span>
                                        </div>
                                        <div className="col-sm-7">
                                          <span className="flex-left childlabel">
                                            414/524-0302
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-3">
                                        <div className="form-group">
                                          <label>
                                            HRBP Manager
                                            <span className="pull-right-align">
                                              :
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-md-4"> </div>
                                      <div className="col-md-5">
                                        <div className="col-sm-4">
                                          <span className="flex-left labelSuccess">
                                            Iatyi, Tyiit Ayyy
                                          </span>
                                        </div>
                                        <div className="col-sm-7"></div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-3">
                                        <div className="form-group">
                                          <label>
                                            HRBP Backup Support
                                            <span className="pull-right-align">
                                              :
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="input-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                            value={business_case_data.hrbp_backup_support}
                                            name="hrbp_backup_support"
                                            onChange={this.onChangeBusinessCaseDataValues.bind(
                                              this
                                            )}
                                          />
                                          <div className="input-group-btn">
                                            <button
                                              className="btn btn-default"
                                              type="submit"
                                            >
                                              {" "}
                                              <i className="glyphicon glyphicon-search"></i>{" "}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-5">
                                        <div className="col-sm-4">
                                          <span className="flex-left labelSuccess">
                                            Stays, Suyiaa T
                                          </span>
                                        </div>
                                        <div className="col-sm-7"></div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-3">
                                        <div className="form-group">
                                          <label>
                                            Serverance SME
                                            <span className="pull-right-align">
                                              :
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="input-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                            value={business_case_data.servarance_sme}
                                            name="servarance_sme"
                                            onChange={this.onChangeBusinessCaseDataValues.bind(
                                              this
                                            )}
                                          />
                                          <div className="input-group-btn">
                                            <button
                                              className="btn btn-default"
                                              type="submit"
                                            >
                                              {" "}
                                              <i className="glyphicon glyphicon-search"></i>{" "}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-5"> </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-3">
                                        <div className="form-group">
                                          <label>
                                            Legal Contact
                                            <span className="pull-right-align">
                                              :
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="input-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                            value={business_case_data.legal_contact}
                                            name="legal_contact"
                                            onChange={this.onChangeBusinessCaseDataValues.bind(
                                              this
                                            )}
                                          />
                                          <div className="input-group-btn">
                                            <button
                                              className="btn btn-default"
                                              type="submit"
                                            >
                                              {" "}
                                              <i className="glyphicon glyphicon-search"></i>{" "}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-5">
                                        <div className="col-sm-4">
                                          {" "}
                                          <span className="flex-left labelSuccess">
                                            Syiyi Ast T
                                          </span>
                                        </div>
                                        <div className="col-sm-7">
                                          <span className="flex-left childlabel">
                                            526/669-6743
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End of GridFrom */}
                                  </div>
                                </div>
                              </div>
                              <div className="panel panel-default">
                                <div
                                  className="panel-heading"
                                  role="tab"
                                  id="headingTwo"
                                >
                                  <h4 className="panel-title">
                                    {" "}
                                    <a
                                      className="collapsed"
                                      role="button"
                                      data-toggle="collapse"
                                      data-parent="#accordion"
                                      href="#collapseTwo"
                                      aria-expanded="false"
                                      aria-controls="collapseTwo"
                                    >
                                      {" "}
                                      <span>
                                        Business Case Data (Management)
                                      </span>{" "}
                                    </a>{" "}
                                  </h4>{" "}
                                </div>
                                <div
                                  id="collapseTwo"
                                  className="panel-collapse collapse"
                                  role="tabpanel"
                                  aria-labelledby="headingTwo"
                                >
                                  <div className="panel-headGroup">
                                    <div className="group-block">
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="labelgrid-group">
                                            <div className="col-sm-6">
                                              <label className="control-label labelblckTheme flex-left">
                                                Business Reason(s) :
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-padding">
                                        <div className="row">
                                          <div className="col-md-4 col-sm-12">
                                            <select className="select-dropbox" 
                                            onChange={this.onChangeBusinessCaseDataManagementValues.bind(this)}
                                            name ="change_in_business_status">
                                              <option>
                                                Change in Business Strategy
                                              </option>
                                              <option>load content</option>
                                              <option>load content</option>
                                              <option>load content</option>
                                              <option>load content</option>
                                            </select>
                                          </div>
                                          <div className="col-md-4">
                                            <select className="select-dropbox" onChange={this.onChangeBusinessCaseDataManagementValues.bind(this)}
                                            name ="change_in_business_status">
                                              <option>
                                                Too Meet Budgetary Initiatives
                                              </option>
                                              <option>load content</option>
                                              <option>load content</option>
                                              <option>load content</option>
                                              <option>load content</option>
                                            </select>
                                          </div>
                                          <div className="col-md-4">
                                            <select className="select-dropbox" 
                                            onChange={this.onChangeBusinessCaseDataManagementValues.bind(this)}
                                            name ="too_meet_budjetry_initiates"
                                            >
                                              <option></option>
                                              <option>load content</option>
                                              <option>load content</option>
                                              <option>load content</option>
                                              <option>load content</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <form className="form-horizontal inputbox-lg">
                                    <div className="row">
                                      <div className="col-md-3">
                                        <div className="form-group">
                                          <label>
                                            Notification Date
                                            <span className="pull-right-align">
                                              :
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <label className="labelDate">
                                          02/22/2019
                                        </label>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-3">
                                        <div className="form-group">
                                          <label>
                                            *Off Payroll Date
                                            <span className="pull-right-align">
                                              :
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-md-4 date">
                                        <div
                                          className="input-group input-append date"
                                          id="datePicker"
                                        >
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="date"
                                            id="off_payroll_date"
                                            
                                onChange={this.onChangeBusinessCaseDataManagementValues.bind(
                                  this
                                )}
                                          />{" "}
                                          <span className="input-group-addon add-on">
                                            <span className="glyphicon glyphicon-calendar"></span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-3">
                                        <div className="form-group">
                                          <label>
                                            Notification PeriodPlan
                                            <span className="pull-right-align">
                                              :
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder=""
                                          name="notification_period_plan"
                                          onChange={this.onChangeBusinessCaseDataManagementValues.bind(this)}
                                          value={business_case_data_management.notification_period_plan}
                                        />{" "}
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-3">
                                        <div className="form-group">
                                          <label>
                                            Last Day Worked
                                            <span className="pull-right-align">
                                              :
                                            </span>{" "}
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <label className="labelDate">
                                          03/23/2019
                                        </label>
                                      </div>
                                    </div>
                                  </form>
                                  {/* Naveen */}
                                  <div className="SubTabGrid">
                                    <div id="SubTabLevelOne">
                                      RIF Information
                                    </div>
                                    <div id="SubpanelTab">
                                      <div className="row">
                                        <div className="col-md-3">
                                          <div className="form-group">
                                            <label>*Type of RIF :</label>
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="form-check">
                                            <label className="custom-checkbox">
                                              <label>Individual</label>
                                              <input type="checkbox" />
                                              <span className="customtick"></span>
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="form-check">
                                            <label className="custom-checkbox">
                                              <label>Rate and Rank</label>
                                              <input type="checkbox" />
                                              <span className="customtick"></span>
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="form-check">
                                            <label className="custom-checkbox">
                                              <label>
                                                Functional Group Elimination
                                              </label>
                                              <input type="checkbox" />
                                              <span className="customtick"></span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="blockDisableBox">
                                        <div className="row">
                                          <div className="col-md-2">
                                            <div className="form-group">
                                              <label>
                                                Jobcode
                                                <span className="pull-right-align">
                                                  :
                                                </span>
                                              </label>
                                            </div>
                                          </div>
                                          <div className="col-md-2">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder=""
                                              disabled
                                            />{" "}
                                          </div>

                                          <div className="col-md-2">
                                            <div className="form-group">
                                              <label>
                                                Career Band
                                                <span className="pull-right-align">
                                                  :
                                                </span>
                                              </label>
                                            </div>
                                          </div>
                                          <div className="col-md-2">
                                            <input
                                              type="text"
                                              className="form-control"
                                              disabled
                                              placeholder=""
                                            />{" "}
                                          </div>
                                        </div>
                                        <div className="row rowTopspace">
                                          <div className="col-md-6">
                                            <div className="form-group">
                                              <label>
                                                Number of Employees Currently
                                                Performing Work:
                                              </label>
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="form-group">
                                              <label>
                                                Number to be Reduced:
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col-md-3">
                                          <div className="form-group">
                                            <label>
                                              Work After Staff Reduction :
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-2">
                                          <div className="form-check">
                                            <label className="custom-checkbox">
                                              Absorbed
                                              <input type="checkbox" />
                                              <span className="customtick"></span>
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="form-check">
                                            <label className="custom-checkbox">
                                              Redistributed
                                              <input type="checkbox" />
                                              <span className="customtick"></span>
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-2">
                                          <div className="form-check">
                                            <label className="custom-checkbox">
                                              Eliminated
                                              <input type="checkbox" />
                                              <span className="customtick"></span>
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-2">
                                          <div className="form-check">
                                            <label className="custom-checkbox">
                                              Other
                                              <input type="checkbox" />
                                              <span className="customtick"></span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-3">
                                          <div className="form-group">
                                            <label>Data File Sent :</label>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div className="form-check">
                                            <label className="custom-checkbox">
                                              Sent to Print Shop
                                              <input type="checkbox" />
                                              <span className="customtick"></span>
                                            </label>
                                          </div>
                                        </div>

                                        <div className="col-md-3 spinnerNumber-flex">
                                          <div className="input-group number-spinner input-spinnerNumber">
                                            <span className="input-group-btn ">
                                              <button
                                                className="btn btn-default"
                                                data-dir="dwn"
                                              >
                                                <span className="glyphicon glyphicon-minus"></span>
                                              </button>
                                            </span>
                                            <input
                                              type="text"
                                              className="form-control text-center"
                                              value="1"
                                            />
                                            <span className="input-group-btn">
                                              <button
                                                className="btn btn-default"
                                                data-dir="up"
                                              >
                                                <span className="glyphicon glyphicon-plus"></span>
                                              </button>
                                            </span>
                                          </div>
                                          <span className="spanBlock">
                                            Days Before Release is Availbale
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Comment */}

                              <div className="commentsMainGrid">
                                <div className="commentsGrid">Comments</div>
                                <div className="commentsTab">
                                  <div className="row">
                                    <div className="col-md-2">
                                      <div className="form-group">
                                        <label>Date/Time Entered: </label>
                                      </div>
                                    </div>
                                    <div className="col-md-2">
                                      <label className="labelDate">
                                        03/23/2019
                                      </label>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="form-group">
                                        <label>Entered by: </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label>Comment:</label>
                                        <textarea
                                          className="form-control"
                                          rows="5"
                                          id="commentBox"
                                          name="comment"
                                          value={comments.comment}
                                          onChange={this.onChangeCommentsValues.bind(this)}
                                        ></textarea>
                                      </div>{" "}
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-2">
                                    <div className="form-group">
                                      <label className="labelline">
                                        Display Audit Trail{" "}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-2">
                                    <div className="form-group">
                                      <label>Created By: </label>
                                    </div>
                                  </div>
                                  <div className="col-md-2">
                                    <label className="labelDate">
                                      0403014349
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <div className="form-group">
                                      <label>Created Date/Time: </label>
                                    </div>
                                  </div>
                                  <div className="col-md-2">
                                    <label className="labelDate">
                                      02/22/2019 1:51 PM
                                    </label>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label>Updated By: </label>
                                    </div>
                                  </div>

                                  <div className="col-md-3">
                                    <div className="form-group">
                                      <label>Last Update Date/Time: </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row rowbottomspace">
                                <div className="col-md-8 ">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <button
                                        type="button"
                                        className="btn btn-primary btn-next btn-black-small"
                                      >
                                        Next
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-primary btn-saveDraft btn-black-medium"
                                        onClick = {this.saveAsDraftMethod.bind(this)}
                                      >
                                        Save as Draft
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-primary btn-saveSubmint btn-black-medium"
                                      >
                                        Save and Submit
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-primary btn-print btn-black-medium"
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
  

export default connect(
  state => ({ fmsData: state.fpms_reducer }),
  { storeManageBusinessCaseData }
)(Tab2_CreateManageBusiness);
