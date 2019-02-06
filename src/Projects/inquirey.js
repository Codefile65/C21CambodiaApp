import React, { Component } from "react";
import Slider from '../slider.js';
import '../build/horizontal.css';
import '../skin/slider-animations.css';
import Drawer from "../lib/drawer.jsx";
import ReactPhoneInput from 'react-phone-input-2';
import { ValidatingFormGroup } from 'reactstrap-validation';
import "../skin/global.css";
import "../skin/invite.css";
import {
   
    Button,
    ButtonDropdown,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Collapse,
   
  
  
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
    Row,
  } from 'reactstrap';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

import "../skin/mini.css";
import '../skin/scss/style.css';
import '../skin/Chart.css';
import Header from './header'
import FloatingMenu from './floating'
import Flooter from './flooter'

//import { ReactSlackChat } from 'react-slack-chat';
import imagenotavaiable from "../skin/Images/no_photo_available.gif";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import Modal from 'react-awesome-modal'
import {  h1, p, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem} from 'reactstrap';
//import Drawer from 'react-motion-drawer';
import image from "../skin/Images/planurahuette.jpg";
import imagephone from "../skin/Images/index.png";
import PhoneInput, { formatPhoneNumber, isValidPhoneNumber } from 'react-phone-number-input'

import 'react-phone-number-input/style.css'
//import PhoneInput from 'react-phone-number-input'
import FloatingMenuItem from './floating'
import superagent from 'superagent';
import "../skin/style2.css";
import "../skin/reset.css";

const items = [
    {


        src: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
        altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
        caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    },
    {
        src: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
        altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
        caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    },
    {
        src: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
        altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
        caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    },
];

const invertDirection = {
    asc: "desc",
    desc: "asc"
};



class inquirey extends Component {


    constructor(props) {
        super(props);

    }

    state = {
        data: [],
        data1: [],
        country:'',
        issue:'',
        nameinq:'',
       
        phone:'',
        id: '',
        eventlist:[],
        name: '',
        projectalllist: [],
        nameproject: '',
        grr: '',
        countryproject: '',
        gettop4: [],
        idselectt: '',
        thumbnail: '',
        start_price: '',
        end_price: '',
        project_type: '',
        typeAll: [
                {"id": 0, "type": "All"}
              
           ],//, "list"= [], "pagination"= ["page"= 1, "limit" = 10]];

        visible: false,
        editIdx: -1,
        columnToSort: "",
        sortDirection: "desc",
        count: 10,

        visible: false,
        activeItem: 'home',
        openLeft: false,
        openRight: false,
        Getdata: [],
        limit: 10,
        page: 1,
        totalpage: '',
        drawerStyle: `
    {
      "background": "#F9F9F9",
      "boxShadow": "rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px"
    }`,
        relativeWidth: false,
        width: 300,
        noTouchOpen: false,
        noTouchClose: false,
    };
    countrychange = (event) => {
        this.setState({ country: event.target.value })
    }
    nameinqchange = (event) => {
        this.setState({ nameinq : event.target.value })
    }
    issuechange = (event) => {
        this.setState({ issue : event.target.value })
    }
    phonechange = (value) => {
        this.setState({ phone : value })
    }
   inquery(){
    superagent
    .post(`https://century21api.herokuapp.com/api/user-question`)
    //     //  .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
    //     // .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
    //     //.set('Authorization', 'Bearer perm: {this.getAuthenticationToken})
        .send({ country: this.state.country, issue: this.state.issue, name: this.state.nameinq, phone: this.state.phone })

        .end((err, res) => {
           if (err) { this.setState({ errorMessage: 'Cannot retrieve data form server' }); return; }
           this.setState({
              

            });
        });
   }
   render() {
    const { phone } = this.state
    const { initialValid } = this.props;
   return(


            
            <div id="lim_mini" style={{ background: "rgba(0, 0, 0, 0) linear-gradient(rgb(51, 51, 51) 0%, rgb(21, 21, 21) 100%) repeat scroll 0% 0%", boxShadow: "rgba(51, 51, 51, 0.4) 0px 13px 40px 0px"}} class="chat_entry">           <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
            <div id="lim_mini_icon" class="lim_mini_icon-message"><div id="lim_mini_new" class="lim_mini_badge" style={{display: "none"}} data-num="0">0</div></div>
               
               </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto',width:'250px',height:'auto',borderRadius:'10px',boxShadow: "rgba(51, 51, 51, 0.4) 0px 13px 40px 0px"}}>
              <DropdownItem header tag="div" className="text-center" style={{backgroundColor:'#fff',borderRadius:'10px'}}>
              
              
              <CardHeader>
               
                <img style={{width:'50px'}} src={imagephone}/><br/>
               
                </CardHeader>
                <a>One-on-one communication, we will </a><br/>
                <a>anwser your questions for the first time.</a>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">
                <ValidatingFormGroup trigger="change" valid={initialValid} onStateChange={console.log}>
       
                  <FormGroup row>
                   
                   
                      <Input type="Fullname" id="hf-Fullname" name="hf-Fullname" placeholder="Enter Full Name..." autoComplete="Fullname" value={this.state.nameinq} onChange={this.nameinqchange.bind(this)}  />
                      <FormText className="help-block">Please enter your Fullname</FormText>
                
                   
                  </FormGroup>
                  <FormGroup row>
                  <ReactPhoneInput style={{width:'300px'}} defaultCountry={'kh'} value={this.state.phone} onChange={this.phonechange.bind(this)}/>
                               
                      
                
                           
                       <FormText className="help-block" style={{paddingTop:'20px'}}>Please enter your phone number</FormText>
                    
                    </FormGroup>
                    <FormGroup row>
                 
                  <Input type="select" name="ccyear" id="ccyear" value={this.state.country} onChange={this.countrychange.bind(this)} >
                  <option value=""> ..None..</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Malayia">Malayia</option>
                  <option value="Dobia">Dobia</option>
                  
                      </Input>              
                      <FormText className="help-block">Select Country</FormText>
                   
                    </FormGroup>
                  <FormGroup row>
                  <Input type="textarea" name="textarea-input" id="textarea-input" rows="5" value={this.state.issue} onChange={this.issuechange.bind(this)}
                             placeholder="Content..." />
                  </FormGroup>
                 
                  <CardHeader>
                  <Button type="submit"  style={{width:'130px',backgroundColor:'#beaf85',color:'#fff',borderRadius:'20px'}} onClick={this.inquery.bind(this)}> Submit</Button>
                </CardHeader>
               
                </ValidatingFormGroup>
             
                </Form>
              </CardBody>
              
              
              </DropdownItem>
             
            </DropdownMenu>
          </AppHeaderDropdown></div>
              
   )

   }





}

export default inquirey;