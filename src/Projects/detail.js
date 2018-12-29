import React, { Component } from "react";
import Slider from '../slider.js';
import '../build/horizontal.css';
import '../skin/slider-animations.css';
import Drawer from "../lib/drawer.jsx";
import '../skin/housedetail.css'
import "../skin/global.css";
import "../skin/invite.css";
import "../skin/mini.css";
import Share from 'social-share-react'
import '../skin/scss/style.css';
import Header from './header'
import Flooter from './flooter'
import FloaterEvent from './floaterEvent'
import QRCode from 'qrcode.react'
//import { ReactSlackChat } from 'react-slack-chat';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import Modal from 'react-awesome-modal'
import { Button, h1, p, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Row } from 'reactstrap';
//import Drawer from 'react-motion-drawer';
import image from "../skin/Images/planurahuette.jpg";
import ImageGallery from 'react-image-gallery';



import "react-image-gallery/styles/css/image-gallery.css";
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




class Detail extends Component {
  
    
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
      const images = [
        {
          original: 'https://img1.southernliving.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2018/04/main/6401_rusty_ridge_dr_austin_tx-print-001-16-exterior_front-2700x1802-300dpi.jpg?height=50px&width=50px',
          thumbnail: 'https://img1.southernliving.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2018/04/main/6401_rusty_ridge_dr_austin_tx-print-001-16-exterior_front-2700x1802-300dpi.jpg?height=50&width=50',
        },
        {
          original: 'http://lorempixel.com/1000/600/nature/2/',
          thumbnail: 'http://lorempixel.com/1000/600/nature/2/'
        },
        {
          original: 'http://lorempixel.com/1000/600/nature/3/',
          thumbnail: 'http://lorempixel.com/250/150/nature/3/'
        },
        {
          original: 'http://lorempixel.com/1000/600/nature/1/',
          thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        },
        {
          original: 'http://lorempixel.com/1000/600/nature/2/',
          thumbnail: 'http://lorempixel.com/250/150/nature/2/'
        },
        {
          original: 'http://lorempixel.com/1000/600/nature/3/',
          thumbnail: 'http://lorempixel.com/1000/600/nature/3/'
        }
      ]
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
        <html>
        <head>

<script src="script/jquery-1.js"></script>
<script src="script/jquery.js"></script>
<script src="script/layer.js"></script>

            <script type="text/javascript" id="lim:component" src="script/component-v5.js"></script>

            
               </head>
      <body >

            <Header/>
    

      
      <div class="clear"></div>
          <div class="main1" >
              <div class="banner">
                  <div class="flexslider">
                      <ul class="slides">
              
      
                      <Slider autoplay={3000}>
	{items.map((item, index) => (
		<div
			key={index}
			style={{ background: `url('${item.src}') no-repeat center center` }}
		>
               <div className="center">
							
						</div>
		</div>
	))}
</Slider>       
                      </ul>
                      
                  <ol class="flex-control-nav flex-control-paging"><li><a class="">1</a></li><li><a class="">2</a></li><li><a class="">3</a></li><li><a class="flex-active">4</a></li></ol><ul class="flex-direction-nav"><li><a class="flex-prev" href="#"></a></li><li><a class="flex-next" href="#"></a></li></ul></div>
      
              </div>
              <section>
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1>Title</h1>
                        <p>Some Contents</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
              
  <div class="main1 container1 overflow"> 
  
  
    
    <div class="position" style={{borderBottom: 'none',marginTottom: '5px'}}>
      <ul>
        <li>当前位置：<a href="http://www.shitonghk.com/">首页</a>&nbsp;&gt;&nbsp;<a href="http://www.shitonghk.com/au/">东南亚房产</a> &gt; <a href="http://www.shitonghk.com/au/332.html">金边国家中心 sky tree</a></li>
      </ul>
    </div>
    
      <div class="overflow" style={{marginBottom:'30px'}}>
          <div class="nrhead">
           
              <div class="fl">
                  <div class="house_slider"> 
                  <div id="gallery" class="ad-gallery">
                 
                  <ImageGallery items={images} />
  
    
  

                  
                  </div>
                  </div>
              </div>
            
          <div class="fr nrheadright" style={{marginTop: '-5px'}}>
              <div class="goods_title color_red">首付：<span class="color_red">
                  27万人民币起</span>
              </div>
                  <div class="goods_fun">
                      <span class="fun_vs"> <a href="http://www.boc.cn/sourcedb/whpj/" rel="nofollow" target="_blank">人民币汇率</a> </span>
                      <span class="fun_calculator"> <a target="_self" href="javascript:;" price="97.00" class="list_house_calculator tool_ji jisuanqi">贷款计算器</a> </span>
                      <span class="fun_ad">
                                              </span>
                  </div>
                  <div class="mb10 tui"><span class="tjld"><b class="tzmd">投资卖点：</b>
                      眺望总理府，金边市政府，大使馆，火车站，大型商场，医院，银行，与中央公园。	          	</span>
                     
