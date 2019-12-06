import React,{Component} from 'react';


class Tab2_CreateManageBusiness extends Component{
    render(){
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
                            Plan: Mgmt Prog Enterprise Wireline
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="labelgrid-group topRightlabel">
                          <label className="control-label labelredTheme">
                            Business Case Number :{" "}
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
                                                Verizon Corporate
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
                                            <select className="select-dropbox">
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
                                            <select className="select-dropbox">
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
                                            <select className="select-dropbox">
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
  


export default Tab2_CreateManageBusiness;
