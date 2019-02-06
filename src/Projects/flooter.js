import React, { Component } from "react";
import Slider from '../slider.js';
import '../build/horizontal.css';
import '../skin/slider-animations.css';
import Drawer from "../lib/drawer.jsx";
import ReactDOM from 'react-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import "../skin/global.css";
import "../skin/invite.css";
import "../skin/mini.css";
import '../skin/scss/style.css';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import logoc21 from '../skin/Images/logocentury21Cambodia.png'
import C21 from '../skin/Images/wh.png'
import 'react-chat-widget/lib/styles.css';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import "../skin/floatingmenu.css";
import "../skin/style2.css";
import "../skin/reset.css";
import "../skin/flaotbutton.scss";

class Flooter extends Component {
  constructor(props) {
    super(props);
    this.state = { show : false };
    this.toggleDiv = this.toggleDiv.bind(this)
  }
state = {
  isOpen: false,
 
}
toggleDiv = () => {
  const { show } = this.state;
  this.setState( { show : !show } )
}
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }
    render(){
      const { classes } = this.state;
    return(
               
       <footer1>
          <div className="App">
        
       
     
     
      </div>
       <div class="footer1-link">
       <div class="link container1">
       
       <a href="javascript:void(0);" title="Ant Cellular Travel Guide" target="_blank">Ant Cellular Travel Guide</a><a href="javascript:void(0);" title="Cambodian Chinese Counsellor" target="_blank">Cambodian Chinese Counsellor</a><a href="javascript:void(0);" title="Chinese Embassy in CambodiaChinese Embassy in Cambodia" target="_blank">Chinese Embassy in Cambodia</a><a href="http://www.shitonghk.com/e/public/GotoSite/?lid=11&amp;url=http%3A%2F%2Fglobalhotel.tuniu.com%2F" title="Tuniu Travel Network" target="_blank">Tuniu Travel Network</a><a href="http://www.shitonghk.com/e/public/GotoSite/?lid=13&amp;url=http%3A%2F%2Fhotels.ctrip.com%2Finternational%2F" title="Ctrip" target="_blank">Ctrip</a><a href="http://www.shitonghk.com/e/public/GotoSite/?lid=14&amp;url=http%3A%2F%2Fwww.jpzzs.com%2F" title="Cambodia Chamber of Commerce in Cambodia" target="_blank">Cambodia Chamber of Commerce in Cambodia</a></div>
       </div>
       <div class="footer1Top">
       <div class="container1 flex">
       <div class="flex-0-0-auto">
       <ul>
           <li class="footer1-logo"><img src={logoc21} alt=""/></li>
           <li class="footer1-phone">
           <p></p>
           <span>全国统一服务热线 （工作日 6:00 - 18:00）</span></li>
           <li class="footer1-email">service@shitonghk.com</li>
       </ul>
       </div>
       <div class="flex-1-1-0">
       <div class="footer1_nav1 flex">
       <div class="flex-1-1-0">
     
     </div>
       </div>
       </div>
       <div class="flex-0-0-auto"><img src={C21} style={{marginTop: '-12px'}} alt=""/>                 <span class="wh">CAMBODIA</span></div>
       </div>
       </div>
       <div class="footer1Bottom">
       <p>©2017 <em>WorldCom Overseas Investment Consulting (Century 21 Cambodia) Co., Ltd.</em> all rights reserved&nbsp; <a href="http://www.miitbeian.gov.cn/"></a></p>
       </div>
   
     
 <div class="main"/>

       </footer1>  
        )
    }
    
}

export default Flooter;
