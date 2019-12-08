import React, { Component } from "react";
import BootstrapTable from "../common/BootstrapTable";

class Tab0_FindExistingBusinessCase extends Component {
  render() {
    return (
      <>
        <div id="home" className="tab-pane fade ">
          <div className="container-fluid">
            {/* <table
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
              </table> */}
            <div className="selectedEmp">
              <BootstrapTable />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Tab0_FindExistingBusinessCase;
