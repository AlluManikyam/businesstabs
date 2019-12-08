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
  constructor(props){
    super(props);
    this.state={
      currentTab:1
    }
    this.setCurrentTab=this.setCurrentTab.bind(this)
  }

  setCurrentTab(tabNo,tabName){
    this.setState({
      currentTab:tabNo
    },()=>{
      let activeListClasses=document.getElementsByClassName("tab-pane")
      for(let i=0;i<activeListClasses.length;i++){
        activeListClasses[i].classList.remove("active")
      }
      // alert(tabName)
      document.getElementById(tabName).classList.add("active")
    })
  }

  render() {
    let {currentTab}=this.state
    return (
      <div className="Businesscase">
       <Header/>   
        <div className="container-fluid">
          <div className="activity-head">Create/Maintain Case</div>
          <div className="dynamic-taps">
         <TabsList currentTab={currentTab}/>
            <div className="tab-content">
             <FindExistingBusinessCase/>
             <AddBusinessCase changeCurrentTab={this.setCurrentTab}/>
             <CreateManageBusiness  changeCurrentTab={this.setCurrentTab}/>
             <SelectedEmployees changeCurrentTab={this.setCurrentTab}/>
             <ImpactedEmployees changeCurrentTab={this.setCurrentTab}/>
             <EmployeeInfo changeCurrentTab={this.setCurrentTab}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default businesscase;
