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



import "../skin/style2.css";
import "../skin/reset.css";
class Flooter extends Component {


  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }
    render(){

        return(
               
       <footer1>
          <div className="App">
          <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={"" }
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />
      
      </div>
      </div>
       <div class="footer1-link">
       <div class="link container1">
       <h3>友情链接</h3>
       <a href="http://www.shitonghk.com/e/public/GotoSite/?lid=8&amp;url=http%3A%2F%2Fz.mafengwo.cn%2F" title="蚂蜂窝旅游指南" target="_blank">蚂蜂窝旅游指南</a><a href="http://www.shitonghk.com/e/public/GotoSite/?lid=9&amp;url=http%3A%2F%2Fcb.mofcom.gov.cn%2F" title="柬埔寨中国参赞" target="_blank">柬埔寨中国参赞</a><a href="http://www.shitonghk.com/e/public/GotoSite/?lid=10&amp;url=http%3A%2F%2Fkh.china-embassy.org%2Fchn%2F" title="中国驻柬使馆" target="_blank">中国驻柬使馆</a><a href="http://www.shitonghk.com/e/public/GotoSite/?lid=11&amp;url=http%3A%2F%2Fglobalhotel.tuniu.com%2F" title="途牛旅游网" target="_blank">途牛旅游网</a><a href="http://www.shitonghk.com/e/public/GotoSite/?lid=13&amp;url=http%3A%2F%2Fhotels.ctrip.com%2Finternational%2F" title="携程" target="_blank">携程</a><a href="http://www.shitonghk.com/e/public/GotoSite/?lid=14&amp;url=http%3A%2F%2Fwww.jpzzs.com%2F" title="柬埔寨浙江总商会" target="_blank">柬埔寨浙江总商会</a><a href="http://www.shitonghk.com/e/public/GotoSite/?lid=15&amp;url=http%3A%2F%2Fwww.visitcambodia.com.cn%2Findex.html" title="柬埔寨国家旅游局官网" target="_blank">柬埔寨国家旅游局官网</a></div>
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
       <h3>东南亚房产</h3>
       <a href="http://www.shitonghk.com/au-1-0-1466-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html">马来西亚</a>                        
        <a href="http://www.shitonghk.com/au-1-0-1467-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html">泰国</a>                   
        <a href="http://www.shitonghk.com/au-1-0-1468-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html">柬埔寨</a></div>
       <div class="flex-1-1-0">
       <h3>移民海外</h3>
       <a href="http://www.shitonghk.com/yimin/Global/">投资移民国家</a>                       
         <a href="http://www.shitonghk.com/yimin/Global/">购房移民国家</a>                        
         <a href="http://www.shitonghk.com/yimin/Global/">护照移民国家</a></div>
       <div class="flex-1-1-0">
       <h3>资讯</h3>
       <a href="http://www.shitonghk.com/news/faq">移民政策</a>                      
          <a href="http://www.shitonghk.com/news/kuaixun">房产资讯</a>               
          <a href="http://www.shitonghk.com/news/au">活动快报</a></div>
       <div class="flex-1-1-0">
       <h3>活动</h3>
       <a href="http://www.shitonghk.com/exhibition">活动</a></div>
       <div class="flex-1-1-0">
       <h3>关于我们</h3>
       <a href="http://www.shitonghk.com/about/profile.html">关于我们</a></div>
       <div class="flex-1-1-0">
       <h3>评估</h3>
       <a href="http://www.shitonghk.com/pinggu.html">一键评估</a></div>
       </div>
       </div>
       <div class="flex-0-0-auto"><img src={C21} style={{marginTop: '-12px'}} alt=""/>                 <span class="wh">微信二维码</span></div>
       </div>
       </div>
       <div class="footer1Bottom">
       <p>©2017 <em>世通海外投资咨询（深圳）有限公司</em> 保留所有权利&nbsp; <a href="http://www.miitbeian.gov.cn/">粤ICP17049516号</a></p>
       </div>
   
    
 <div class="main"/>
 
       </footer1>  
        )
    }
}

export default Flooter;
