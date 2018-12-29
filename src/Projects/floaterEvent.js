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
        <h2 class="mb10"><span class="listh">推介项目</span></h2>
        <dl>    <dd><a href="http://www.shitonghk.com/au/324.html"><img src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/products/apple-products-section1-one-holiday-201811?wid=2560&hei=1046&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1540576114151"/></a><a href="http://www.shitonghk.com/au/324.html">金边皇宫区公寓East One</a><span>面积：45 - 99平米价格：69.00 - 200.00万人民币</span></dd>
                <dd><a href="http://www.shitonghk.com/au/279.html"><img src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/products/apple-products-section1-one-holiday-201811?wid=2560&hei=1046&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1540576114151"/></a><a href="http://www.shitonghk.com/au/279.html">金边“汤臣一品”-香格里拉公寓</a><span>面积：42 - 96平米 价格：60.00 - 135.00万人民币</span></dd>
                <dd><a href="http://www.shitonghk.com/au/276.html"><img src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/products/apple-products-section1-one-holiday-201811?wid=2560&hei=1046&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1540576114151"/></a><a href="http://www.shitonghk.com/au/276.html">吉隆坡市中心丽阳豪庭—The Residences</a><span>面积：66 - 277平米 价格：289.00 - 440.00万人民币</span></dd>
                <dd><a href="http://www.shitonghk.com/au/277.html"><img src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/products/apple-products-section1-one-holiday-201811?wid=2560&hei=1046&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1540576114151"/></a><a href="http://www.shitonghk.com/au/277.html">吉隆坡双子塔豪景园—Eaton</a><span>面积：59 - 172平米
            价格：118.00 - 177.00万人民币</span></dd>
              </dl>
      </div>

);
    
}

}

export default FloaterEvent;