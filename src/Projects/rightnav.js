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
import imagenotavaiable from "../skin/Images/no_photo_available.gif";

import "../skin/floatingmenu.css";
import "../skin/style2.css";
import "../skin/reset.css";
import superagent from 'superagent';

class Rightnav extends Component {
  constructor(props) {
    super(props);
    
  }
state = {
  isOpen: false,
  relatlist:[],
  gettop4:[]
}

componentDidMount() {
  
  superagent
  .post(`https://century21api.herokuapp.com/api/search?limit=4&page=1`)
  //  .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
  // .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  //.set('Authorization', 'Bearer perm: {this.getAuthenticationToken})
  .send({ title: null, country_id: sessionStorage.getItem("country_id"), project_type_id: sessionStorage.getItem("project_type_id"), sort: "plth" })

  .end((err, res) => {
      if (err) { this.setState({ errorMessage: 'Cannot retrieve data form server' }); return; }
      this.setState({
          gettop4: res.body.result

      });
  });
  superagent
  .post(`https://century21api.herokuapp.com/api/projects?limit=10&page=1`)
  //  .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
  // .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  //.set('Authorization', 'Bearer perm: {this.getAuthenticationToken}
  .send({ country_id: sessionStorage.getItem("country_id"), project_type_id: sessionStorage.getItem("project_type_id")})

  .end((err, res) => {
      if (err) { this.setState({ errorMessage: 'Cannot retrieve data form server' }); return; }
    
       this.setState({
           relatlist: res.body.result,
           

       });
  });
}

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }
    render(){
    return(
               
      <div class="housebar fr">
      <div>
        <div class="ger">
          <h3>东南亚购房需求登记</h3>
          <p>已有<em>24871</em>人在此登记
            您希望获得专业的东南亚投资建议
请填写您的需求，我们会尽快联系您！<span class="xuline"></span></p>
        </div>
        
      </div>
      <div class="rightBarkist overflow rightBartool">
        <h3>Top 4 Lowest Price</h3>
        <ul>
        { this.state.gettop4
       
       .map((todo) => {
        let listphoto = null;
        if (todo.thumbnail == null) {
          listphoto =     <a href={`#/${todo.id}`}><img src={imagenotavaiable} /></a>
        } else {
          listphoto =     <a href={`#/${todo.id}`}><img src={todo.thumbnail} onError={(e) => { e.target.onerror = null; e.target.src = imagenotavaiable }} /></a>
       
        }
        return(
          <li>
           {listphoto}
            <a href={`#/${todo.id}`}>{todo.name}</a>
            <span>Min: {todo.end_price}$ -> Max:  {todo.end_price}$</span><br/>
            <span>Type: {todo.project_type.charAt(0).toUpperCase() + todo.project_type.slice(1)}</span>
          </li>
          
        );
      })}
        </ul>
      </div>

      <script>document.getElementById("dizi").value = window.location.href;</script><div class="rightBarkist overflow huodonglist">
        <h3> Newest Project  </h3>
        { this.state.relatlist
         .filter((todo, index) => (index < 1))
       .map((todo) => {
        let listphoto = null;
        if (todo.thumbnail == null) {
          listphoto =  <dt><a href={`#/${todo.id}`}><img src={imagenotavaiable} /><span>{todo.name}</span></a></dt>
        
        } else {
          listphoto =    <dt><a href={`#/${todo.id}`}><img src={todo.thumbnail} onError={(e) => { e.target.onerror = null; e.target.src = imagenotavaiable }} /><span>{todo.name}</span></a></dt>
        
        }
        return(
        <dl>
{listphoto}
           </dl>
           );
          })}
        
          <dl>
          { this.state.relatlist
         .filter((todo, index) => (index > 1 ))
       .map((todo) => {
       
        return(
               <dd><a class="hd-day" href={`#/${todo.id}`}><i>Start</i><b>{todo.start_price} $</b></a> <a class="hd-title" >{todo.name}</a> <a class="hd-yuding"  onclick="javascript:window.open('http://chat56.live800.com/live800/chatClient/chatbox.jsp?companyID=865532&amp;configID=132008&amp;jid=5747855482','','width=880,height=660')">{todo.country.toUpperCase()} | {todo.project_type.toUpperCase()}</a> </dd>
              );
            })}
           </dl>
         
      </div>

      
      <div class="rightBarkist overflow newlist">
        <h3> 海外房产 </h3>
        <ul>
          <li>  <a href="http://www.shitonghk.com/news/kuaixun/2018-12-03/6582.html">
            到2025年，印度尼西亚的数字经济将成为东盟最大的数字经济体            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-12-03/6581.html">
              菲律宾金融科技公司获得了2.15亿美元的国家最大的启动资金            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-12-03/6580.html">
              对马来西亚的外国直接投资在过去三个季度增长了350％            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-12-03/6576.html">
              对柔佛经济适用房供应不足造成巨额罚款            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-12-03/6575.html">
              新税负是否让孟买房地产过度负担？            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-11-30/6566.html">
              马来西亚是否会达到其经济适用房目标？            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-11-30/6565.html">
              这个廉价的模块化竹屋可以解决马尼拉的住房问题            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-11-30/6564.html">
              贸易战将如何影响香港房地产市场,明年至少下跌15%？            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-11-29/6552.html">
              泰国拟2020年启用东南亚最大火车站！            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-11-27/6521.html">
              菲律宾离岸游戏运营商（POGO）拯救菲律宾房地产市场的3个原因            </a> </li>
        </ul>
      </div>



      <div class="rightBarkist overflow newlist">
        <h3> 政策与攻略 </h3>
        <ul>
          <li>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-11-24/6490.html">
            柬埔寨最正确的打开方式：佛教故事            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-11-24/6489.html">
              你不得不知的柬埔寨日常社交礼仪！世通海外            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-11-22/6468.html">
              泰国水灯节来了 感受不一样的泰国风俗            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-11-21/6459.html">
              柬埔寨批准设立56个主题生态旅游景点            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-11-21/6458.html">
              【世通海外】柬埔寨金光之城            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-11-16/6407.html">
              送水节·赛龙舟 柬埔寨的“端午节”来了！            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-10-24/6153.html">
              世界投资论坛上 洪森总理公布外国投资愿景和战略            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-10-24/6152.html">
              金边皇宫打开的“正确姿势” 世通海外            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-10-23/6137.html">
              世通海外最新攻略：如何在缅甸拥有一套公寓            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-10-20/6115.html">
              周末吃那家？9家正宗高棉餐厅任你选择 世通海外            </a> </li>
        </ul>
      </div>
      <div class="rightBarkist overflow newlist">
        <h3> 柬埔寨投资 </h3>
        <ul>
          <li> <a href="http://www.shitonghk.com/news/huaren/2018-12-05/6605.html">
            【金边魅力】劳斯莱斯世界首款SUV汽车在柬埔寨发行！            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-12-05/6604.html">
              柬埔寨蒙省否认与越南得农省签木材出口协议            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-12-05/6603.html">
              柬埔寨磅通省雨季稻谷产量良好            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-12-05/6602.html">
              亚行新任代表承诺继续巩固柬埔寨战略关系            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-12-05/6601.html">
              新的保险企业进入柬埔寨当地市场            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-12-05/6600.html">
              柬埔寨向游客展示高棉传统工艺品            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-12-05/6599.html">
              绿色领导者在柬埔寨建立了20个工厂            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-12-05/6598.html">
              柬埔寨大米出口商呼吁规划出口中国            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-12-04/6596.html">
              柬埔寨金汇通五省主题路演正式起航            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-12-04/6595.html">
              吴哥窟游客接待服务中心有望近期内诞生            </a> </li>
        </ul>
      </div>
      <div class="rightBarkist overflow newlist">
        <h3> 海外楼盘推荐 </h3>
        <ul>
          <li>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-11-23/6482.html">
            柬埔寨金边行政金融区的首席豪宅是如何捕捉你的目光的？            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-11-17/6422.html">
              太子中央广场精装公寓3年返租，年回报率高达8.9%            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-11-16/6398.html">
              柬埔寨乐施会基于区块链的项目正式启动            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-11-16/6397.html">
              柬埔寨预算增加11.4％            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-11-01/6253.html">
              金边地王中的地王 为什么会是TA？            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-11-01/6252.html">
              人民币又贬值了，拿什么拯救中产的你？            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-09-27/5938.html">
              金边顶级人居富力·华府的美好生活即将揭晓            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-09-25/5889.html">
              小母牛，高棉有机建立柬埔寨有机农业            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-09-25/5888.html">
              柬埔寨总理：水上出租车，铁路线提高了国民好感度            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-09-10/5729.html">
              曼谷老牌市中心新盘傲璟·暹罗引发市场“地震”            </a> </li>
        </ul>
      </div>
    </div>
        )
    }
    
}

export default Rightnav;
