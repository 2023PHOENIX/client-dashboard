import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
    CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

class AddBank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bankName: "",
      address: "",
      state: "",
      stateCode: "",
      gstIn: "",
      panId: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    if (name === "gstIn" || name === "panId") {
   
    }
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or validation here
    console.log(this.state);
  };
  //DRAG: PAN NUMBER
  validatePAN = (panNumber) => {
    // PAN number regex pattern (5 letters, 4 numbers, 1 letter)
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(panNumber);
  };

  validateGSTNumber = (gstNumber) => {
    // GST Number regex pattern based on your rules
    const gstNumberRegex =
      /^[0-9A-HJ-NP-Z]{2}[0-9A-Z]{10}[0-9A-Z][0-9]{2}[A-Z]{1}[0-9A-Z]{1}$/;
    return gstNumberRegex.test(gstNumber);
  };




  render() {
    return (
      <Row>
        <Col sm={12} lg={10}>
          <Card className={"iq-card"}>
            <CardBody className={"iq-card-body"}>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup className="form-group">
                  <Label htmlFor="bankName">
                    Bank Name<span className="text-danger">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="bankName"
                    name="bankName"
                    value={this.state.bankName}
                    onChange={this.handleInputChange}
                    placeholder="Enter your bank name"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label htmlFor="address">
                    Address<span className="text-danger">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleInputChange}
                    placeholder="Enter your address"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label htmlFor="state">
                    State<span className="text-danger">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="state"
                    name="state"
                    value={this.state.state}
                    onChange={this.handleInputChange}
                    placeholder="Enter your state"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label htmlFor="stateCode">
                    State Code<span className="text-danger">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="stateCode"
                    name="stateCode"
                    value={this.state.stateCode}
                    onChange={this.handleInputChange}
                    placeholder="Enter state code"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label htmlFor="gstIn">
                    GSTIn number<span className="text-danger">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control"

                    id="gstIn"
                    name="gstIn"
                    value={this.state.gstIn.toUpperCase()}
                    onChange={this.handleInputChange}
                    placeholder="Enter your GSTIn Number"
                  />
                  {this.state.gstIn &&
                    !this.validateGSTNumber(this.state.gstIn) && (
                      <span className="text-danger">Invalid GST Number</span>
                    )}
                </FormGroup>
                <FormGroup className="form-group">
                  <Label htmlFor="panId">
                    Pan Number<span className="text-danger">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="panId"
                    name="panId"
                    value={this.state.panId.toUpperCase()}
                    onChange={this.handleInputChange}
                    placeholder="Enter Your Pan Number"
                  />
                  {this.state.panId && !this.validatePAN(this.state.panId) && (
                    <span className="text-danger">Invalid PAN number</span>
                  )}
                </FormGroup>
                <Button color="primary" type="submit">
                  Submit
                </Button>
                {/* <Button className="btn iq-bg-danger" type="reset">
                  Cancel
                </Button> */}
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default AddBank;
