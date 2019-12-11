import React,{Component} from 'react';
import { connect } from "react-redux";
import store from "../../redux/store";
import DatePicker from 'react-date-picker';
import config from '../../constants/global'
import swal from "sweetalert"
import commonUtils from '../../utils/ApiCalls.js'

import {storeManageBusinessCaseData} from "../../redux/actions/fmsActions";
import { parse } from 'url';
var moment = require('moment');


class Tab2_CreateManageBusiness extends Component{
  constructor(props) {
    super(props);
    this.state = {
    addBusinessCase:props.fmsData.businessCaseData,
    searchArray:config.searchArray,
    selection_manager_search_data:{},
    hrbp_search_data:{},
    servarance_sme_search_data:{},
    hrbp_backup_support_search_data:{},
    leagal_contact_search_data:{},
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
      notification_date: "",
      off_payroll_date: new Date(),
      notification_period_plan: "",
      last_day_worked: ""
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
      date_time_entered: new Date(),
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

searchMethod(searchtype, searchtext){
  //let lcase= toLowerCase()
  let {searchArray} = this.state;
  let getsearchData = searchArray.filter((res, i)=>{
    return res.name.toLowerCase()=== searchtext.toLowerCase()
  })
  if(getsearchData.length >0){
    this.setState({
      [searchtype]:getsearchData[0]
    })
  }else {
    this.setState({
      [searchtype]:'404'
    })
  }
  
  console.log('search',JSON.stringify(getsearchData))

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

onChangeOffPayRollDate = date => 
{
  let { manageBusinessCase } = this.state;
  let { business_case_data_management } = manageBusinessCase;
  business_case_data_management["off_payroll_date"] = date;
  if(date&&business_case_data_management.notification_period_plan!==""){

    // Notification Date
    let notificationDate = new Date(date);
    let notificationPeriodPlan=parseInt(business_case_data_management.notification_period_plan)
    notificationDate.setDate(date.getDate() - notificationPeriodPlan);
    let FormattedNofiDate = moment(notificationDate, "x").format("MM/DD/YYYY") 
    
    // Last Day Worked
    let lastDayWorked = new Date(date);
    lastDayWorked.setDate(date.getDate() -1);
    let FormattedlastDayWorkedDate =moment(lastDayWorked, "x").format("MM/DD/YYYY") 
    business_case_data_management["notification_date"] = FormattedNofiDate;
    business_case_data_management["last_day_worked"] = FormattedlastDayWorkedDate;

  }else{
    business_case_data_management["notification_date"] = "";
    business_case_data_management["last_day_worked"] = "";
  }
  
  
  this.setState({ manageBusinessCase })
}

onChangeBusinessCaseDataManagementValues(e) {
  let { manageBusinessCase } = this.state;
  let { business_case_data_management } = manageBusinessCase;
  business_case_data_management[e.target.name] = e.target.value;
  if(business_case_data_management.off_payroll_date!==""&&business_case_data_management.notification_period_plan!==""){

    // Notification Date
    let date=business_case_data_management.off_payroll_date
    let notificationDate = new Date(date);
    let notificationPeriodPlan=parseInt(business_case_data_management.notification_period_plan)
    notificationDate.setDate(date.getDate() - notificationPeriodPlan);
    let FormattedNofiDate = moment(notificationDate, "x").format("MM/DD/YYYY") 
    
    // Last Day Worked
    let lastDayWorked = new Date(date);
    lastDayWorked.setDate(date.getDate() -1);
    let FormattedlastDayWorkedDate =moment(lastDayWorked, "x").format("MM/DD/YYYY") 
    business_case_data_management["notification_date"] = FormattedNofiDate;
    business_case_data_management["last_day_worked"] = FormattedlastDayWorkedDate;

  }else{
    business_case_data_management["notification_date"] = "";
    business_case_data_management["last_day_worked"] = "";
  }
  
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
    let { manageBusinessCase } = this.state;
    let { plan_code  } = this.state.addBusinessCase;

      // API calling
      commonUtils.storeManageBusinessCaseData(manageBusinessCase).then((data)=>{
        if (data) {
          swal({
            title: `ManageBusinesscase created successfully with ${plan_code}0001`,
            icon: "success",
          })
          .then(() => {
            this.props.storeManageBusinessCaseData(manageBusinessCase);
            this.props.changeCurrentTab(3, "tabThree")
          })
        }
  
      }).catch((err)=>{
        console.log("error",err)
  
      })
  }

    render(){
      let {selection_manager_search_data, hrbp_search_data,    servarance_sme_search_data,
      hrbp_backup_support_search_data,
      leagal_contact_search_data} = this.state
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
                            Business Case Number :
                          </label>
                          <div className="labelgrid"> 
                          New
                          </div>
                          {/* </div> {plan_code}0001 */}
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
                                                {plan_table &&plan_table.description}
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
                                               {Object.keys(selection_manager_search_data).length>0? selection_manager_search_data === '404'?'no results found': `${selection_manager_search_data.name}, ${selection_manager_search_data.location}` :''}
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
                                              onClick={this.searchMethod.bind(this,'selection_manager_search_data', business_case_data.selection_manager)}
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
                                            {Object.keys(selection_manager_search_data).length>0? selection_manager_search_data === '404'?'no results found': `${selection_manager_search_data.name}, ${selection_manager_search_data.location}` :''}
                                          </span>
                                        </div>
                                        <div className="col-sm-7">
                                          <span className="flex-left childlabel">
                                          {selection_manager_search_data !== ''? selection_manager_search_data === '404'?'no results found': selection_manager_search_data.mobile_number:''}
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
                                              onClick={this.searchMethod.bind(this,'hrbp_search_data', business_case_data.hrbp)}
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
                                          {Object.keys(hrbp_search_data).length>0? hrbp_search_data === '404'?'no results found': `${hrbp_search_data.name}, ${hrbp_search_data.location}` :''}
                                          </span>
                                        </div>
                                        <div className="col-sm-7">
                                          <span className="flex-left childlabel">
                                          {hrbp_search_data !== ''? hrbp_search_data === '404'?'no results found': hrbp_search_data.mobile_number:''}
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
                                      <div className="col-md-4">
                                        <div className="input-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                            value={business_case_data.hrbp_manager}
                                            name="hrbp_manager"
                                          
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
                                          {Object.keys(hrbp_search_data).length>0? hrbp_search_data === '404'?'no results found': `${hrbp_search_data.name}, ${hrbp_search_data.location}` :''}
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
                                              onClick={this.searchMethod.bind(this,'hrbp_backup_support_search_data', business_case_data.hrbp_backup_support)}
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
                                          {Object.keys(hrbp_backup_support_search_data).length>0? hrbp_backup_support_search_data === '404'?'no results found': `${hrbp_backup_support_search_data.name}, ${hrbp_backup_support_search_data.location}` :''}
                                          </span>
                                        </div>
                                        <div className="col-sm-7">
                                        {hrbp_backup_support_search_data !== ''? hrbp_backup_support_search_data === '404'?'no results found': hrbp_backup_support_search_data.mobile_number:''}
                                        </div>
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
                                              onClick={this.searchMethod.bind(this,'servarance_sme_search_data', business_case_data.servarance_sme)}
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
                                          {Object.keys(servarance_sme_search_data).length>0? servarance_sme_search_data === '404'?'no results found': `${servarance_sme_search_data.name}, ${servarance_sme_search_data.location}` :''}
                                          </span>
                                          </div>
                                          <div className="col-sm-7">
                                        {servarance_sme_search_data !== ''? servarance_sme_search_data === '404'?'no results found': servarance_sme_search_data.mobile_number:''}
                                        </div>
                                     
                                      </div>
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
                                              onClick={this.searchMethod.bind(this,'leagal_contact_search_data', business_case_data.legal_contact)}
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
                                          {Object.keys(leagal_contact_search_data).length>0? leagal_contact_search_data === '404'?'no results found': `${leagal_contact_search_data.name}, ${leagal_contact_search_data.location}` :''}
                                          </span>
                                        </div>
                                        <div className="col-sm-7">
                                          <span className="flex-left childlabel">
                                        {leagal_contact_search_data !== ''? leagal_contact_search_data === '404'?'no results found': leagal_contact_search_data.mobile_number:''}
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
                                          {business_case_data_management.notification_date}
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
                                      <div className="col-md-4">
                                      <div className="w-100">
                                          <DatePicker
                                            format="MM-dd-yyyy"
                                            className="offPayRollDate"
                                            onChange={this.onChangeOffPayRollDate}
                                            value={business_case_data_management.off_payroll_date}
                                          />
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
                                          {business_case_data_management.last_day_worked}
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
                                       {moment(comments.date_time_entered, "x").format("MM/DD/YYYY") }
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
                                    {moment(new Date(), "x").format("MM/DD/YYYY  hh:mm A") }
                                    </label>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label>Updated By: </label>
                                    </div>
                                  </div>

                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label>Last Update Date/Time: </label>
                                      {moment(new Date(), "x").format("MM/DD/YYYY  hh:mm A") }
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
