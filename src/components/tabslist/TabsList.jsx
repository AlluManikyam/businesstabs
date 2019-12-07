import React, { Component } from "react";

export default class TabsList extends Component {
  constructor() {
    super();
    this.state = {
      TabsListArray: [
        {
          tab_name: "Find Existing Business Case",
          tab_path: "#home",
          disable: false
        },
        { tab_name: "Add Business Case", tab_path: "#tabOne", disable: false },
        {
          tab_name: "Create/Manage Business Case",
          tab_path: "#tabTwo",
          disable: false
        },
        {
          tab_name: "Selected Employees",
          tab_path: "#tabThree",
          disable: false
        },
        {
          tab_name: "Impacted Employees",
          tab_path: "#tabFour",
          disable: false
        },
        {
          tab_name: "Employee Information",
          tab_path: "#tabFive",
          disable: false
        }
      ]
    };
  }
  render() {
    let { TabsListArray } = this.state;
    return (
      <>
        <ul className="nav nav-tabs">
          {TabsListArray.map((result, i) => {
            let tabName = result.tab_name;
            return (
              <li
                className={tabName === "Add Business Case" ? "active" : null}
                key={i}
              >
                <a data-toggle="tab" href={result.tab_path}>
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
