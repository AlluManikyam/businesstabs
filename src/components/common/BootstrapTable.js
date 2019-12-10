import React, { Component, cloneElement } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import global from "../../constants/global";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      tbName: "",
      tableData: global.assessmentsList,
      row: false,
      loading: true,
      selected: []
    };
  }

  handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      this.setState(
        () => ({
          selected: [...this.state.selected, row]
        }),
        () => {
          this.props.selectedEmp(this.state.selected);
        }
      );
    } else {
      this.setState(
        () => ({
          selected: this.state.selected.filter(x => x.id !== row.id)
        }),
        () => {
          this.props.selectedEmp(this.state.selected);
        }
      );
    }
  };

  handleOnSelectAll = (isSelect, rows) => {
    console.log("rows", rows);
    //const ids = rows.map(r => r.id);
    if (isSelect) {
      this.setState(
        () => ({
          selected: rows
        }),
        () => {
          this.props.selectedEmp(this.state.selected);
        }
      );
    } else {
      this.setState(
        () => ({
          selected: []
        }),
        () => {
          this.props.selectedEmp(this.state.selected);
        }
      );
    }
  };

  componentWillReceiveProps(props) {
    console.log("propspropspropsprops", props);
    if (
      (props &&
        props.tableData &&
        props.tableData.length > 0 &&
        props.tableName === "selectEmps") ||
      props.tableName === "empInfo"
    ) {
      this.setState(
        {
          tableData: props.tableData,
          tbName: props.tableName
        },
        () => {
          console.log("Store Reducerssss Tab2masala ", this.state.tableData);
        }
      );
    }
  }

  componentDidMount() {
    var isShowRecordsExists = document.getElementsByClassName("addedspan");
    if (isShowRecordsExists.length == 0) {
      var sp = document.querySelector(".react-bs-table-pagination").children[0]
        .children[0];
      var spanTag = document.createElement("span");
      spanTag.classList.add("addedspan");
      var spanTagContents = document.createTextNode("Show records");
      spanTag.appendChild(spanTagContents);
      sp.appendChild(spanTag);
    }
  }

  afterSearch(searchText, result) {
    var count = result.length;
    var tmpThis = result.pips;
    var pips = 0;
    for (var i = 0; i < result.length; i++) {
      pips = pips + result[i].Pips;
    }
    if (this.that.state.searchText !== searchText) {
      // <- this stops the infinite loop
      this.that.setState(
        {
          pips: pips,
          count: count,
          searchText: searchText
        },
        () => {
          if (
            this.that.state.searchText != null &&
            this.that.state.searchText != ""
          ) {
            var sp = document.querySelector(".react-bs-table-search-form");
            var isSearchResults = document.getElementsByClassName(
              "searchresults"
            );
            if (isSearchResults.length > 0) {
              sp.removeChild(sp.childNodes[2]);
            }
            var spanTag = document.createElement("p");
            spanTag.classList.add("searchresults");
            var spanTagContents = document.createTextNode(
              this.that.state.count == 1
                ? this.that.state.count + " record found"
                : this.that.state.count + " records found"
            );
            spanTag.appendChild(spanTagContents);
            sp.appendChild(spanTag);
          } else {
            var sp = document.querySelector(".react-bs-table-search-form");
            var isSearchResults = document.getElementsByClassName(
              "searchresults"
            );
            if (isSearchResults.length > 0) {
              sp.removeChild(sp.childNodes[2]);
            }
          }
        }
      );
    }
  }

  render() {
    console.log("Store Reducerssss Tab2masala render ", this.state.tableData);

    const selectRowProp = {
      mode: this.props.checkMode,
      //bgColor: "pink",
      clickToSelect: true,
      onSelect: this.handleOnSelect,
      onSelectAll: this.handleOnSelectAll
    };
    const options = {
      prePage: "Previous", // Previous page button text
      nextPage: "Next", // Next page button text
      afterSearch: this.afterSearch,
      noDataText: "No records found",
      that: this, // <- needed this "this" in the search event handler
      // defaultSortName: 'name',  // default sort column name
      // defaultSortOrder: 'desc',  // default sort order
      sizePerPage: 10,
      sizePerPageList: [
        {
          text: "10",
          value: 10
        },
        {
          text: "25",
          value: 25
        },
        {
          text: "50",
          value: 50
        },
        {
          text: "All",
          value: this.state.tableData.length
        }
      ]
    };
    return (
      <React.Fragment>
        {this.state.loading === true ? (
          <div className={`acuty-table ${this.state.tbName}`}>
            <BootstrapTable
              ref="table"
              bordered={false}
              data={this.state.tableData}
              selectRow={selectRowProp}
              pagination={true}
              options={options}
              search={true}
              version="4"
              striped
              hover
            >
              <TableHeaderColumn
                dataField="set_id"
                columnClassName="visitedName"
                isKey={true}
                searchable={true}
                dataSort={true}
              >
                SetID
              </TableHeaderColumn>
              <TableHeaderColumn dataField="company" dataSort searchable={true}>
                Company
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="cost_center"
                dataSort
                searchable={true}
              >
                Cost Center
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="location_code"
                dataSort
                searchable={true}
              >
                Location Code
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="career_brand"
                dataSort
                searchable={true}
              >
                Career Brand
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="supervisior_eid"
                dataSort
                searchable={true}
              >
                Supervisor EID
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="job_code"
                dataSort
                searchable={true}
              >
                Job Code
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="employee_id"
                dataSort
                searchable={true}
              >
                Emp Id
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="employee_eid"
                dataSort
                searchable={true}
              >
                Employee EID
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="first_name"
                dataSort
                searchable={true}
              >
                First Name
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="last_name"
                dataSort
                searchable={true}
              >
                Last Name
              </TableHeaderColumn>
            </BootstrapTable>
          </div>
        ) : (
          <div className="container loading">
            <h4>Loading...</h4>
          </div>
        )}
      </React.Fragment>
    );
  }
}
DataTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(DataTable);