                    <p class="tjldp"></p>
                    </div>
                    <div class="phone_11">400-688-6160<a href="javascript:;" title="客服人员在线,欢迎点击咨询" onclick="javascript:window.open('http://chat56.live800.com/live800/chatClient/chatbox.jsp?companyID=865532&amp;configID=132008&amp;jid=5747855482','','width=880,height=660')">立即咨询</a> </div>
                    <div class="phone_11 phone_12">
                        <input name="" class="m_text3" placeholder="请输入您的手机号码"/>
                         <a href="http://www.shitonghk.com/?kefuonline/" title="客服人员在线,欢迎点击咨询" target="_blank" class="code_btn3">免费通话</a> 
                    </div>
                    <Share
  url='https://www.linkedin.com/'title='分享生活点滴'></Share>
                    <div class="t3_title mt10">
                   
                        <div class="t3_title_left"> <b>城市：</b>柬埔寨 金边</div>
                        <div class="t3_title_left width40"> <b>位置：</b>金边总理府特区地铁旁</div>
                       
                                          <div class="t3_title_left width25" title="公寓 "> <b>类型：</b>公寓 </div>
                       <div class="t3_title_left"> <b>面积：</b>32           			 	-140平方
                      </div>
                      <div class="t3_title_left width40"> <b>售价：</b>97        				-172 万人民币
                      </div>
                           <div class="t3_title_left width25"> <b>交房期：</b>2018.12</div>
                   </div>
  
                 <div class="line_01 mt10 mb10 xunpan">
                        <div class="xjrs bdsharebuttonbox bdshare-button-style0-32" data-bd-bind="1541294914762"> <span class="color_red" style={{fontWeight: 'normal'}}>免费询盘：</span><span>（询盘人数：</span><span class="color_red">994</span><span>）</span> <a href="javascript:AddFavorite(window.location,document.title)" class="sc">收藏</a><a class="fx bds_more" href="#" data-cmd="more">分享</a></div>
                        
                        <div class="enquiry">
                          <form class="baogao_form" action="../feedback/feedback_ajax1.php" method="post">
                            <div class="xunpanform">
                              <dl>
                                <dt class="l-red">*姓名：</dt>
                                <dd>
                                  <input id="xp_name" class="input_text2" name="pinggu_name" placeholder="您的姓名" type="text"/>
                                </dd>
                              </dl>
                              <dl>
                                <dt class="l-red">*手机：</dt>
                                <dd>
                                  <input id="xp_shou" class="input_text2" name="pinggu_shou" placeholder="手机号码" type="text"/>
                                </dd>
                              </dl>
                              <dl>
                                <dt class="l-red">邮箱：</dt>
                                <dd>
                                  <input id="xp_shou" class="input_text2" name="pinggu_shou" placeholder="邮箱" type="text"/>
                                </dd>
                              </dl>
                              <dl>
                                <dd>
                                  <input class="report_xp report" value="立即询盘" type="button"/>
                                  <span>您的信息我们绝对保密，我们遵循消费者权益！</span>
                                
                                </dd>
                              </dl>
                            </div>
                          </form>
                          <div class="wx-lx"><QRCode value="http://facebook.github.io/react/" /></div>
                        </div>
                  </div>
          </div>
        
          </div>
         
          <div class="house_detail fl overflow">
              <div class="house_detail_box">
                  <div class="lease_placeholder">
  
                      <ul class="lease_intro_head">
                          <li attr_id="xmjs" class="on"> <a target="_self" href="javascript:;">项目介绍</a> </li>
                          <li attr_id="dlwz" class=""> <a target="_self" href="javascript:;">地理坐标</a> </li>
                          <li attr_id="touzir" class=""> <a target="_self" href="javascript:;">投资分析</a> </li>
                          <li attr_id="xmsp"> <a target="_self" href="javascript:;">项目视频</a> </li>
                          <li attr_id="jiazoushir" class=""> <a target="_self" href="javascript:;">房价走势</a> </li>
                          <li attr_id="zldownr" class=""> <a class="opendown" target="_self" href="javascript:void(0);">资料下载</a> </li>
                          <li attr_id="zixunr" class="zixunr"> <a target="_self" href="javascript:;">咨询：400-688-6160</a></li>
                        </ul>
                     
