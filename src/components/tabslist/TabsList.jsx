import React,{Component} from 'react';


class TabsList extends Component{
    render(){
        return (
            <>
               <ul className="nav nav-tabs">
              <li>
                <a data-toggle="tab" href="#home">
                  Find Existing Business Case
                </a>
              </li>
              <li className="active">
                <a data-toggle="tab" href="#tabOne">
                  Add Business Case
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#tabTwo">
                  Create/Manage Business Case
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#tabThree">
                  Selected Employees
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#tabFour">
                  Impacted Employees
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#tabFive">
                  Employee Information
                </a>
              </li>
            </ul>
            </>
          );
    }
}
  


export default TabsList;
