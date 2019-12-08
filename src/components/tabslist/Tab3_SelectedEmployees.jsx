import React, { Component } from "react";
import { connect } from "react-redux";

class Tab3_SelectedEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEmployees: {
        set_id: "",
        supervisor_eid: "",
        company: "",
        job_code: "",
        cost_center: "",
        emp_id: "",
        location_code: "",
        employee_eid: "",
        career_brand: "",
        first_name: "",
        last_name: ""
      },
      addBusinessCase: props.fmsData.businessCaseData
    };
  }

  onChangeSelectedEmployeesValues(e) {
    let { selectedEmployees } = this.state;
    selectedEmployees[e.target.name] = e.target.value;
    this.setState({
      selectedEmployees
    });
  }

  searchMethod() {
    let { selectedEmployees } = this.state;
    console.log("hey: ", selectedEmployees);
  }

  componentWillReceiveProps(props) {
    if (props && props.fmsData && props.fmsData.businessCaseData) {
      console.log("Store Reducerssss tab3", props);
      this.setState({
        addBusinessCase: props.fmsData.businessCaseData
      });
    }
  }

  render() {
    let {
      set_id,
      supervisor_eid,
      company,
      job_code,
      cost_center,
      emp_id,
      location_code,
      employee_eid,
      career_brand,
      first_name,
      last_name
    } = this.state.selectedEmployees;
    let { plan_code, plan_table } = this.state.addBusinessCase;
    return (
      <>
        <div id="tabThree" className="tab-pane fade ">
          <div className="BusinesscaseSelectedemp">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <div className="labelgrid-group">
                    <label className="control-label labelredTheme">
                      Plan :{plan_code}
                    </label>
                    <div className="labelgrid">
                      Plan: {plan_table && plan_table.description}
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
                  <div className="commentsMainGrid">
                    <div className="commentsGrid">Filter Employees</div>
                    <div className="commentsTab">
                      <div className="GridFrom GridFromRow">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="form-group">
                              <label>SetID:</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                value={set_id}
                                name="set_id"
                                onChange={this.onChangeSelectedEmployeesValues.bind(
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
                          <div className="col-md-2">
                            <div className="form-group">
                              <label>Supervisor EID:</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                value={supervisor_eid}
                                name="supervisor_eid"
                                onChange={this.onChangeSelectedEmployeesValues.bind(
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
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div className="form-group">
                              <label>Company:</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                value={company}
                                name="company"
                                onChange={this.onChangeSelectedEmployeesValues.bind(
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
                          <div className="col-md-2">
                            <div className="form-group">
                              <label>Job Code:</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                value={job_code}
                                name="job_code"
                                onChange={this.onChangeSelectedEmployeesValues.bind(
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
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div className="form-group">
                              <label>Cost Center:</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                value={cost_center}
                                name="cost_center"
                                onChange={this.onChangeSelectedEmployeesValues.bind(
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
                          <div className="col-md-2">
                            <div className="form-group">
                              <label>Emp Id:</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                value={emp_id}
                                name="emp_id"
                                onChange={this.onChangeSelectedEmployeesValues.bind(
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
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div className="form-group">
                              <label>Location Code:</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                value={location_code}
                                name="location_code"
                                onChange={this.onChangeSelectedEmployeesValues.bind(
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
                          <div className="col-md-2">
                            <div className="form-group">
                              <label>Employee EID:</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                value={employee_eid}
                                name="employee_eid"
                                onChange={this.onChangeSelectedEmployeesValues.bind(
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
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div className="form-group">
                              <label>Career Brand:</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                value={career_brand}
                                name="career_brand"
                                onChange={this.onChangeSelectedEmployeesValues.bind(
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
                          <div className="col-md-2">
                            <div className="form-group">
                              <label>First Name:</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                value={first_name}
                                name="first_name"
                                onChange={this.onChangeSelectedEmployeesValues.bind(
                                  this
                                )}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-5"></div>
                          <div className="col-md-2">
                            <div className="form-group">
                              <label>Last Name:</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                value={last_name}
                                name="last_name"
                                onChange={this.onChangeSelectedEmployeesValues.bind(
                                  this
                                )}
                              />
                            </div>
                          </div>
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
                            onClick={this.searchMethod.bind(this)}
                          >
                            Search
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-next btn-black-small"
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="findEmp">
                  <table
                    id="SelectEmp"
                    className="table table-bordered table-striped"
                    cellspacing="0"
                    width="100%"
                  >
                    <thead>
                      <tr>
                        <th></th>
                        <th scope="col">SetID</th>

                        <th scope="col">Company</th>
                        <th scope="col">Cost Center</th>
                        <th scope="col">Location Code</th>
                        <th scope="col">Career Brand</th>
                        <th scope="col">Supervisor EID</th>
                        <th scope="col">Job Code</th>
                        <th scope="col">Emp Id</th>
                        <th scope="col">Employee EID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                      </tr>
                    </thead>
                  </table>
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
      </>
    );
  }
}

export default connect(state => ({ fmsData: state.fpms_reducer }))(
  Tab3_SelectedEmployees
);