                        <div id="zldownr" class="closedown"><a href="javascript:void(0);"><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/close.png"/></a></div>
                          <div class="house_zl overflow">
                              <div class="house_detail_zl fl">
                                   <ul>
                                      <li>《该项目楼书PDF文件》</li>
                                      <li>《东南亚房产投资指南》</li>
                                      <li>《东南亚旅游度假指南》</li>
                                      <li>《东南亚“一带一路”投资战略》</li>
                                   </ul>
                              </div>
                              <div class="house_feedback fr">
                                   <ul>
                                      <li>
                                        <input type="text" name="title" id="feedbackTitle" placeholder="* 输入姓名"/>
                                      </li>
                                      <li>
                                        <input type="text" name="mycall" id="feedbackMycall" placeholder="* 输入手机号"/>
                                      </li>
                                      <li>
                                        <input type="text" name="email" id="feedbackEmail" placeholder="  输入邮箱"/>
                                      </li>
                                      <li>
                                        <button name="" id="feedbackSub" type="submit">立即注册</button>
                                        <span>免费成为会员</span></li>
                                      <li><a href="">在线咨询</a></li>
                                    </ul>
                              </div>
                          </div>
                      </div>
                     
                      <div id="xmjs" class="lease_intro_con">
                        <div class="intro_con_title"> <span>项目介绍</span></div>
                        <div class="intro_con_item">
  
