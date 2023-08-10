import React from "react";
import { Card, CardBody, div, CardTitle, Col, Row, UncontrolledCollapse } from "reactstrap";
import { index } from "../../../config/pluginsInit";
import DataTable from "react-data-table-component";
class ExpandedComponent extends React.Component {
    render() {
        return (
            <>
                {JSON.stringify(this.props, null, 2)}
            </>
        )
    }
}

class Index extends React.Component {
  


  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    setTimeout(function () {
      index();
    }, 800);

    //  by abhishek
    try {
      const response = await fetch("https://dummyjson.com/users");
      console.log(response);
      this.setState({ users: response.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    const tableData = {
      header: [
        {
          name: "Loan Type",
          selector: "loanType",
          sortable: true,
        },
        {
          name: "Status",
          selector: "status",
          sortable: true,
        },
        {
          name: "Description",
          selector: "description",
          sortable: true,
        },
        {
          name: "Media",
          selector: "media",
          sortable: false,
          cell: (row) => (
            <img
              src={row.media}
              alt={row.loanType}
              style={{ maxWidth: "50px", maxHeight: "50px" }}
            />
          ),
        },
        {
          name: "Actions",
          cell: (row) => (
            <div>
              <span
                onClick={() => console.log("handleView")}
                style={{ cursor: "pointer", marginRight: "10px" }}
              >
                View
              </span>
              <span
                onClick={() => console.log("handleUpdate")}
                style={{ cursor: "pointer", marginRight: "10px" }}
              >
                Update
              </span>
              <span
                onClick={() => console.log("handle delete")}
                style={{ cursor: "pointer" }}
              >
                Delete
              </span>
            </div>
          ),
        },
      ],
      body: [
        {
          loanType: "Personal Loan",
          status: "Active",
          description: "A loan for personal expenses.",
          media: "https://dummyurl.com/personal_loan_image.jpg",
        },
        {
          loanType: "Home Loan",
          status: "Inactive",
          description: "A loan for purchasing a home.",
          media: "https://dummyurl.com/home_loan_image.jpg",
        },
        {
          loanType: "Auto Loan",
          status: "Active",
          description: "A loan for purchasing a vehicle.",
          media: "https://dummyurl.com/auto_loan_image.jpg",
        },
        // Add more dummy data as needed
      ],
    };
    return (
      <Row>
        <Col sm="12">
          <Card className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <CardTitle className="iq-header-title">
                <h4 className="card-title">Loan Table</h4>
              </CardTitle>
              <span className="text-primary float-right" id="collapse1">
                <i className="ri-code-s-slash-line" />
              </span>
            </div>
            <CardBody className="iq-card-body">
              <UncontrolledCollapse toggler="#collapse1">
                <Card>
                  <kbd className="bg-dark">
                    <span
                      data-copy-target="#basic-table1"
                      title="Copy"
                      data-toggle="tooltip"
                      className="float-right"
                      data-copy="true"
                    >
                      Copy
                    </span>
                    <pre className="text-white">
                      <code id="basic-table1">
                        {`
                                                
//---------------------------------- basic table ---------------------------------------------
<DataTable
    columns={tableData.header}
    data={tableData.body}
    pagination
/>

                                                    `}
                      </code>
                    </pre>
                  </kbd>
                </Card>
              </UncontrolledCollapse>
              <p>Here you can manage the tables</p>
              <DataTable
                columns={tableData.header}
                data={tableData.body}
                pagination
              />
            </CardBody>
          </Card>
        </Col>
        <Col sm="12">
          <Card className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <CardTitle className="iq-header-title">
                <h4 className="card-title">Fix Header Datatables</h4>
              </CardTitle>
              <span className="text-primary float-right" id="collapse2">
                <i className="ri-code-s-slash-line" />
              </span>
            </div>
            <CardBody className="iq-card-body">
              <UncontrolledCollapse toggler="#collapse2">
                <Card>
                  <kbd className="bg-dark">
                    <span
                      data-copy-target="#basic-table1"
                      title="Copy"
                      data-toggle="tooltip"
                      className="float-right"
                      data-copy="true"
                    >
                      Copy
                    </span>
                    <pre className="text-white">
                      <code id="basic-table1">
                        {`
                                                
//---------------------------------- basic table ---------------------------------------------
<DataTable
    columns={tableData.header}
    data={tableData.body}
    fixedHeader
    fixedHeaderScrollHeight="450px"
/>

                                                    `}
                      </code>
                    </pre>
                  </kbd>
                </Card>
              </UncontrolledCollapse>
              <p>
                To fix the header to top it has attribute{" "}
                <code> fixedHeader </code> and for setting up the scrollable
                portion height it has attribute{" "}
                <code> fixedHeaderScrollHeight="500px" </code> (height in px).
              </p>
              <DataTable
                columns={tableData.header}
                data={tableData.body}
                fixedHeader
                fixedHeaderScrollHeight="450px"
              />
            </CardBody>
          </Card>
        </Col>
        <Col sm="12">
          <Card className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <CardTitle className="iq-header-title">
                <h4 className="card-title">Bootstrap Datatables</h4>
              </CardTitle>
              <span className="text-primary float-right" id="collapse3">
                <i className="ri-code-s-slash-line" />
              </span>
            </div>
            <CardBody className="iq-card-body">
              <UncontrolledCollapse toggler="#collapse3">
                <Card>
                  <kbd className="bg-dark">
                    <span
                      data-copy-target="#basic-table1"
                      title="Copy"
                      data-toggle="tooltip"
                      className="float-right"
                      data-copy="true"
                    >
                      Copy
                    </span>
                    <pre className="text-white">
                      <code id="basic-table1">
                        {`
                                                
//---------------------------------- basic table ---------------------------------------------
<DataTable
    columns={tableData.header}
    data={tableData.body}
    pagination
    highlightOnHover
/>

                                                    `}
                      </code>
                    </pre>
                  </kbd>
                </Card>
              </UncontrolledCollapse>
              <p>
                To show the hover effect to the row we have to add the attribute{" "}
                <code> highlightOnHover </code>.
              </p>
              <DataTable
                columns={tableData.header}
                data={tableData.body}
                pagination
                highlightOnHover
              />
            </CardBody>
          </Card>
        </Col>
        <Col sm="12">
          <Card className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <CardTitle className="iq-header-title">
                <h4 className="card-title">Bootstrap Datatables</h4>
              </CardTitle>
              <span className="text-primary float-right" id="collapse4">
                <i className="ri-code-s-slash-line" />
              </span>
            </div>
            <CardBody className="iq-card-body">
              <UncontrolledCollapse toggler="#collapse4">
                <Card>
                  <kbd className="bg-dark">
                    <span
                      data-copy-target="#basic-table1"
                      title="Copy"
                      data-toggle="tooltip"
                      className="float-right"
                      data-copy="true"
                    >
                      Copy
                    </span>
                    <pre className="text-white">
                      <code id="basic-table1">
                        {`
                                                
//---------------------------------- basic table ---------------------------------------------
<DataTable
    columns={tableData.header}
    data={tableData.body}
    pagination
    expandableRows
    expandableRowsComponent={<ExpandedComponent />}
/>

                                                    `}
                      </code>
                    </pre>
                  </kbd>
                </Card>
              </UncontrolledCollapse>
              <p>
                To make expandable row you need to pass data to the custom
                component which will render on the expand event. For that, you
                have to add two attributes, first one is{" "}
                <code> expandableRows </code> and the other one is{" "}
                <code> expandableRowsComponent={<ExpandedComponent />} </code>.
                You can make custom <code> ExpandedComponent </code> component
                for it.
              </p>
              <DataTable
                columns={tableData.header}
                data={tableData.body}
                pagination
                expandableRows
                expandableRowsComponent={<ExpandedComponent />}
              />
            </CardBody>
          </Card>
        </Col>
        <Col sm="12">
          <Card className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <CardTitle className="iq-header-title">
                <h4 className="card-title">Bootstrap Datatables</h4>
              </CardTitle>
              <span className="text-primary float-right" id="collapse5">
                <i className="ri-code-s-slash-line" />
              </span>
            </div>
            <CardBody className="iq-card-body">
              <UncontrolledCollapse toggler="#collapse5">
                <Card>
                  <kbd className="bg-dark">
                    <span
                      data-copy-target="#basic-table1"
                      title="Copy"
                      data-toggle="tooltip"
                      className="float-right"
                      data-copy="true"
                    >
                      Copy
                    </span>
                    <pre className="text-white">
                      <code id="basic-table1">
                        {`
                                                
//---------------------------------- basic table ---------------------------------------------
<DataTable
    columns={tableData.header}
    data={tableData.body}
    pagination
    selectableRows
/>

                                                    `}
                      </code>
                    </pre>
                  </kbd>
                </Card>
              </UncontrolledCollapse>
              <p>
                To add selection checkbox for all row you need to add{" "}
                <code> selectableRows </code> the attribute.
              </p>
              <DataTable
                columns={tableData.header}
                data={tableData.body}
                pagination
                selectableRows
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Index;