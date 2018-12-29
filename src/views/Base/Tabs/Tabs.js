import React, { Component } from 'react';
import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import { FilePond } from 'react-filepond';
import { AppSwitch } from '@coreui/react'
//import ReactSummernote from "react-summernote4";
//import "react-summernote4/lang/summernote-ru-RU"; // you can import any other locale
import ReactSummernote from './Summernote';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tooltip';
//import "./style.css"; // you should import bootstrap.css if you haven't done that before
import "react-summernote4/dist/react-summernote.css"; 
import 'filepond/dist/filepond.min.css';
import ReactQuill from 'react-quill';
import InputRange from 'react-input-range';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'react-quill/dist/quill.snow.css'; 
import './style.css' ;
import 'react-input-range/lib/css/index.css';
import {
  Table,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
 
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
 
} from 'reactstrap';
class Tabs extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
        value: 5,
      text: '',
       value5: {
        min: 3,
        max: 7,
      },
        value4: {
        min: 20,
        max: 90,
      },
    };
   
  
    this.handleChange = this.handleChange.bind(this)  
  }
  handleChange(value) {
    this.setState({ text: value })
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  
  
  handleThemeChange (newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme })
  }
  
  onChange(content) {
    console.log("onChange", content);
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12" className="mb-4" style={{paddingTop:'20px'}}>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Borey
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Condo
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  Apartment
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
               <Row>
               <Col xs="12" sm="8" >
            <Card>
              <CardHeader style={{backgroundColor:'#ffffff'}}>
                <strong>Borey Information</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody style={{backgroundColor:'#ffffff'}}>
                <FormGroup>
                  <Label htmlFor="company">Name of Project</Label>
                  <Input type="text" id="company" placeholder="Enter your Name of Project" />
                </FormGroup>
                <FormGroup row className="my-0">
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="city">Built Date</Label>
                      <Input type="date" id="city" placeholder="Enter your city" />
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="postal-code">Complate Date</Label>
                      <Input type="date" id="postal-code" placeholder="Postal Code" />
                    </FormGroup>
                  </Col>
                </FormGroup>
               
                <FormGroup row className="my-0">
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="city">GRR</Label>
                      <Input type="text" id="city" placeholder="Enter GRR" />
                    </FormGroup>
                  </Col>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="postal-code">Down Payment</Label>
                      <Input type="text" id="postal-code" placeholder="Enter Down Payment" />
                    </FormGroup>
                  </Col>
                </FormGroup>
               
              </CardBody>
               <CardHeader style={{backgroundColor:'#ffffff'}}>
                <strong>Information</strong>
               
              </CardHeader>
              <CardBody style={{backgroundColor:'#ffffff'}}>
             
              <ReactQuill 
              
                  onChange={this.handleChange} 
                  
          placeholder={'Write something...'}
          />
         
              </CardBody>
                <CardHeader style={{backgroundColor:'#ffffff'}}>
                <strong>Household Introduction</strong>
               
              </CardHeader>
              <CardHeader style={{backgroundColor:'#ffffff'}}>
                <strong>Gallery</strong>
               
              </CardHeader>
              <CardBody style={{backgroundColor:'#ffffff'}}>
              <FilePond style={{backgroundColor:'#ffffff'}} allowMultiple={true} server="http://192.168.33.10"/>
              </CardBody>
             
                        </Card>
          </Col>
          <Col xs="12" md="4" >
            <Card>
              <CardHeader style={{backgroundColor:'#ffffff'}}>
                <strong>Price</strong> between
              </CardHeader>
              <CardBody style={{backgroundColor:'#ffffff'}}>
                <Form action="" method="post" className="form-horizontal">
                 
                  <FormGroup row>
                    <Col md="12">
                      <Label htmlFor="city">Min Price</Label>
                      <InputGroup>
                     
                        <InputGroupAddon addonType="prepend">
                         <InputGroupText>$</InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id="input3-group1" name="input3-group1" placeholder=".." />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>.00</InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                  
                    <Col md="12">
                      <Label htmlFor="city">Max Price</Label>
                      <InputGroup>
                     
                        <InputGroupAddon addonType="prepend">
                         <InputGroupText>$</InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id="input3-group1" name="input3-group1" placeholder=".." />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>.00</InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                
                    </Col>
                  </FormGroup>
                 
                </Form>
              </CardBody>

 <CardHeader style={{backgroundColor:'#ffffff'}}>
                <strong>Average</strong> Rent
              </CardHeader>
              <CardBody >
   <FormGroup  row className="my-0" >
               <Col xs="12">
                    <InputRange
          maxValue={100}
          minValue={0}
          formatLabel={value => `${value} %`}
          value={this.state.value4}
          onChange={value => this.setState({ value4: value })}
          onChangeComplete={value => console.log(value)} />
        
                  </Col>
                  
                 
                   
                  </FormGroup>
              </CardBody>


              <CardHeader style={{backgroundColor:'#ffffff'}}>
                <strong>State</strong> Groups
              </CardHeader>
              <CardBody >
   <FormGroup  row className="my-0" style={{backgroundColor:'#efeff4',borderRadius:'22.5px',borderColor:'#9a9a9a'}}>
               <Col xs="4">
                    <FormGroup style={{marginLeft:45}}>
                      <Label htmlFor="city">Rent</Label>
                     
               <AppSwitch className={'mx-1'} variant={'3d'} color={'primary'} label dataOn={'\u2713'} dataOff={'\u2715'}/>
             
                    </FormGroup>
                  </Col>
                  
                  <Col xs="4">
                    <FormGroup style={{marginLeft:55}}>
                      <Label htmlFor="city">Sale</Label>
                       <AppSwitch className={'mx-1'} variant={'3d'} color={'primary'} label dataOn={'\u2713'} dataOff={'\u2715'}/>
            
                    </FormGroup>
                  </Col>
                  
                 
                   
                  </FormGroup>
              </CardBody>

              <CardHeader style={{backgroundColor:'#ffffff'}}>
                <strong>Address</strong> Detail
              </CardHeader>
              <CardBody style={{backgroundColor:'#ffffff'}}>
                <Form action="" method="post" className="form-horizontal">
                    <FormGroup>
                      <Label htmlFor="postal-code">Country</Label>
                       <Input type="select" name="select" id="select">
                        <option value="0">Select Country</option>
                        <option value="1">Cambodia </option>
                        <option value="2">Chiness</option>
                        <option value="3">AEU</option>
                      </Input>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="12">
                    
                         <FormGroup>
                      <Label htmlFor="city">Address 1#</Label>
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="2"
                             placeholder="Enter Address 1#..." />
                    
                    </FormGroup>
                       
                    
                    </Col>
                  </FormGroup>
                    <FormGroup row>
                    <Col md="12">
                    
                         <FormGroup>
                      <Label htmlFor="city">Address 2#</Label>
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="2"
                             placeholder="Enter Address 2#..." />
                    
                    </FormGroup>
                       
                    
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
            
          </Col>



               </Row>
               <Row >
               <Col xs="12" sm="12" >
            <Card style={{backgroundColor:'#ffffff'}}>
             <CardHeader style={{backgroundColor:'#ffffff'}}>
                <strong>Property Type</strong>
                
              </CardHeader>
             
              <CardBody style={{backgroundColor:'#ffffff'}}>
               
                <FormGroup row className="my-0">
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="city">Type</Label>
                      <Input type="text" id="city" placeholder="Enter Type" />
                    </FormGroup>
                  </Col>
                  
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="city">Width</Label>
                      <Input type="text" id="city" placeholder="Width" />
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="postal-code">Height </Label>
                      <Input type="text" id="postal-code" placeholder="Height" />
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="postal-code">Floor</Label>
                      <Input type="text" id="postal-code" placeholder="Floor" />
                    </FormGroup>
                  </Col>
                    <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="postal-code">Bedroom</Label>
                      <Input type="text" id="postal-code" placeholder="Enter" />
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="city">Bathroom</Label>
                      <Input type="text" id="city" placeholder="Bathroom " />
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="postal-code">Parking </Label>
                      <Input type="text" id="postal-code" placeholder="Parking" />
                    </FormGroup>
                  </Col>
                   
                   <Col xs="4">
                    <FormGroup>
                   
                   <CardHeader style={{backgroundColor:'#ffffff',marginTop:'20px'}}>
                   <Button type="submit" size="ml" color="success" className="cui-note" style={{marginRight:'20px'}}>Add</Button>
             
                <strong>List of Property Type</strong>
                 </CardHeader>
               </FormGroup>
                  </Col>
                </FormGroup>
               
                   
               
            
             
           
                <Table responsive style={{backgroundColor:'#f3f1f2',borderRadius:"22.5px",borderColor:"#9a9a9a"}}>
                  <thead>

                  <tr>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Samppa Nori</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Estavan Lykos</td>
                    <td>2012/02/01</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="danger">Banned</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Chetan Mohamed</td>
                    <td>2012/02/01</td>
                    <td>Admin</td>
                    <td>
                      <Badge color="secondary">Inactive</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Derick Maximinus</td>
                    <td>2012/03/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="warning">Pending</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Friderik Dávid</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                
              </CardBody>
 
              <CardHeader style={{backgroundColor:'#ffffff'}}>
                <strong> Graphic Feature</strong>
               
              </CardHeader>
              
              <CardBody style={{backgroundColor:'#ffffff'}}>
              <ReactQuill 
                  onChange={this.handleChange} 
                  modules={Tabs.modules}
          formats={Tabs.formats}
          bounds={'.app'}
          placeholder={'Write something...'}
          />
             
              </CardBody>
              <CardHeader style={{backgroundColor:'#ffffff'}}>
                <strong>Buyer Information</strong>
               
              </CardHeader>
              <CardBody style={{backgroundColor:'#ffffff'}}>
            
              <ReactQuill 
                  onChange={this.handleChange} 
                  modules={Tabs.modules}
          formats={Tabs.formats}
          bounds={'.app'}
          placeholder={'Write something...'}
          />
             
              </CardBody>
              <CardHeader style={{backgroundColor:'#ffffff'}}>
                <strong>Commitment</strong>
               
              </CardHeader>
              <CardBody>
            
              <ReactQuill 
                  onChange={this.handleChange} 
                  modules={Tabs.modules}
          formats={Tabs.formats}
          bounds={'.app'}
          placeholder={'Write something...'}
          />
             
              </CardBody>
            </Card>
          </Col>
        



               </Row>
                    </TabPane>
              <TabPane tabId="2">
                2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </TabPane>
              <TabPane tabId="3">
                2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </TabPane>
            </TabContent>
          </Col>
          
        </Row>
      </div>
    );
  }
}
Tabs.modules = {
 
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Tabs.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

/* 
 * PropType validation
 */
Tabs.propTypes = {
  placeholder: PropTypes.string,
}

/* 
 * Render component on page
 */


export default Tabs;
