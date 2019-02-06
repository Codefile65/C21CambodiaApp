import React, { Component } from "react";
import Slider from '../slider.js';
import '../build/horizontal.css';
import '../skin/slider-animations.css';
import Drawer from "../lib/drawer.jsx";
import '../skin/housedetail.css'
import "../skin/global.css";
import "../skin/invite.css";
import "../skin/mini.css";
import '../skin/scss/style.css';
import Header from './header'
import Flooter from './flooter'
import superagent from 'superagent';
//import { ReactSlackChat } from 'react-slack-chat';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import Modal from 'react-awesome-modal'
import { Button, h1, p, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Row } from 'reactstrap';
//import Drawer from 'react-motion-drawer';
import image from "../skin/Images/planurahuette.jpg";

import "../skin/style2.css";
import "../skin/reset.css";
const items = [
    {
        
       
      src: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
      altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
      caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    },
    {
      src:'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
      altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
      caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    },
    {
      src:'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
      altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
      caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    },
  ];

const invertDirection = {
  asc: "desc",
  desc: "asc"
};

   



class FloaterEvent extends Component {
  
    
    constructor(props) {
        super(props);
      
      }
  state = {
    data: [
     
    ],
    visible : false,
    editIdx: -1,
    columnToSort: "",
    eventlist:[],
    sortDirection: "desc",
    count:10,
    openLeft: false,
    openRight: false,
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
  setWidth = e => {
    this.setState({
      width: Number(e.target.value) || e.target.value
    });
  };

  setTouch = e => {
    this.setState({
      [e.target.name]: !e.target.checked
    })
  }
  
openModal() {
    this.setState({
        visible : true
    });
}

closeModal() {
    this.setState({
        visible : false
    });
}
componentDidMount() {
  
  
  superagent
  .get(`https://century21api.herokuapp.com/api/events`)
  //  .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
  // .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  //.set('Authorization', 'Bearer perm: {this.getAuthenticationToken}
 // .send({ country_id: sessionStorage.getItem("country_id"), project_type_id: sessionStorage.getItem("project_type_id"),end_price:sessionStorage.getItem("end_price"),rent_or_buy:sessionStorage.getItem("end_price"),room_amount:sessionStorage.getItem("room_amount"),sort:sessionStorage.getItem("sort"), start_price:sessionStorage.getItem("start_price"),title: sessionStorage.getItem("title") })

  .end((err, res) => {
      if (err) { this.setState({ errorMessage: 'Cannot retrieve data form server' }); return; }
    
       this.setState({
           eventlist: res.body.result,
           

       });
  });
}
  setDrawerStyle = e => {
    e.preventDefault()
    this.setState({
      drawerStyle: this.drawerStyleRef.value
    })
  }
    render() {
        const blockElements = {
            content: 'tabs-content',
            panel: 'tabs-panel',
            label: 'tabs-title'
        }
        const {
            drawerStyle: stringDrawerStyle,
            openLeft,
            openRight,
            noTouchOpen,
            noTouchClose
          } = this.state;
      
          let drawerStyle = {}
          try {
            drawerStyle = JSON.parse(stringDrawerStyle)
          } catch (err) {
            console.error('Error parsing JSON: ', err)
          }
      
          const drawerProps = {
            overlayColor: "rgba(255,255,255,0.6)",
            drawerStyle
          };
      
    return (
        <div class="listhothouse clear overflow mb20">
         <h2 class="mb10"><span class="listh">Lastest Event</span></h2>
       {  this.state.eventlist
         .filter((todo, index) => (index < 4))
       .map((todo) => {
    
    return(
    <dl>    <dd><a href="http://www.shitonghk.com/au/324.html"><img src={todo.banner}/></a><a href="http://www.shitonghk.com/au/324.html">{todo.title}</a><span>Description：{todo.description}</span></dd>
               </dl>
          );
        })}
      </div>

);
    
}

}

export default FloaterEvent;