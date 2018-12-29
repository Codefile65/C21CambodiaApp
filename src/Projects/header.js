import React, { Component } from "react";
import Slider from '../slider.js';
import '../build/horizontal.css';
import '../skin/slider-animations.css';
import Drawer from "../lib/drawer.jsx";
import "../skin/global.css";
import "../skin/invite.css";
import "../skin/mini.css";
import '../skin/scss/style.css';
import Collapsible from 'react-collapsible';
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

    var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
    var browser = navigator.userAgent.toLowerCase(); 
    var isMobile = false; 
    for (var i=0; i<mobileAgent.length; i++){ if (browser.indexOf(mobileAgent[i])!=-1){ isMobile = true; 
    //alert(mobileAgent[i]); 
    window.location.href = '#/500';
    break; } } 

    



class Header extends Component {
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
  render(){
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
  
      return(
         
        <header id="header" >
        <div class="container1 header flex">
            <div class="flex-0-0-auto"><a href="http://www.shitonghk.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Century_21_seal_2018.svg/220px-Century_21_seal_2018.svg.png" style={{marginTop: "10px",width:'60px'}}/></a></div>
            <div class="flex-1-1-0 nav1">
                <ul>
                

                    <li class="nav-on"><a href="http://www.shitonghk.com/">Home</a></li>
                    <li class="fire nav1-li ">
                          <a class="nex-ico" href="#/home">Activity</a>
                          <ul class="">
                              <li><a href="http://www.shitonghk.com/au-1-0-1466-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html">马来西亚</a><a href="http://www.shitonghk.com/au-1-0-1467-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html">泰国</a><a href="http://www.shitonghk.com/au-1-0-1468-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html">柬埔寨 </a></li>
                          </ul>
                    </li>
                    <li><a href="http://www.shitonghk.com/yimin/Global/">News</a></li>
                    <li class="fire1"><a href="http://www.shitonghk.com/exhibition">Evaluation</a></li>
                    <li class="fire1"><div class="searchicon searchicon2"><span class="s_span2 fl"  onClick={() => this.openModal()}></span><input type="text" name="search"  onClick={() =>
                      this.setState({ openRight: !openRight, openLeft: false })}></input></div></li>
                  
                </ul>
                


                
            </div>
            <div class="flex-0-0-auto core">
                <ul>
                    <li class="login">
   <a href="http://www.shitonghk.com/login">login</a><a> | </a><a href="http://www.shitonghk.com/register">Register</a>
    
    </li>
    
    <li class="kefuphone">
    <div class="div1">
                <div class="searchicon searchicon1">
                     <div class="header_line fl">400-688-6160</div>
                     
                    <div class="header_search_btn fl">
                   
                    </div>
                    
                </div>
                
            </div>
    </li>
    
                </ul>
               
                
            </div>
            
        </div>
      
        
        {!openRight &&
        <Drawer
          {...drawerProps}
          width={this.state.width}
          fadeOut
          open={openLeft}
          onChange={open => this.setState({ openLeft: open })}
          noTouchOpen={noTouchOpen}
          noTouchClose={noTouchClose}
        >
          <div style={{ width: "100%" }}>
            
          </div>
          <div style={{ padding: "2em" }}>
            <h3>Navigation</h3>
          </div>
        </Drawer>}
        {!openLeft &&
        <Drawer
          right
          width={this.state.width}
          {...drawerProps}
          open={openRight}
          onChange={open => this.setState({ openRight: open })}
          noTouchOpen={noTouchOpen}
          noTouchClose={noTouchClose}
        >
         <div style={{ width: "100%"}}>
           
          </div>
          <div style={{ padding: "2em 2em 0 2em"  }}>
            <h3 style={{paddingBottom:"20px"}}><strong>Categories</strong></h3>
             <Tabs class="tabs1 tc"  
        defaultTab="All"
        onChange={(tabId) => { console.log(tabId) }}
      >
        <TabList >
        <Tab style={{paddingBottom:"30px",height:"20px",width:"102px",border: "1.3px solid #beaf87",marginRight:"10px"}} tabFor="All">All</Tab>
          
          <Tab style={{paddingBottom:"30px",height:"20px",width:"102px",border: "1.3px solid #beaf87",marginRight:"10px"}} tabFor="Condo">Condo</Tab>
          
        
         
        </TabList>
        <TabPanel tabId="All">
          <p>Tab All content</p>
        </TabPanel>
        <TabPanel tabId="Condo">
          <p>Tab 1 content</p>
        </TabPanel>
        
      </Tabs>
          </div>

           <div style={{ padding: "2em 2em 0 2em"  }}>
            <h3 style={{paddingBottom:"20px"}}><strong>Type</strong></h3>
            <ul style={{paddingBottom:"30px"}} class="tabs1 tc"><li1 class=""><a href="javascript:;">Rent</a></li1><li1 class=""><a href="javascript:;">Buy</a></li1></ul>
           
          </div>
          <div style={{ padding: "2em 2em 0 2em" }}>
            <h3 style={{paddingBottom:"20px"}}><strong>Room</strong></h3>
            <ul style={{paddingBottom:"30px"}} class="tabs1 tc"><li1 class=""><a href="javascript:;">1</a></li1><li1 class=""><a href="javascript:;">2</a></li1></ul>
            <ul style={{paddingBottom:"7px"}}></ul>
            
            <ul style={{paddingBottom:"30px"}} class="tabs1 tc"><li1 class=""><a href="javascript:;">3</a></li1><li1 class=""><a href="javascript:;">4</a></li1></ul>
            <ul style={{paddingBottom:"7px"}}></ul>
            
            <ul style={{paddingBottom:"30px"}} class="tabs1 tc"><li1 class=""><a href="javascript:;">5</a></li1><li1 class=""><a href="javascript:;">6</a></li1></ul>
            <ul style={{paddingBottom:"7px"}}></ul>
            
            <ul style={{paddingBottom:"30px"}} class="tabs1 tc"><li1 class=""><a href="javascript:;">Else</a></li1></ul>
         
          </div>
          <div style={{ padding: "2em 2em 0 2em" }}>
            <h3 style={{paddingBottom:"20px"}}><strong>Short</strong></h3>
            <ul style={{paddingBottom:"30px"}} class="tabs1 tc"><li1 class=""><a href="javascript:;">Default</a></li1><li1 class=""><a href="javascript:;"> High to Low</a></li1></ul>
            <ul style={{paddingBottom:"7px"}}></ul>
            
            <ul style={{paddingBottom:"30px"}} class="tabs1 tc"><li1 class=""><a href="javascript:;"> Low to high</a></li1><li1 class=""><a href="javascript:;">Total</a></li1></ul>
            <ul style={{paddingBottom:"7px"}}></ul>
            
            <ul style={{paddingBottom:"30px"}} class="tabs1 tc"><li1 class=""><a href="javascript:;">String to title</a></li1><li1 class=""><a href="javascript:;">GRR</a></li1></ul>
            <ul style={{paddingBottom:"7px"}}></ul>
            
            
          </div>
        </Drawer>}        
    </header>
      )
  }
}

export default Header;
