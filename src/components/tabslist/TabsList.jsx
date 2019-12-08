import React, { Component } from "react";

export default class TabsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab:props.currentTab,
      TabsListArray: [
        {
          id:0,
          tab_name: "Find Existing Business Case",
          tab_path: "#home",
          tabStatus: ""
        },
        { id:1,tab_name: "Add Business Case", tab_path: "#tabOne",  tabStatus: "" },
        {
          id:2,
          tab_name: "Create/Manage Business Case",
          tab_path: "#tabTwo",
          tabStatus: "disabled"
        },
        {
          id:3,
          tab_name: "Selected Employees",
          tab_path: "#tabThree",
          tabStatus: "disabled"
        },
        {
          id:4,
          tab_name: "Impacted Employees",
          tab_path: "#tabFour",
          tabStatus: "disabled"
        },
        {
          id:5,
          tab_name: "Employee Information",
          tab_path: "#tabFive",
          tabStatus: "disabled"
        }
      ]
    };
  }
  
  componentWillReceiveProps(props){
    if(props.currentTab>-1){
      this.setState({
        currentTab:props.currentTab
      },()=>{
        let { TabsListArray,currentTab } = this.state;
        let index=TabsListArray.findIndex(x => x.id === currentTab);
        TabsListArray[index].tabStatus="";
        this.setState({TabsListArray},()=>{
          window.scrollTo(0,0)
        })
      })
    }
  }

  render() {
    let { TabsListArray,currentTab } = this.state;
    return (
      <>
        <ul className="nav nav-tabs">
          {TabsListArray.map((result, i) => {
            return (
              <li
                className={`${result.tabStatus} ${i === currentTab ? "active" : ""}`}
                key={i}
                disable={result.disable}
                id={`tab${i}`}
              >
                <a data-toggle="tab"  href={result.tab_path}>
                  {result.tab_name}
                </a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
