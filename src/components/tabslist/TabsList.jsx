import React, { Component } from "react";

export default class TabsList extends Component {
  constructor() {
    super();
    this.state = {
      TabsListArray: [
        { tab_name: "Find Existing Business Case", tab_path: "#home" },
        { tab_name: "Add Business Case", tab_path: "#tabOne" },
        { tab_name: "Create/Manage Business Case", tab_path: "#tabTwo" },
        { tab_name: "Selected Employees", tab_path: "#tabThree" },
        { tab_name: "Impacted Employees", tab_path: "#tabFour" },
        { tab_name: "Employee Information", tab_path: "#tabFive" }
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
              <li className={tabName === "Add Business Case" ? "active" : null}>
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
