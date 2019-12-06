import React, { Component } from "react";
import Header from '../../layouts/Header';
import TabsList from '../tabslist/TabsList.jsx'
import FindExistingBusinessCase from '../tabslist/Tab0_FindExistingBusinessCase.jsx'
import AddBusinessCase from '../tabslist/Tab1_AddBusinessCase'
import CreateManageBusiness from '../tabslist/Tab2_CreateManageBusiness'
import SelectedEmployees from '../tabslist/Tab3_SelectedEmployees'
import ImpactedEmployees from '../tabslist/Tab4_ImpactedEmployees'
import EmployeeInfo from '../tabslist/Tab5_EmployeeInfo'

class businesscase extends Component {
  render() {
    return (
      <div className="Businesscase">
       <Header/>   
        <div className="container-fluid">
          <div className="activity-head">Create/Maintain Case</div>
          <div className="dynamic-taps">
         <TabsList/>
            <div className="tab-content">
             <FindExistingBusinessCase/>
             <AddBusinessCase/>
             <CreateManageBusiness/>
             <SelectedEmployees/>
             <ImpactedEmployees/>
             <EmployeeInfo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default businesscase;
