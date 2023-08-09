import React from "react";
import {
  Row,
  Col,
  Card,
  div,
  CardTitle,
  CardBody,
  CardText,
  Form,
  UncontrolledCollapse,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { index } from "../../../config/pluginsInit";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFiles: [],
    };
  }

  componentDidMount() {
    setTimeout(function () {
      index();
    }, 800);
  }

    // by Abhishek
  handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    this.setState({ selectedFiles });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, including selected files
    console.log("Form submitted with files:", this.state.selectedFiles);
  };
    render() {
      const { selectedFiles } = this.state;
    return (
      <>
        <Row>
          <Col sm={12} lg={6}>
            <Card className={"iq-card"}>
              <div className={"iq-card-header d-flex justify-content-between"}>
                <CardTitle className={"card-title"}>
                  <h4>Loan Form</h4>
                </CardTitle>
                <span className="text-primary float-right" id="collapse2">
                  <i className="ri-code-s-slash-line" />
                </span>
              </div>

              <CardBody className={"iq-card-body"}>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </CardText>
                <UncontrolledCollapse toggler="#collapse2">
                  <Card>
                    <kbd className="bg-dark">
                      <span
                        data-copy-target="#sofbox-color"
                        title="Copy"
                        data-toggle="tooltip"
                        className="text-white float-right"
                        data-copy="true"
                      >
                        Copy
                      </span>
                      <pre className="text-white">
                        <code>
                          {`
<Form>
<FormGroup className="form-group">
<Label htmlFor="exampleInputText1">Input Text </Label>
<Input type="text" className="form-control" id="exampleInputText1"
value="Mark Jhon" placeholder="Enter Name" />
</FormGroup>
<FormGroup className="form-group">
<Label htmlFor="exampleInputEmail3">Email Input</Label>
<Input type="email" className="form-control" id="exampleInputEmail3"
value="markjhon@gmail.com" placeholder="Enter Email" />
</FormGroup>
<FormGroup className="form-group">
<Label htmlFor="exampleInputurl">Url Input</Label>
<Input type="url" className="form-control" id="exampleInputurl"
value="https://getbootstrap.com" placeholder="Enter Url" />
</FormGroup>
<FormGroup className="form-group">
<Label htmlFor="exampleInputphone">Teliphone Input</Label>
<Input type="tel" className="form-control" id="exampleInputphone"
value="1-(555)-555-5555" />
</FormGroup>
<FormGroup className="form-group">
<Label htmlFor="exampleInputNumber1">Number Input</Label>
<Input type="number" className="form-control" id="exampleInputNumber1"
value="2356" />
</FormGroup>
<FormGroup className="form-group">
<Label htmlFor="exampleInputPassword3">Password Input</Label>
<Input type="password" className="form-control" id="exampleInputPassword3"
value="markjhon123" placeholder="Enter Password"/>
</FormGroup>
<FormGroup className="form-group">
<Label htmlFor="exampleInputdate">Date Input</Label>
<Input type="date" className="form-control" id="exampleInputdate"
value="2019-12-18" />
</FormGroup>
<FormGroup className="form-group">
<Label htmlFor="exampleInputmonth">Month Input</Label>
<Input type="month" className="form-control" id="exampleInputmonth"
value="2019-12" />
</FormGroup>
<FormGroup className="form-group">
<Label htmlFor="exampleInputweek">Week Input</Label>
<Input type="week" className="form-control" id="exampleInputweek"
value="2019-W46" />
</FormGroup>
<FormGroup className="form-group">
<Label htmlFor="exampleInputtime">Time Input</Label>
<Input type="time" className="form-control" id="exampleInputtime" defaultValue="13:45" />
</FormGroup>
<FormGroup className="form-group">
<Label htmlFor="exampleInputdatetime">Date and Time Input</Label>
<Input type="datetime-local" className="form-control" id="exampleInputdatetime"
value="2019-12-19T13:45:00" />
</FormGroup>
<FormGroup className="form-group">
<Label htmlFor="exampleFormControlTextarea1">Example textarea</Label>
<textarea className="form-control" id="exampleFormControlTextarea1"
rows="5"></textarea>
</FormGroup>
<Button color={"primary"}>Submit</Button>
<Button  className="btn iq-bg-danger">cancle</Button>
</Form>
                                                `}
                        </code>
                      </pre>
                    </kbd>
                  </Card>
                </UncontrolledCollapse>

                <Form>
                  <FormGroup className="form-group">
                    <Label htmlFor="exampleInputText1">Loan Type</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="exampleInputText1"
                      defaultValue="Mark Jhon"
                      placeholder="Enter Name"
                    />
                  </FormGroup>
                  {/* <FormGroup className="form-group">
                    <Label htmlFor="exampleInputEmail3">Email Input</Label>
                    <Input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail3"
                      defaultValue="markjhon@gmail.com"
                      placeholder="Enter Email"
                    />
                  </FormGroup> */}
                  <FormGroup className="form-group">
                    <span> DropDown</span>
                    <select className="form-control">
                      <option value="" disabled selected>
                        Select your option
                      </option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </FormGroup>
              
                  {/* <FormGroup className="form-group">
                    <Label htmlFor="exampleInputPassword3">
                      Password Input
                    </Label>
                    <Input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword3"
                      defaultValue="markjhon123"
                      placeholder="Enter Password"
                    />
                  </FormGroup> */}
                  {/* <FormGroup className="form-group">
                    <Label htmlFor="exampleInputdate">Date Input</Label>
                    <Input
                      type="date"
                      className="form-control"
                      id="exampleInputdate"
                      defaultValue="2019-12-18"
                    />
                  </FormGroup> */}
                  {/* <FormGroup className="form-group">
                    <Label htmlFor="exampleInputmonth">Month Input</Label>
                    <Input
                      type="month"
                      className="form-control"
                      id="exampleInputmonth"
                      defaultValue="2019-12"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <Label htmlFor="exampleInputweek">Week Input</Label>
                    <Input
                      type="week"
                      className="form-control"
                      id="exampleInputweek"
                      defaultValue="2019-W46"
                    />
                  </FormGroup> */}
                  {/* <FormGroup className="form-group">
                    <Label htmlFor="exampleInputtime">Time Input</Label>
                    <Input
                      type="time"
                      className="form-control"
                      id="exampleInputtime"
                      defaultValue="13:45"
                    />
                  </FormGroup> */}
                  {/* <FormGroup className="form-group">
                    <Label htmlFor="exampleInputdatetime">
                      Date and Time Input
                    </Label>
                    <Input
                      type="datetime-local"
                      className="form-control"
                      id="exampleInputdatetime"
                      defaultValue="2019-12-19T13:45:00"
                    />
                  </FormGroup> */}
                  {/* <FormGroup className="form-group">
                    <Label htmlFor="exampleFormControlTextarea1">
                      Description
                    </Label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                    ></textarea>
                  </FormGroup> */}
                  <FormGroup className="form-group">
                    <Label htmlFor="exampleFormControlTextarea1">
                      Description
                    </Label>
                    <ReactQuill
                      value={this.state.content}
                      onChange={this.handleEditorChange}
                      modules={Index.modules}
                      formats={Index.formats}
                    />
                  </FormGroup>
                  <FormGroup>
                    <form onSubmit={this.handleSubmit}>
                      <FormGroup className="form-group">
                        <Label htmlFor="exampleFormControlFile1">
                          Select Images and Videos
                        </Label>
                        <input
                          type="file"
                          className="form-control-file"
                          id="exampleFormControlFile1"
                          accept="image/*, video/*"
                          multiple
                          onChange={this.handleFileChange}
                          
                        />
                      </FormGroup>
                      <button type="submit" className="btn btn-primary">
                        Upload
                      </button>
                    </form>
                    <FormGroup>
                      <h3>Selected Files:</h3>
                      <ul>
                        {selectedFiles.map((file, index) => (
                          <li key={index}>{file.name}</li>
                        ))}
                      </ul>
                    </FormGroup>
                  </FormGroup>

                  <Button color={"primary"}>Submit</Button>
                  <Button className="btn iq-bg-danger">cancle</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
Index.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    ["clean"],
  ],
};

Index.formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
];
export default Index;