                          <p style={{lineHeight: '28px', marginBottom: '17px', color: 'rgb(50, 50, 50)', whiteSpace: 'normal'}}><span style={{fontSize: '16px'}}><strong>项目介绍：金边酒店式公寓，商住两用</strong></span><span style={{display:'none'}}>pc8海外房产网</span></p>
  <p><span style={{fontSize: '16px'}}><strong>项目位置：金边总理府特区，地铁旁</strong></span><span style={{display:'none'}}>pc8海外房产网</span></p>
  <p style={{ineHeight: '28px', fontSize: '16px', margin: '0px 0px 17px', color: 'rgb(50, 50, 50)',  fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: 'normal', letterSpacing: 'normal', orphans: '2', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', widows: '2', wordSpacing: '0px', webkitTextStrokeWidth: '0px', textDecorationStyle: 'initial', textDecorationColor: 'initial', textAlign: 'left'}}><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/0JI1dwfShWa.jpg" dataFormat="JPEG" style={{border: '0px', maxWidth: '100%', margin: '20px 0px', display: 'block'}} alt=""/><span style={{display:'none'}}>pc8海外房产网</span></p>
  <p style={{ineHeight: '28px', fontSize: '16px', margin: '0px 0px 17px', color: 'rgb(50, 50, 50)',  fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: 'normal', letterSpacing: 'normal', orphans: '2', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', widows: '2', wordSpacing: '0px', webkitTextStrokeWidth: '0px', textDecorationStyle: 'initial', textDecorationColor: 'initial', textAlign: 'left'}}><b style={{fontWeight: '700'}}>价值亮点：</b><span style={{display:'none'}}>pc8海外房产网</span></p>
  <p style={{ineHeight: '28px', fontSize: '16px', margin: '0px 0px 17px', color: 'rgb(50, 50, 50)',  fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: 'normal', letterSpacing: 'normal', orphans: '2', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', widows: '2', wordSpacing: '0px', webkitTextStrokeWidth: '0px', textDecorationStyle: 'initial', textDecorationColor: 'initial', textAlign: 'left'}}>1.&nbsp;<b style={{fontWeight: '700'}}><span>送精装修与家电 拎包入住</span></b>；<span style={{display:'none'}}>pc8海外房产网</span></p>
  <p style={{ineHeight: '28px', fontSize: '16px', margin: '0px 0px 17px', color: 'rgb(50, 50, 50)',  fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: 'normal', letterSpacing: 'normal', orphans: '2', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', widows: '2', wordSpacing: '0px', webkitTextStrokeWidth: '0px', textDecorationStyle: 'initial', textDecorationColor: 'initial', textAlign: 'left'}}>2.&nbsp;<b style={{fontWeight: '700'}}><span>五星管理 物业增值；</span></b><span style={{display:'none'}}>pc8海外房产网</span></p>
  <p style={{ineHeight: '28px', fontSize: '16px', margin: '0px 0px 17px', color: 'rgb(50, 50, 50)',  fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: 'normal', letterSpacing: 'normal', orphans: '2', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', widows: '2', wordSpacing: '0px', webkitTextStrokeWidth: '0px', textDecorationStyle: 'initial', textDecorationColor: 'initial', textAlign: 'left'}}>3.&nbsp;<span><b style={{fontWeight: '700'}}>天空树价格优势：金边二环最低价</b><b style={{fontWeight: '700'}}>1700-2000</b><b style={{fontWeight: '700'}}>美元</b><b style={{fontWeight: '700'}}>/</b><b style={{fontWeight: '700'}}>平米；</b></span><span style={{display:'none'}}>pc8海外房产网</span></p>
  <p style={{ineHeight: '28px', fontSize: '16px', margin: '0px 0px 17px', color: 'rgb(50, 50, 50)',  fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: 'normal', letterSpacing: 'normal', orphans: '2', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', widows: '2', wordSpacing: '0px', webkitTextStrokeWidth: '0px', textDecorationStyle: 'initial', textDecorationColor: 'initial', textAlign: 'left'}}>4.<b style={{fontWeight: '700'}}><span>天空树位于金边国际金融中心区旁，从机场到天空树有10公里，车程20分钟。</span></b>眺望总理府，金边市政府，大使馆，火车站，大型商场，医院，银行，与中央公园。<span style={{display:'none'}}>pc8海外房产网</span></p>
  <p style={{ineHeight: '28px', fontSize: '16px', margin: '0px 0px 17px', color: 'rgb(50, 50, 50)',  fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: 'normal', letterSpacing: 'normal', orphans: '2', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', widows: '2', wordSpacing: '0px', webkitTextStrokeWidth: '0px', textDecorationStyle: 'initial', textDecorationColor: 'initial', textAlign: 'left'}}>5.&nbsp;<span><b style={{fontWeight: '700'}}>首付30%，在交付时付余款或申请按揭贷款，接受人民币付款。</b></span><span style={{display:'none'}}>pc8海外房产网</span></p>
  <p style={{lineHeight: '28px', fontSize: '16px', margin: '0px 0px 17px', color: 'rgb(50, 50, 50)',  fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight:' normal', letterSpacing: 'normal', orphans: '2', textAlign: 'justify', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', widows: '2', wordSpacing: '0px', webkitTextStrokeWidth: 'web 0px', textDecorationStyle: 'initial', textDecorationColor: 'initial'}}><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/0JI1hXy13Am.jpg" dataFormat="JPEG" style={{border: '0px', maxWidth: '100%', margin: '20px 0px', display: 'block'}} alt=""/><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/0JI1hWzOR5E.jpg" dataFormat="JPEG" style={{border: '0px', maxWidth: '100%', margin: '20px 0px', display: 'block'}} alt=""/><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/0JI1hXCJ1HM.jpg" dataFormat="JPEG"  style={{border: '0px', maxWidth: '100%', margin: '20px 0px', display: 'block'}} alt=""/><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/0JI1hfRGvgW.jpg" dataFormat="JPEG" style={{border: '0px', maxWidth: '100%', margin: '20px 0px', display: 'block'}} alt=""/><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/0JI1hfzrg0G.jpg" dataFormat="JPEG" style={{border: '0px', maxWidth: '100%', margin: '20px 0px', display: 'block'}} alt=""/><span style={{display:'none'}}>pc8海外房产网</span></p> </div>
                      </div>
                     
  
              
                          <div id="dlwz" class="lease_intro_con">
                              
                            <div class="intro_con_title"> <span>地理坐标：</span> </div>
  
                           <div class="address intro_con_item map_canvas">
                                             </div>
  
                          </div>
                  
                            <div id="touzir" class="lease_intro_con">
                                <div class="intro_con_title"> <span>投资分析：</span> </div>
                                <div class=""> <p style={{lineHeight: '28px', fontSize: '16px', margin: '0px 0px 17px', color: 'rgb(50, 50, 50)',  fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight:' normal', letterSpacing: 'normal', orphans: '2', textAlign: 'justify', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', widows: '2', wordSpacing: '0px', webkitTextStrokeWidth: 'web 0px', textDecorationStyle: 'initial', textDecorationColor: 'initial'}}><b style={{fontWeight: '700'}}>投资柬埔寨天空树优势：</b></p>
  <p style={{lineHeight: '28px', fontSize: '16px', margin: '0px 0px 17px', color: 'rgb(50, 50, 50)',  fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight:' normal', letterSpacing: 'normal', orphans: '2', textAlign: 'justify', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', widows: '2', wordSpacing: '0px', webkitTextStrokeWidth: 'web 0px', textDecorationStyle: 'initial', textDecorationColor: 'initial'}}>1.&nbsp;全金边最低价（首都二环）&nbsp;&nbsp;全金边市投报最高&nbsp;</p>
  <p style={{lineHeight: '28px', fontSize: '16px', margin: '0px 0px 17px', color: 'rgb(50, 50, 50)',  fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight:' normal', letterSpacing: 'normal', orphans: '2', textAlign: 'justify', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', widows: '2', wordSpacing: '0px', webkitTextStrokeWidth: 'web 0px', textDecorationStyle: 'initial', textDecorationColor: 'initial'}}>2.&nbsp;规划中的&nbsp;S3&nbsp;地铁出口附近&nbsp;&nbsp;一带一路泛亚铁路附近&nbsp;</p>
  <p style={{lineHeight: '28px', fontSize: '16px', margin: '0px 0px 17px', color: 'rgb(50, 50, 50)',  fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight:' normal', letterSpacing: 'normal', orphans: '2', textAlign: 'justify', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', widows: '2', wordSpacing: '0px', webkitTextStrokeWidth: 'web 0px', textDecorationStyle: 'initial', textDecorationColor: 'initial'}}>3.&nbsp;外国人涌入&nbsp;出租率高&nbsp;</p>
  <p style={{lineHeight: '28px', fontSize: '16px', margin: '0px 0px 17px', color: 'rgb(50, 50, 50)',  fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight:' normal', letterSpacing: 'normal', orphans: '2', textAlign: 'justify', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', widows: '2', wordSpacing: '0px', webkitTextStrokeWidth: 'web 0px', textDecorationStyle: 'initial', textDecorationColor: 'initial'}}>4. 软卡交易&nbsp;无房产交易税&nbsp;</p>
  <p style={{lineHeight: '28px', fontSize: '16px', margin: '0px 0px 17px', color: 'rgb(50, 50, 50)',  fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight:' normal', letterSpacing: 'normal', orphans: '2', textAlign: 'justify', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', widows: '2', wordSpacing: '0px', webkitTextStrokeWidth: 'web 0px', textDecorationStyle: 'initial', textDecorationColor: 'initial'}}>5.&nbsp;五星管理&nbsp;物业增值&nbsp;&nbsp;&nbsp;代租&nbsp;代售&nbsp;代管&nbsp;代修&nbsp;</p>
  <p style={{lineHeight: '28px', fontSize: '16px', margin: '0px 0px 17px', color: 'rgb(50, 50, 50)',  fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight:' normal', letterSpacing: 'normal', orphans: '2', textAlign: 'justify', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', widows: '2', wordSpacing: '0px', webkitTextStrokeWidth: 'web 0px', textDecorationStyle: 'initial', textDecorationColor: 'initial'}}>6.&nbsp;景观地标&nbsp;眺望金边&nbsp;</p>
  <p style={{lineHeight: '28px', fontSize: '16px', margin: '0px 0px 17px', color: 'rgb(50, 50, 50)',  fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight:' normal', letterSpacing: 'normal', orphans: '2', textAlign: 'justify', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', widows: '2', wordSpacing: '0px', webkitTextStrokeWidth: 'web 0px', textDecorationStyle: 'initial', textDecorationColor: 'initial'}}><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/0JI224awNNY.jpg" dataFormat="JPEG" style={{border: '0px', maxWidth: '100%', margin: '20px 0px', display: 'block'}} alt=""/><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/0JI22VZ0MxE.jpg" dataFormat="JPEG" style={{border: '0px', maxWidth: '100%', margin: '20px 0px', display: 'block'}} alt=""/><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/0JI22FRLvg8.jpg" dataFormat="JPEG" style={{border: '0px', maxWidth: '100%', margin: '20px 0px', display: 'block'}} alt=""/><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/0JI22FmxwcS.jpg" dataFormat="JPEG" style={{border: '0px', maxWidth: '100%', margin: '20px 0px', display: 'block'}} alt=""/><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/0JI22R0jM0m.jpg" dataFormat="JPEG" style={{border: '0px', maxWidth: '100%', margin: '20px 0px', display: 'block'}} alt=""/><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/0JI22SbeAqm.jpg" dataFormat="JPEG" style={{border: '0px', maxWidth: '100%', margin: '20px 0px', display: 'block'}} alt=""/></p></div>
                          </div>    
  <div class="clear"></div>
                          <div id="xmsp" class="lease_intro_con" style={{height: '550px'}}>
                            <div class="intro_con_title"> <span>项目视频：</span> </div>
                            <div class="intro_con_item">
                              <div class="contentVideoDiv">
                                                              <div class="contentVideoDiv"><p class="contentVideoTip">暂无相关视频</p></div>				            </div>
                            </div>
                          </div>
            
                  </div>
              </div>
              
              <div class="housebar fr">
        <div>
          <div class="ger">
            <h3>看房团登记</h3>
            <p>已有<em>24871</em>人在此登记<br/>
              免费参加看房团，私人订制行程<br/>
              请登记真实有效的个人资料以备沟通<span class="xuline"></span></p>
          </div>
          <div class="gep">
            <form class="baogao_form" action="../feedback/feedback_ajax1.php" method="post">
              <table>
                  <tbody><tr>
                    <td width="70"><span class="iinput">*姓名：</span></td> <td><input id="pinggu_name" class="input_text" name="pinggu_name" placeholder="您的姓名" type="text"/></td>
                    </tr>
                  <tr>
                    <td width="70"><span class="iinput">*手机：</span></td> <td><input id="pinggu_shou" class="input_text" name="pinggu_shou" placeholder="手机号码" type="text"/></td>
                    </tr>
                  <tr>
                   <td width="70"><span class="iinput">邮箱：</span></td> <td><input id="pinggu_email" class="input_text" name="pinggu_email" placeholder="邮箱" type="text"/></td>
                  </tr>
                  <tr>
                    <td colspan="2"><input class="report_btn" value="立即提交" type="button"/>
                      <input id="dizi" name="dizi" value="http://www.shitonghk.com/au/332.html" type="hidden"/>
                      <input name="type" value="14" type="hidden"/>
                      </td>
                  </tr>
              </tbody></table>
            </form>
          </div>
        </div>
        <script>document.getElementById("dizi").value = window.location.href;</script><div class="rightBarkist overflow huodonglist">
          <h3> 最新活动 </h3>
          <dl>
  
    <dt><a href="http://www.shitonghk.com/exhibition/4602.html"><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/2b0d2aa5e8e3c2b976f3ecd1e037af16.jpg"/><span>4.14/4.15，北京|上海|南京|成都，雅居乐天汇四地同开团购大会</span></a></dt> 
      <dd><a class="hd-day" href="http://www.shitonghk.com/exhibition/3377.html"><i>2017.09</i><b>17</b></a> <a class="hd-title" href="http://www.shitonghk.com/exhibition/3377.html">杭州站|柬埔寨房产投资专场峰会—掘金柬埔寨<br/>
      地址：杭州市下城区长寿路6号杭州城中</a> <a class="hd-yuding" href="http://www.shitonghk.com/exhibition/3377.html" onclick="javascript:window.open('http://chat56.live800.com/live800/chatClient/chatbox.jsp?companyID=865532&amp;configID=132008&amp;jid=5747855482','','width=880,height=660')">席位有限 提前预定</a> </dd> 
        <dd><a class="hd-day" href="http://www.shitonghk.com/exhibition/3306.html"><i>2017.06</i><b>06</b></a> <a class="hd-title" href="http://www.shitonghk.com/exhibition/3306.html">北京站|中国海外投资CSR国别风险指数发布<br/>
      地址：清华大学经管学院伟伦楼501室（上午）</a> <a class="hd-yuding" href="http://www.shitonghk.com/exhibition/3306.html" onclick="javascript:window.open('http://chat56.live800.com/live800/chatClient/chatbox.jsp?companyID=865532&amp;configID=132008&amp;jid=5747855482','','width=880,height=660')">席位有限 提前预定</a> </dd> 
        <dd><a class="hd-day" href="http://www.shitonghk.com/exhibition/3307.html"><i>2017.05</i><b>28</b></a> <a class="hd-title" href="http://www.shitonghk.com/exhibition/3307.html">深圳站|相约睿啟会，遇见财富未来 ——全国巡回海外投<br/>
      地址：广东深圳</a> <a class="hd-yuding" href="http://www.shitonghk.com/exhibition/3307.html" onclick="javascript:window.open('http://chat56.live800.com/live800/chatClient/chatbox.jsp?companyID=865532&amp;configID=132008&amp;jid=5747855482','','width=880,height=660')">席位有限 提前预定</a> </dd> 
        <dd><a class="hd-day" href="http://www.shitonghk.com/exhibition/3309.html"><i>2017.05</i><b>25</b></a> <a class="hd-title" href="http://www.shitonghk.com/exhibition/3309.html">上海站|“聚焦“一带一路”下的海外投资<br/>
      地址：（上海市杨浦区国顺路670号）</a> <a class="hd-yuding" href="http://www.shitonghk.com/exhibition/3309.html" onclick="javascript:window.open('http://chat56.live800.com/live800/chatClient/chatbox.jsp?companyID=865532&amp;configID=132008&amp;jid=5747855482','','width=880,height=660')">席位有限 提前预定</a> </dd> 
              </dl>
        </div>
  
  <div class="rightBarkist overflow rightBartool">
          <h3>热门房产</h3>
          <ul>
              <li> 
                  <a href="http://www.shitonghk.com/au/324.html"><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/2234cd84d8e2cc94acfbec4a9779eb81.jpg"/></a>
                   <a href="http://www.shitonghk.com/au/324.html">金边皇宫区公寓East One</a>
                   <span>面积：45 - 99平米<br/>
                    价格：69.00 - 200.00万人民币</span>
              </li>
              <li> 
                  <a href="http://www.shitonghk.com/au/280.html"><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/7d21101f7118a39489fbcee997474c98.jpg"/></a>
                   <a href="http://www.shitonghk.com/au/280.html">100万买金边“陆家嘴”首选—【钻石双星】</a>
                   <span>面积：46 - 108平米<br/>
                    价格：83.00 - 213.00万人民币</span>
              </li>
              <li> 
                  <a href="http://www.shitonghk.com/au/331.html"><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/1419ed967b9e84ce838418ccffaf8283.png"/></a>
                   <a href="http://www.shitonghk.com/au/331.html">金边·星汇城Star City：10万美金首选项目</a>
                   <span>面积：51 - 90平米<br/>
                    价格：64.00 - 110.00万人民币</span>
              </li>
              <li> 
                  <a href="http://www.shitonghk.com/au/335.html"><img src="%E9%87%91%E8%BE%B9%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%BF%83%20sky%20tree_files/0ec31131d38df93fb41d7e729d7ea332.jpg"/></a>
                   <a href="http://www.shitonghk.com/au/335.html">富力地产金边首发项目 总投资7亿美金</a>
                   <span>面积：55 - 134平米<br/>
                    价格：77.00 - 188.00万人民币</span>
              </li>
  
          </ul>
  </div>
  
        <div class="rightBarkist overflow newlist">
          <h3> 海外房产 </h3>
          <ul>
            <li>  <a href="http://www.shitonghk.com/news/kuaixun/2018-10-31/6242.html">
              柬埔寨科技创新在蓬勃发展            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-10-31/6241.html">
              马来西亚拍卖1MDB旗下的超级游艇            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-10-31/6240.html">
              泰国最大免税集团合约到期或重新洗牌            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-10-31/6234.html">
              柬埔寨农业迅速发展引塞拉利昂关注            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-10-31/6233.html">
              “物流的Airbnb”能否缓解工业空间危机？            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-10-30/6223.html">
              中国引领外国对希腊房屋的需求复苏            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-10-30/6221.html">
              越南房地产在2018年获得第二高的外国直接投资承诺            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-10-30/6215.html">
              前9个月柬埔寨国公省税收收入大增            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-10-30/6214.html">
              摆脱进口依赖！ 柬埔寨首家轧钢厂明年建成投产            </a>  <a href="http://www.shitonghk.com/news/kuaixun/2018-10-30/6213.html">
              中国正在买希腊房产            </a> </li>
          </ul>
        </div>
  
  
        <div class="rightBarkist overflow newlist">
          <h3> 政策与攻略 </h3>
          <ul>
            <li>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-10-24/6153.html">
              世界投资论坛上 洪森总理公布外国投资愿景和战略            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-10-24/6152.html">
              金边皇宫打开的“正确姿势” 世通海外            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-10-23/6137.html">
              世通海外最新攻略：如何在缅甸拥有一套公寓            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-10-20/6115.html">
              周末吃那家？9家正宗高棉餐厅任你选择 世通海外            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-09-25/5911.html">
              不止吴哥窟，柬埔寨的新鲜小众的路线玩法            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-09-21/5885.html">
              “佛系”青年清单：柬埔寨有哪些佛系景点？            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-09-19/5853.html">
              【好玩+人少+便宜+省心】国庆就去柬埔寨            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-09-13/5776.html">
              在泰国定居要准备多少钱？世通海外            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-09-11/5743.html">
              柬埔寨土地所有权，转让7大步骤 世通海外            </a>  <a href="http://www.shitonghk.com/news/liuxuezixun/2018-09-10/5725.html">
              柬埔寨证券委员会已批准 2企业准备上市            </a> </li>
          </ul>
        </div>
        <div class="rightBarkist overflow newlist">
          <h3> 柬埔寨投资 </h3>
          <ul>
            <li> <a href="http://www.shitonghk.com/news/huaren/2018-10-31/6239.html">
              ASA公司将抛售所持爱喜利达银行25%的股份            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-10-31/6238.html">
              中国国际贸促会温州委员会企业家抵柬考察            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-10-31/6237.html">
              柬埔寨芒果国外市场前景可观            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-10-31/6236.html">
              澜湄航空开通暹粒-天津-西哈努克港航线            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-10-31/6235.html">
              澜湄航空开通暹粒-天津-西哈努克港航线            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-10-31/6232.html">
              柬埔寨贡布生态度假村的机会            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-10-31/6231.html">
              柬埔寨物流改革耗资19亿美元            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-10-31/6230.html">
              柬埔寨呼吁通过工业效率应对气候变化            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-10-31/6229.html">
              柬埔寨中央银行解释其人民币促销政策            </a>  <a href="http://www.shitonghk.com/news/huaren/2018-10-31/6228.html">
              塞拉利昂被柬埔寨大米所吸引            </a> </li>
          </ul>
        </div>
        <div class="rightBarkist overflow newlist">
          <h3> 海外楼盘推荐 </h3>
          <ul>
            <li>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-09-27/5938.html">
              金边顶级人居富力·华府的美好生活即将揭晓            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-09-25/5889.html">
              小母牛，高棉有机建立柬埔寨有机农业            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-09-25/5888.html">
              柬埔寨总理：水上出租车，铁路线提高了国民好感度            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-09-10/5729.html">
              曼谷老牌市中心新盘傲璟·暹罗引发市场“地震”            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-09-01/5618.html">
              泰国要把曼谷人口翻番，打造超1000万人口的城市            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-09-01/5617.html">
              柬埔寨内政部申请考察成立两个新省            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-09-01/5616.html">
              泰国芭提雅Terminal 21 Pattaya,即将开幕的飞机航道百货            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-08-29/5567.html">
               曼谷The key国际公寓-CBD江景养生公寓            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-08-29/5566.html">
              星鼎国际丨CBD高回报恒产 金边核心财富综合体            </a>  <a href="http://www.shitonghk.com/news/aozhoushenghuo/2018-08-27/5531.html">
              暹罗洲际酒店托管+智能科技，尽享曼谷中心商圈顶级豪宅            </a> </li>
          </ul>
        </div>
      </div>
          
      </div>
      
  
  <div class="fline"></div>
  
    <FloaterEvent/>
  
  </div>

  

          </div>
      <div class="foot_popup_up foot_popup_up_small" style={{display: 'block', opacity: '1', left: '0px'}}> </div>
      <div class="foot_popup" style={{display: 'block', opacity: '1', left: '-100%'}}>
        <div class="foot_popup_bg" style={{backgroundimage: 'url(http://www.shitonghk.com//public/pc/Picture/guanggao.png)'}}></div>
        <div class="foot_popup_con"> 
            <form class="foot_popup_huidian" method="post" action="/feedback/feedback_ajax.php">
            <dl class="mfth" >
              <dd>
                <input class="text m_text1 placehold" type="text" placehold="输入您的手机号" name="mycall" value="输入您的手机号"/>
            <input class="code_btn1" type="button" id="amaya2" value="点击免费通话"/>
              </dd>
            </dl>
          </form>
          <form class="foot_popup_form" method="post" action="/feedback/feedback_ajax.php">
            <dl class="popup_form">
              <dt style={{marginTop: '0', fontSize: '14px'}}>领取价值<em style={{fontSize: '22px', color: '#F4C403'}}>6600</em>元的东南亚房产投资报告</dt>
              <dd style={{marginTop: '5px'}}>
                <label>姓名：</label>
                <input class="text n_text placehold" type="text" placehold="输入姓名" name="title" value="输入姓名"/>
                <div class="popup_error">请输入姓名</div>
              </dd>
              <dd>
                <label>手机：</label>
                <input class="text m_text placehold" type="text" placehold="输入手机号" name="mycall" value="输入手机号"/>
                <div class="popup_error">请输入手机号</div>
              </dd>
              <dd>
                <label>邮箱：</label>
                <input class="text e_text placehold" type="text" placehold="输入邮箱" name="email" value="输入邮箱"/>
                <div class="popup_error">输入邮箱</div>
              </dd>
              <dd class="no_bg" style={{marginTop: '5px'}}>
                <input class="code_btn" type="button" id="amaya" value="确认发送"/>
              </dd>
            </dl>
          </form>
          <span class="foot_popup_close">关闭</span> </div>
      </div>
      <Flooter/>
     
     </body>
    
    </html>
    );
    
  }
  
}

export default Detail;
