import React, { Component } from "react";
import Slider from '../slider.js';
import '../build/horizontal.css';
import {ToastContainer, ToastStore} from 'react-toasts';

import '../skin/slider-animations.css';
//import { StickyContainer, Sticky } from 'react-sticky';
import Sticky from 'react-sticky-el';
import Drawer from "../lib/drawer.jsx";
//import Sticky from 'react-sticky-state';
import '../skin/housedetail.css'
import "../skin/global.css";
import ReactDOM from 'react-dom';
import "../skin/invite.css";
import "../skin/mini.css";
import Share from 'social-share-react'
import '../skin/scss/style.css';
import Header from './header'
import Flooter from './flooter'
import Rightnav from './rightnav';
import FloaterEvent from './floaterEvent'
import QRCode from 'qrcode.react'
//import { ReactSlackChat } from 'react-slack-chat';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import Modal from 'react-awesome-modal'
import { Button, h1, p, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Row } from 'reactstrap';
//import Drawer from 'react-motion-drawer';
import image from "../skin/Images/planurahuette.jpg";
import ImageGallery from '../ImageGallery';
import superagent from 'superagent';
import ReactPhoneInput from 'react-phone-input-2';
import imagenotavaiable from "../skin/Images/no_photo_available.gif";


import "react-image-gallery/styles/css/image-gallery.css";
import "../skin/style2.css";
import "../skin/reset.css";
const items = [
    {
        
       
      image: {imagenotavaiable},
      src: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
      altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
      caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    },
    {
      image: {imagenotavaiable},
      src:'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
      altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
      caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    },
    {
      image: {imagenotavaiable},
      src:'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
      altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
      caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    },
    {
      image: {imagenotavaiable},
      src:'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
      altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
      caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    },
    {
      image: {imagenotavaiable},
      src:'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
      altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
      caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    },
    {
      image: {imagenotavaiable},
      src:'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
      altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
      caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    },
    {
      image: {imagenotavaiable},
      src:'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
      altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
      caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    },
    {
      image: {imagenotavaiable},
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
    id:'',
    title:'',
    country:'',
    email:'',
    namecontact:'',
    address1:'',
    address2:'',
    start_price:'',
    end_price:'',
    avg_annual_rent_from:'',
    avg_annual_rent_to:'',
    down_payment:'',
    project_type:'',
    description:'',
    introductions:[],
    decriptiontap1:'',
    galleries:[],
    phone:'',
    visible : false,
    editIdx: -1,
    columnToSort: "",
    description:'',
    tap3: 'Tap 3',
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
  donetoast(message){
ToastStore.success(message);
  }
  componentWillMount(){
    let meetupID=this.props.match.params.id;
    superagent
      .get(`https://century21api.herokuapp.com/api/project-details?projectID=${meetupID}`)
    //  .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
     // .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      //.set('Authorization', 'Bearer perm: {this.getAuthenticationToken})
      .end((err, res) => {
        if(err){this.setState({errorMessage: 'Cannot retrieve data form server'}); return;}
        this.setState({
       
          id:res.body.result.id,
          title:res.body.result.title,
          country:res.body.result.country,
          description:res.body.result.description,
          start_price:res.body.result.start_price,
          end_price:res.body.result.end_price,
          avg_annual_rent_from:res.body.result.avg_annual_rent_from,
          avg_annual_rent_to:res.body.result.avg_annual_rent_to,
          down_payment:res.body.result.down_payment,
          project_type:res.body.result.project_type,
          address1:res.body.result.address_1,
          address2:res.body.result.address_2,
          introductions:res.body.result.introductions,
         // decriptiontap1:res.body.result.introductions.description[0],
          galleries:res.body.result.galleries,
      
       
        });
      });
      window.scrollTo(500, 500);
      console.log(this.state.galleries)
  }
  submit(){
    superagent
    .post(`https://century21api.herokuapp.com/api/user-contact`)
    //     //  .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
    //     // .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
    //     //.set('Authorization', 'Bearer perm: {this.getAuthenticationToken})
        .send({ project_id: Number(this.props.match.params.id),  name: this.state.namecontact, phone: this.state.phone,email: this.state.email })

        .end((err, res) => {
           if (err) { this.setState({ errorMessage: 'Cannot retrieve data form server' });  ToastStore.error(" Invalid please check your input  ");return; }
           this.setState({
              

            });
            if (res.status===200){
              ToastStore.success('Thank! We will contact you later');
             
           
            }
        });
  }
  emailchange = (event) => {
    this.setState({ email: event.target.value })
}
namecontactchange = (event) => {
    this.setState({ namecontact : event.target.value })
}

  tophandle(){
    this.refs.top.scrollIntoView({ behavior: 'smooth'});
  }
  handleShow(i) {
    this.setState({index: i});
    this.refs[i].scrollIntoView({ behavior: 'smooth'});
    console.log(i)
  }
test(){
  this.refs.tap2.scrollIntoView();
}
  setWidth = e => { 
    this.setState({
      width: Number(e.target.value) || e.target.value
    });
  };
  rawMarkupdescription(){
  
  
 
    var rawMarkup = this.state.description
    return { __html: rawMarkup };
 
   
 
}
rawMarkup(){
  
  
 
    var rawMarkup = this.state.introductions[0].description
    return { __html: rawMarkup };
 
   
 
}
rawMarkup1(){
  
  
 
  var rawMarkup = this.state.introductions[1].description
  return { __html: rawMarkup };

 

}
rawMarkup2(){
  
  
 
  var rawMarkup = this.state.introductions[2].description
  return { __html: rawMarkup };

 

}
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
handleOnChange(value) {
  this.setState({
     phone: value
  });
}
phonechange = (value) => {
  this.setState({ phone : value })
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
      let slice=null;
      if(this.state.galleries.length === 0){
        slice =  <ImageGallery items={items} />
     
      }else{
     
        slice =  <ImageGallery items={this.state.galleries} />
      }
      const images = [
        {
          image: {imagenotavaiable},
          thumbnail: 'https://img1.southernliving.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2018/04/main/6401_rusty_ridge_dr_austin_tx-print-001-16-exterior_front-2700x1802-300dpi.jpg?height=50&width=50',
        },
        {
          image: {imagenotavaiable},
          thumbnail: 'http://lorempixel.com/1000/600/nature/2/'
        },
        {
          image: {imagenotavaiable},
          thumbnail: 'http://lorempixel.com/250/150/nature/3/'
        },
        {
          image: {imagenotavaiable},
          thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        },
        {
          image: {imagenotavaiable},
          thumbnail: 'http://lorempixel.com/250/150/nature/2/'
        },
        {
          image: {imagenotavaiable},
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
        <head >

<script src="script/jquery-1.js"></script>
<script src="script/jquery.js"></script>
<script src="script/layer.js"></script>

            <script type="text/javascript" id="lim:component" src="script/component-v5.js"></script>

            
               </head>
      <body >

            <Header/>
    

      
      <div class="clear"></div>
          <div class="main1" ref="top" >
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
        <li>.</li>
      </ul>
    </div>
    
      <div class="overflow" style={{marginBottom:'30px'}}>
          <div class="nrhead">
           
              <div class="fl">
                  <div class="house_slider"> 
                  <div id="gallery" class="ad-gallery">
                 
                {slice}
  
    
  

                  
                  </div>
                  </div>
              </div>
            
          <div class="fr nrheadright" style={{marginTop: '-5px'}}>
              <div class="goods_title color_red">
                  {this.state.title}
              </div>
                  <div class="goods_fun">
                      <span class="fun_vs"> <a href="javascript:" rel="nofollow" >COUNTRY: {this.state.country.toUpperCase()}</a> </span>
                      <span class="fun_calculator"> <a target="_self" href="javascript:;" price="97.00" class="list_house_calculator tool_ji jisuanqi">PROJECT TYPE: {this.state.project_type.toUpperCase()}</a> </span>
                      <span class="fun_ad">
                                              </span>
                  </div>
                  <div class="mb10 tui"><span class="tjld">Loaction: Address #1: {this.state.address1} OR Address #2: {this.state.address2}	   
                               	</span>
                                
                     </div>
                      <div class="t3_title mt10">
                   
                      <p class="tjldp"> Avg Annual Rent : <a style={{color:'red'}}>{this.state.avg_annual_rent_from}% - {this.state.avg_annual_rent_to}%</a> </p>
                                <p class="tjldp"> Down Payment : <a style={{color:'red'}}>{this.state.down_payment}</a> </p>
                              
                   </div>
                     <div class="mb10 tui">
                                
                                 
                                </div>
                                
                    <div class="phone_11" ><a href="javascript:;" title="客服人员在线,欢迎点击咨询" onclick="">Price</a>{this.state.start_price}$ - {this.state.end_price}$ </div>
                  
                    <div class="mb10 tui">
                                
                     </div>
                    <Share
  url='/${this.state.id}' title='分享生活点滴'></Share>
                   
  
                 <div class="line_01 mt10 mb10 xunpan">
                        <div class="xjrs bdsharebuttonbox bdshare-button-style0-32" data-bd-bind="1541294914762"> <span class="color_red" style={{fontWeight: 'normal'}}></span><span>Contact us if you faverite this project we will contact you later</span><span class="color_red"></span><span></span> </div>
                        
                        <div class="enquiry">
                          <form class="baogao_form" action="../feedback/feedback_ajax1.php" method="post">
                            <div class="xunpanform">
                              <dl>
                                <dt class="l-red">Name：</dt>
                                <dd>
                                  <input id="xp_name" class="input_text2" name="pinggu_name" placeholder="" type="text" value={this.state.namecontact} onChange={this.namecontactchange.bind(this)}/>
                                </dd>
                              </dl>
                              <dl>
                                <dt class="l-red">E-mal：</dt>
                                <dd>
                                  <input id="xp_shou" class="input_text2" name="pinggu_shou" placeholder="" type="text" value={this.state.email} onChange={this.emailchange.bind(this)}/>
                                </dd>
                              </dl>
                              <dl>
                                <dt class="l-red">Phone：</dt>
                                <dd>
                                <ReactPhoneInput style={{width:'200px'}} defaultCountry={'kh'} value={this.state.phone} onChange={this.phonechange.bind(this)}/>
                                </dd>
                              </dl>
                              <dl>
                                <dd>
                                  <input class="report_xp report" value="Submit" type="button" onClick={this.submit.bind(this)}/>
                                  
                                
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
  
          
                  <Sticky>
       
          <header>
              <ul class="lease_intro_head">

        
        <li attr_id="xmjs" class="on"> <a target="_self" href="javascript:;" onClick={this.tophandle.bind(this)}>Top</a> </li>
        {this.state.introductions
           
           .map((headers,i)=>{
             
return (
        <li attr_id="touzir" class=""> <a target="_self" href="javascript:;" onClick={this.handleShow.bind(this, i)}>{headers.name}</a> </li>
      );
    })}
       
       
        <li attr_id="jiazoushir" class=""> <a target="_self" href="javascript:;">Event</a> </li>
        <li attr_id="zldownr" class=""> <a class="opendown" target="_self" href="javascript:void(0);">资料下载</a> </li>
        <li attr_id="zixunr" class="zixunr"> <a target="_self" href="javascript:;">咨询：400-688-6160</a></li>
      </ul>
           
      </header>
        </Sticky>
     
    
                 
    
  

                  
      
                     
                     
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
                        <div class="intro_con_title"> <span>Project Information</span></div>
                        <div class="intro_con_item">
  
                          <p style={{lineHeight: '28px', marginBottom: '17px', color: 'rgb(50, 50, 50)', whiteSpace: 'normal'}}><span style={{fontSize: '16px'}}><strong>Description：</strong> <span dangerouslySetInnerHTML={this.rawMarkupdescription()} /></span></p>
                          <div class="t3_title mt10"> 
  <p><span style={{fontSize: '16px'}}><strong>Developer：</strong>Honglian Group</span></p>
  <p><span style={{fontSize: '16px'}}><strong>Property type：</strong>{this.state.project_type}</span></p>
  <p><span style={{fontSize: '16px'}}><strong>Date of delivery：</strong>2018</span></p>
  <p><span style={{fontSize: '16px'}}><strong>Year of property ：</strong>2018</span></p>
  <p><span style={{fontSize: '16px'}}><strong>Plainning area：</strong>77-105 square meters</span></p>
  <p><span style={{fontSize: '16px'}}><strong>Number of househods:</strong> 12</span></p>
</div>
  </div>
                      </div>
                     
  
              
                          <div id="dlwz" class="lease_intro_con">
                              
                            
  
                          </div>
                          {this.state.introductions
                             
                          .map((headers,i)=>{
                            
              return (
                            <div id="touzir" class="lease_intro_con" ref={i}>
                                <div class="intro_con_title"> <span>{headers.name}</span> </div>
                                <div class=""> 
                                <span dangerouslySetInnerHTML={this.rawMarkup()} />
                             
                                </div>
                          </div>    
    );
            })}
           
                  </div>
              </div>
            

<Rightnav />
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
          <ToastContainer position={ToastContainer.POSITION.TOP_RIGHT} store={ToastStore} lightBackground/>
      </div>
      <Flooter/>
     
     </body>
    
    </html>
   
    );
    
  }
  
}

export default Detail;
