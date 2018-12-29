import React, { Component } from "react";
import Slider from '../slider.js';
import '../build/horizontal.css';
import '../skin/slider-animations.css';
import Drawer from "../lib/drawer.jsx";
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



class home extends Component {
  
    
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
              
          <main1>
          <Tabs class="hot house "
        defaultTab="one"
        onChange={(tabId) => { console.log(tabId) }}
      >
      <div >
        <TabList style={{backgroundColor:'#fafafa', paddingLeft:'100px' ,fontSize:'40px',marginTop:'-0px',lineHeight:'80px'}}>
          <Tab style={{ backgroundColor:'#fafafa',paddingLeft:'100px',paddingRight:'100px' }} tabFor="one"><h3>CAMBODIA</h3></Tab>
          <Tab style={{backgroundColor:'#fafafa', paddingLeft:'100px',paddingRight:'100px' }} tabFor="two"><h3>MALAYSIA</h3></Tab>
          <Tab style={{ backgroundColor:'#fafafa',paddingLeft:'100px',paddingRight:'100px' }} tabFor="three"><h3>DUBAI</h3></Tab>
        </TabList>
        <TabPanel tabId="one">
        <div class="container1">
                  
                  <div class="hot house">
                 
                      
                  
                  <Tabs class="tabs1 tc"
        defaultTab="All"
        onChange={(tabId) => { console.log(tabId) }}
      >
        <TabList style={{backgroundColor:'transparent', paddingLeft:'250px' ,fontSize:'16px',marginTop:'-0px',lineHeight:'2px'}}>
        <Tab style={{ backgroundColor:'transparent',paddingLeft:'50px',paddingRight:'50px' }} tabFor="All">All</Tab>
          
          <Tab style={{ backgroundColor:'transparent',paddingLeft:'50px',paddingRight:'50px' }} tabFor="Condo">Condo</Tab>
          <Tab style={{ backgroundColor:'transparent',paddingLeft:'50px',paddingRight:'50px' }} tabFor="Apartments">Apartments</Tab>
          <Tab style={{ backgroundColor:'transparent',paddingLeft:'50px',paddingRight:'50px' }} tabFor="Borey">Borey</Tab>
          <Tab style={{ backgroundColor:'transparent',paddingLeft:'50px',paddingRight:'50px' }} tabFor="Land">Land</Tab>
      
        </TabList>
        <TabPanel tabId="All">
          <p>Tab All content</p>
        </TabPanel>
        <TabPanel tabId="Condo">
          <p>Tab 1 content</p>
        </TabPanel>
        <TabPanel tabId="Apartments">
          <p>Tab 2 content</p>
        </TabPanel>
        <TabPanel tabId="Borey">
          <p>Tab 3 content</p>
        </TabPanel>
        <TabPanel tabId="Land">
          <p>Tab 4 content</p>
        </TabPanel>
      </Tabs>
                      
                      <div style={{display: 'none'}} class="img">
                          <ul class="imgTop">
                            
       <li class="fl" style={{margin:'2px'}}>
            <div class="imgShow">
                <a href="http://www.shitonghk.com/au/279.html">
                    <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="" width="620"/>
                    <div class="zhezhao"></div>
                    <div class="imgInfo">
                        <h1 style={{width:'400px', margin:'130px auto 20px auto', overflow:'hidden', height:'32px', textAlign:'center'}}>金边“汤臣一品”-香格里拉公寓</h1>
                        <p style={{width:'610px',textAlign:'center', height:'30px'}}>金边核心商务地段,新加坡豪利开放,香格里拉比邻</p>
                    </div>
                </a>
            </div>
            <div class="descShow tc">
                <a href="http://www.shitonghk.com/au/279.html">
                    <h3>The peak坐落在柬埔寨金边的中心地带，毗邻河畔大道，前往永旺梦乐城，金界酒店、国民议会大楼、外交部等地仅需步行几分钟。 
                    </h3>
                    <p><span>42㎡</span> <span>公寓 </span> <span>约14286RMB/㎡起</span></p>
                     <div class="detail tc">查看详情</div>
                </a>
            </div>
        </li>
         <li class="fl" style={{margin:'2px'}}>
            <div class="imgShow">
                <a href="http://www.shitonghk.com/au/280.html">
                    <img src="Images/7d21101f7118a39489fbcee997474c98.jpg" alt="" width="620"/>
                    <div class="zhezhao"></div>
                    <div class="imgInfo">
                        <h1 style={{width:'400px', margin:'130px auto 20px auto', overflow:'hidden', height:'32px', textAlign:'center'}}>100万买金边“陆家嘴”首选—【钻石双星】</h1>
                        <p style={{width:'610px',textAlign:'center', height:'30px'}}>柬埔寨“陆家嘴”,三年包租24%服务,金边富人区</p>
                    </div>
                </a>
            </div>
            <div class="descShow tc">
                <a href="http://www.shitonghk.com/au/280.html">
                    <h3>国际开发商联手巨献 擎天136米双星地标 开发商提供4年24%保证回酬金额 
                    </h3>
                    <p><span>46㎡</span> <span>公寓 </span> <span>约18043RMB/㎡起</span></p>
                     <div class="detail tc">查看详情</div>
                </a>
            </div>
        </li>
         <li class="fl" style={{margin:'2px'}}>
            <div class="imgShow">
                <a href="http://www.shitonghk.com/au/278.html">
                    <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="" width="620"/>
                    <div class="zhezhao"></div>
                    <div class="imgInfo">
                        <h1 style={{width:'400px', margin:'130px auto 20px auto', overflow:'hidden', height:'32px', textAlign:'center'}}>柬埔寨首相府旁地标公寓—Skyline</h1>
                        <p style={{width:'610px',textAlign:'center', height:'30px'}}>首相府旁的家,3-5年包租18%,金融核心：玛卡拉区</p>
                    </div>
                </a>
            </div>
            <div class="descShow tc">
                <a href="http://www.shitonghk.com/au/278.html">
                    <h3>坐落在金边权力中心—首相府后面。北靠首相府，东邻中央市场，毗邻商业中心和金融中心，2公里到达金边皇宫、国家博物馆。 
                    </h3>
                    <p><span>77㎡</span> <span>公寓 </span> <span>约12987RMB/㎡起</span></p>
                     <div class="detail tc">查看详情</div>
                </a>
            </div>
        </li>
         <li class="fl" style={{margin:'2px'}}>
            <div class="imgShow">
                <a href="http://www.shitonghk.com/au/331.html">
                    <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="" width="620"/>
                    <div class="zhezhao"></div>
                    <div class="imgInfo">
                        <h1 style={{width:'400px',  margin:'130px auto 20px auto', overflow:'hidden', height:'32px', textAlign:'center'}}>金边·星汇城Star City：10万美金首选项目</h1>
                        <p style={{width:'610px',textAlign:'center', height:'30px'}}>毗邻国际机场,丰富的生活配套,水系园林生态设计</p>
                    </div>
                </a>
            </div>
            <div class="descShow tc">
                <a href="http://www.shitonghk.com/au/331.html">
                    <h3>10万美金首选项目，包租三年 净回报6%, 
                    </h3>
                    <p><span>51㎡</span> <span>公寓 </span> <span>约12549RMB/㎡起</span></p>
                     <div class="detail tc">查看详情</div>
                </a>
            </div>
        </li>
                             
                 
                 
                 
                          </ul>
                      </div>
                      <div class="img" style={{display: 'block'}}>
                          <ul class="imgTop">
                            
         
       <li class="fl" style={{margin:'2px'}}>
            <div class="imgShow">
                <a href="http://www.shitonghk.com/au/333.html">
                    <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg?v=8" alt="" width="620"/>
                    <div class="zhezhao"></div>
                    <div class="imgInfo">
                        <h1 style={{width:'400px', margin:'130px auto 20px auto', overflow:'hidden', height:'32px', textAlign:'center'}}>金边第一豪宅 丽薇雅广场</h1>
                        <p style={{width:'610px',textAlign:'center', height:'30px'}}>钻石岛豪宅</p>
                    </div>
                </a>
            </div>
            <div class="descShow tc">
                <a href="http://www.shitonghk.com/au/333.html">
                    <h3>丽薇雅广场坐落于金边钻石岛最核心位置，坐拥繁华，湄公河、百色河、洞里萨河三江交汇、四水环绕。  
                    </h3>
                    <p><span>90㎡</span> <span>公寓 </span> <span>约10000RMB/㎡起</span></p>
                     <div class="detail tc">查看详情</div>
                </a>
            </div>
        </li>
           
       <li class="fl" style={{margin:'2px'}}>
            <div class="imgShow">
                <a href="http://www.shitonghk.com/au/332.html">
                    <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg" alt="" width="620"/>
                    <div class="zhezhao"></div>
                    <div class="imgInfo">
                        <h1 style={{width:'400px', margin:'130px auto 20px auto', overflow:'hidden', height:'32px', textAlign:'center'}}>金边国家中心 sky tree</h1>
                        <p style={{width:'610px',textAlign:'center', height:'30px'}}>总理府特区房,堆谷成熟富人区,地铁旁</p>
                    </div>
                </a>
            </div>
            <div class="descShow tc">
                <a href="http://www.shitonghk.com/au/332.html">
                    <h3>眺望总理府，金边市政府，大使馆，火车站，大型商场，医院，银行，与中央公园。  
                    </h3>
                    <p><span>32㎡</span> <span>公寓 </span> <span>约30313RMB/㎡起</span></p>
                     <div class="detail tc">查看详情</div>
                </a>
            </div>
        </li>
           
       <li class="fl" style={{margin:'2px'}}>
            <div class="imgShow">
                <a href="http://www.shitonghk.com/au/324.html">
                    <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="" width="620"/>
                    <div class="zhezhao"></div>
                    <div class="imgInfo">
                        <h1 style={{width:'400px', margin:'130px auto 20px auto', overflow:'hidden', height:'32px', textAlign:'center'}}>金边皇宫区公寓East One</h1>
                        <p style={{width:'610px', textAlign:'center', height:'30px'}}>皇宫旁唯一高级公寓,一次性返三年租金,可国内付人民币</p>
                    </div>
                </a>
            </div>
            <div class="descShow tc">
                <a href="http://www.shitonghk.com/au/324.html">
                    <h3>柬埔寨首都金边皇宫区唯一出售的酒店式公寓，稀缺而珍贵。  
                    </h3>
                    <p><span>45㎡</span> <span>公寓 </span> <span>约15333RMB/㎡起</span></p>
                     <div class="detail tc">查看详情</div>
                </a>
            </div>
        </li>
           
       <li class="fl" style={{margin:'2px'}}>
            <div class="imgShow">
                <a href="http://www.shitonghk.com/au/323.html">
                    <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="" width="620"/>
                    <div class="zhezhao"></div>
                    <div class="imgInfo">
                        <h1 style={{width:'400px', margin:'130px auto 20px auto',  overflow:'hidden', height:'32px', textAlign:'center'}}>柬埔寨 ONE PARK 金边壹号</h1>
                        <p style={{width:'610px',textAlign:'center', height:'30px'}}>国际设计团队打造,安保配套齐全,花园式公寓</p>
                    </div>
                </a>
            </div>
            <div class="descShow tc">
                <a href="http://www.shitonghk.com/au/323.html">
                    <h3>金边市最大规模的园林造景，是金边唯一的花园式社区公寓。  
                    </h3>
                    <p><span>65㎡</span> <span>公寓 </span> <span>约15385RMB/㎡起</span></p>
                     <div class="detail tc">查看详情</div>
                </a>
            </div>
        </li>
        
                          </ul>
                      </div>
                      <div class="img" style={{display: 'none'}}>
                          <ul class="imgTop">
                                        
          
       <li class="fl" style={{margin:'2px'}}>
            <div class="imgShow">
                <a href="http://www.shitonghk.com/au/279.html">
                    <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="" width="620"/>
                    <div class="zhezhao"></div>
                    <div class="imgInfo">
                        <h1 style={{width:'400px', margin:'130px auto 20px auto', overflow:'hidden', height:'32px', textAlign:'center'}}>The peak坐落在柬埔寨金边的中心地带，毗邻河畔大道，前往永旺梦乐城，金界酒店、国民议会大楼、外交部等地仅需步行几分钟。</h1>
                        <p style={{width:'610px',textAlign:'center', height:'30px'}}>金边核心商务地段,新加坡豪利开放,香格里拉比邻</p>
                    </div>
                </a>
            </div>
            <div class="descShow tc">
                <a href="http://www.shitonghk.com/au/279.html">
                    <h3>The peak坐落在柬埔寨金边的中心地带，毗邻河畔大道，前往永旺梦乐城，金界酒店、国民议会大楼、外交部等地仅需步行几分钟。  
                    </h3>
                    <p><span>42㎡</span> <span>公寓 </span> <span>约14286RMB/㎡起</span></p>
                     <div class="detail tc">查看详情</div>
                </a>
            </div>
        </li>
           
       <li class="fl" style={{margin:'2px'}}>
            <div class="imgShow">
                <a href="http://www.shitonghk.com/au/280.html">
                    <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="" width="620"/>
                    <div class="zhezhao"></div>
                    <div class="imgInfo">
                        <h1 style={{width:'400px', margin:'130px auto 20px auto', overflow:'hidden', height:'32px', textAlign:'center'}}>国际开发商联手巨献 擎天136米双星地标 开发商提供4年24%保证回酬金额</h1>
                        <p style={{width:'610px',textAlign:'center', height:'30px'}}>柬埔寨“陆家嘴”,三年包租24%服务,金边富人区</p>
                    </div>
                </a>
            </div>
            <div class="descShow tc">
                <a href="http://www.shitonghk.com/au/280.html">
                    <h3>国际开发商联手巨献 擎天136米双星地标 开发商提供4年24%保证回酬金额  
                    </h3>
                    <p><span>46㎡</span> <span>公寓 </span> <span>约18043RMB/㎡起</span></p>
                     <div class="detail tc">查看详情</div>
                </a>
            </div>
        </li>
           
       <li class="fl" style={{margin:'2px'}}>
            <div class="imgShow">
                <a href="http://www.shitonghk.com/au/278.html">
                    <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="" width="620"/>
                    <div class="zhezhao"></div>
                    <div class="imgInfo">
                        <h1 style={{width:'400px', margin:'130px auto 20px auto', overflow:'hidden', height:'32px',  textAlign:'center'}}>坐落在金边权力中心—首相府后面。北靠首相府，东邻中央市场，毗邻商业中心和金融中心，2公里到达金边皇宫、国家博物馆。</h1>
                        <p style={{width:'610px',textAlign:'center', height:'30px'}}>首相府旁的家,3-5年包租18%,金融核心：玛卡拉区</p>
                    </div>
                </a>
            </div>
            <div class="descShow tc">
                <a href="http://www.shitonghk.com/au/278.html">
                    <h3>坐落在金边权力中心—首相府后面。北靠首相府，东邻中央市场，毗邻商业中心和金融中心，2公里到达金边皇宫、国家博物馆。  
                    </h3>
                    <p><span>77㎡</span> <span>公寓 </span> <span>约12987RMB/㎡起</span></p>
                     <div class="detail tc">查看详情</div>
                </a>
            </div>
        </li>
           
       <li class="fl" style={{margin:'2px'}}>
            <div class="imgShow">
                <a href="http://www.shitonghk.com/au/331.html">
                    <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="" width="620"/>
                    <div class="zhezhao"></div>
                    <div class="imgInfo">
                        <h1 style={{width:'400px', margin:'130px auto 20px auto', overflow:'hidden', height:'32px', textAlign:'center'}}>10万美金首选项目，包租三年 净回报6%,</h1>
                        <p style={{width:'610px',textAlign:'center', height:'30px'}}>毗邻国际机场,丰富的生活配套,水系园林生态设计</p>
                    </div>
                </a>
            </div>
            <div class="descShow tc">
                <a href="http://www.shitonghk.com/au/331.html">
                    <h3>10万美金首选项目，包租三年 净回报6%,  
                    </h3>
                    <p><span>51㎡</span> <span>公寓 </span> <span>约12549RMB/㎡起</span></p>
                     <div class="detail tc">查看详情</div>
                </a>
            </div>
        </li>
     
            
                          </ul>
                      </div>
                      <div class="img" style={{ display: 'none'}}>
                          <ul class="imgTop">
                                        
          
       <li class="fl" style={{margin:'2px'}}>
            <div class="imgShow">
                <a href="http://www.shitonghk.com/au/334.html">
                    <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg" alt="" width="620"/>
                    <div class="zhezhao"></div>
                    <div class="imgInfo">
                        <h1 style={{width:'400px', margin:'130px auto 20px auto', overflow:'hidden' ,height:'32px', textAlign:'center'}}>西港永远唯一的沙滩之上旅游综合体项目，投资西港海滨公寓的唯一机会</h1>
                        <p style={{width:'610px',textAlign:'center', height:'30px'}}>滨海亲水豪宅,360°全景海岸风景</p>
                    </div>
                </a>
            </div>
            <div class="descShow tc">
                <a href="http://www.shitonghk.com/au/334.html">
                    <h3>西港永远唯一的沙滩之上旅游综合体项目，投资西港海滨公寓的唯一机会  
                    </h3>
                    <p><span>55㎡</span> <span>公寓 </span> <span>约21818RMB/㎡起</span></p>
                     <div class="detail tc">查看详情</div>
                </a>
            </div>
        </li>
           
       <li class="fl" style={{margin:'2px'}}>
            <div class="imgShow">
                <a href="http://www.shitonghk.com/au/336.html">
                    <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg" alt="" width="620"/>
                    <div class="zhezhao"></div>
                    <div class="imgInfo">
                        <h1 style={{width:'400px', margin:'130px auto 20px auto', overflow:'hidden', height:'32px', textAlign:'center'}}>泰荣·西港城位于西港胜利海滩，毗邻西哈努克港省政府，生态环境优美，地理位置绝佳，升值潜力巨大。</h1>
                        <p style={{width:'610px',textAlign:'center', height:'30px'}}>稀缺,升值潜力巨大</p>
                    </div>
                </a>
            </div>
            <div class="descShow tc">
                <a href="http://www.shitonghk.com/au/336.html">
                    <h3>泰荣·西港城位于西港胜利海滩，毗邻西哈努克港省政府，生态环境优美，地理位置绝佳，升值潜力巨大。  
                    </h3>
                    <p><span>30㎡</span> <span>公寓 </span> <span>约13333RMB/㎡起</span></p>
                     <div class="detail tc">查看详情</div>
                </a>
            </div>
        </li>
           
       <li class="fl" style={{margin:'2px'}}>
            <div class="imgShow">
                <a href="http://www.shitonghk.com/au/338.html">
                    <img src="https://cdnimages.familyhomeplans.com/plans/75977/75977-b1200.jpg" alt="" width="620"/>
                    <div class="zhezhao"></div>
                    <div class="imgInfo">
                        <h1 style={{width:'400px', margin:'130px auto 20px auto', overflow:'hidden', height:'32px', textAlign:'center'}}>唯一一栋没有赌场的高层公寓，建筑规范布局合理</h1>
                        <p style={{width:'610px',textAlign:'center', height:'30px'}}>稀缺,海景豪宅</p>
                    </div>
                </a>
            </div>
            <div class="descShow tc">
                <a href="http://www.shitonghk.com/au/338.html">
                    <h3>唯一一栋没有赌场的高层公寓，建筑规范布局合理  
                    </h3>
                    <p><span>0㎡</span> <span>公寓 </span> <span>约0RMB/㎡起</span></p>
                     <div class="detail tc">查看详情</div>
                </a>
            </div>
        </li>
           
       <li class="fl" style={{margin:'2px'}}>
            <div class="imgShow">
                <a href="http://www.shitonghk.com/au/337.html">
                    <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg" alt="" width="620"/>
                    <div class="zhezhao"></div>
                    <div class="imgInfo">
                        <h1 style={{width:'400px', margin:'130p auto 20px auto', overflow:'hidden', height:'32px', textAlign:'center'}}>距离Sokha度假村10分钟，拥有壮观的海、山与市景，属永久地契</h1>
                        <p style={{width:'610px',textAlign:'center', height:'30px'}}>稀缺,永久地契</p>
                    </div>
                </a>
            </div>
            <div class="descShow tc">
                <a href="http://www.shitonghk.com/au/337.html">
                    <h3>距离Sokha度假村10分钟，拥有壮观的海、山与市景，属永久地契  
                    </h3>
                    <p><span>0㎡</span> <span>公寓 </span> <span>约0RMB/㎡起</span></p>
                     <div class="detail tc">查看详情</div>
                </a>
            </div>
        </li>
        
            
                          </ul>
                      </div>
                  </div>
                  
                  
                  
                  
                  <div class="news hot" style={{width:' 1182px', marginLeft: 'auto', marginRight: 'auto'}}>
                      <div class="title tc">
                          <h1>Overseas information</h1>
                          <p>Master the latest information and activities, and look at the world</p>
                      </div>
                     
                      <div class="newRight fl">
                          <div class="left fl">
                  <div class="donghua">
                     
                 
                    <a href="http://www.shitonghk.com/news/kuaixun/2017-09-09/3303.html">
                      <img src="https://cdnimages.familyhomeplans.com/plans/75977/75977-b1200.jpg" alt="" width="100%" height="300"/>
                      <div class="toumingtiao"></div>
                      <div class="imgInfo">
                        <h1>一个投资客眼中的柬埔寨</h1>
                        <p>币值稳定、门槛低、正处资产膨胀前夜</p>
                      </div>
                  
                      <div class="info">
                        <p>
          如果你资金量不是很大，又想对冲人民币贬值的压力，完全可以了解下柬埔寨的房产市场。本文是根据一个在柬埔寨工作生活四年、资深房产投资客的访谈整理而成，希望对你有所启发                                </p>
                      
                      </div>
                    </a>
                  </div>
                
                
                
                             
                              <div class="clear"></div>
                              <ul class="newsList" style={{display:'block'}}>
                                                          <li>
                                    <a href="http://www.shitonghk.com/news/au/201810/6245.html">
                        <img class="pic fl" src="https://cdnimages.familyhomeplans.com/plans/75977/75977-b1200.jpg"/>
                                        <div class="index_dsc fr">
                        <p>逃离吧，新兴市场国家机会在等着我们呢！</p>
                        <span class="mar-5">特别是连高盛都说：新兴市场的资产开始显现抄底价值。</span>
                      </div>
                                    </a>
                                </li>
                                                          <li>
                                    <a href="http://www.shitonghk.com/news/au/201810/6244.html">
                        <img class="pic fl" src="https://cdnimages.familyhomeplans.com/plans/75977/75977-b1200.jpg"/>
                                        <div class="index_dsc fr">
                        <p>中国模式在柬埔寨发展得如何？结果完全让人想不到！</p>
                        <span class="mar-5">不得不提的还有“一带一路”倡议的示范工程——西哈努克港口经济特区，目前已吸引来自美、日、意、法等国及中国各个行业企业入驻80余家，解决当地就业万余人次，成为柬埔寨境内规模大的经济特区。而随着越来越多的外来人口流入，也必将带动其房产租赁及投资市场的蓬勃发展。</span>
                      </div>
                                    </a>
                                </li>
                                                          <li>
                                    <a href="http://www.shitonghk.com/news/au/201810/6243.html">
                        <img class="pic fl" src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                                        <div class="index_dsc fr">
                        <p>中国企业投资东盟的机会有哪些？</p>
                        <span class="mar-5">柬埔寨正在致力于提供可靠稳定的电力，并且逐步下调电价，降低成本；改善和提高交通物流水平，降低物流成本</span>
                      </div>
                                    </a>
                                </li>
                                                          <li>
                                    <a href="http://www.shitonghk.com/news/au/201810/6226.html">
                        <img class="pic fl" src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                                        <div class="index_dsc fr">
                        <p>双喜临门，西港2.0来了！</p>
                        <span class="mar-5">目前是没有重工业，基本都是轻纺织业，有了该项目，未来就有发展其他工业的可能，当然也会用钢企业的降低成本。</span>
                      </div>
                                    </a>
                                </li>
                                                          <li>
                                    <a href="http://www.shitonghk.com/news/au/201810/6225.html">
                        <img class="pic fl" src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                                        <div class="index_dsc fr">
                        <p>中柬多项经济合作助柬埔寨产业升级</p>
                        <span class="mar-5">为了帮助柬埔寨实现这个目标，黄副主任表示，将鼓励更多的江苏省投资者和企业到西哈努克省投资发展。</span>
                      </div>
                                    </a>
                                </li>
                                                          <li>
                                    <a href="http://www.shitonghk.com/news/au/201810/6224.html">
                        <img class="pic fl" src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                                        <div class="index_dsc fr">
                        <p>柬埔寨的经济特区，金边西港最受欢迎</p>
                        <span class="mar-5">金边经济特区总面积逾350公顷，分3期发展。最后一期工程约58公顷，正在规划阶段，主要是工厂用地，预计今年开始建设主要的基础设施。
      
      </span>
                      </div>
                                    </a>
                                </li>
                                                          <li>
                                    <a href="http://www.shitonghk.com/news/au/201810/6222.html">
                        <img class="pic fl" src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                                        <div class="index_dsc fr">
                        <p>未来三年中国投资可能为西哈努克城房地产带来什么</p>
                        <span class="mar-5">在此期间，即使镇上的中国人数保持不变，租金也不可能达到今年的峰值。</span>
                      </div>
                                    </a>
                                </li>
                                                          <li>
                                    <a href="http://www.shitonghk.com/news/au/201810/6209.html">
                        <img class="pic fl" src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                                        <div class="index_dsc fr">
                        <p>中日经济交流，除了应对贸易战、金融战，还有一点值得重视</p>
                        <span class="mar-5">为什么不看好这两年房地产火爆的日本和菲律宾，这两个国家很容易被美国影响。</span>
                      </div>
                                    </a>
                                </li>
                                                          <li>
                                    <a href="http://www.shitonghk.com/news/au/201810/6208.html">
                        <img class="pic fl" src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                                        <div class="index_dsc fr">
                        <p>西港会成为柬埔寨经济的第二“发动机”吗?</p>
                        <span class="mar-5">随着外国投资商先后到西省投资，该省成为一个具有贸易潜力的省份。</span>
                      </div>
                                    </a>
                                </li>
                                                          <li>
                                    <a href="http://www.shitonghk.com/news/au/201810/6207.html">
                        <img class="pic fl" src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                                        <div class="index_dsc fr">
                        <p>2018年第三季度15个亚洲房地产市场的表现汇总</p>
                        <span class="mar-5">到泰国规划的大型综合开发项目以及珠江广州至深港高速铁路的开通三角洲地区，亚洲市场出现了稳定的机遇，即使在贸易战下也继续引起关注</span>
                      </div>
                                    </a>
                                </li>
                                              <li class="bin">
                    <a href="http://www.shitonghk.com/news/au">查看更多</a>
                    </li>
                              </ul>
                              <ul class="newsList">
                  
                                  <li>
                      <a href="http://www.shitonghk.com/news/liuxuezixun/2018-10-24/6153.html">
                        <img class="pic fl" src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                        <div class="index_dsc fr">
                          <p>世界投资论坛上 洪森总理公布外国投资愿景和战略</p>
                          <span class="mar-5">洪森总理在会上向投资者保证，柬埔寨拥有良好的投资环境，希望通过和平，安全，政治和宏观经济稳定以及改善法律和体制框架来实现的更好的投资环境。</span>
                        </div>
                      </a>
                    </li>
                                  <li>
                      <a href="http://www.shitonghk.com/news/liuxuezixun/2018-10-24/6152.html">
                        <img class="pic fl" src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                        <div class="index_dsc fr">
                          <p>金边皇宫打开的“正确姿势” 世通海外</p>
                          <span class="mar-5">作为一个城市，甚至是国家最具代表性的建筑之一，金边大皇宫就成为了游客必去的景点之一，接下来我们就好好聊聊大皇宫令人为之倾倒的魅力所在吧！
      
      </span>
                        </div>
                      </a>
                    </li>
                                  <li>
                      <a href="http://www.shitonghk.com/news/liuxuezixun/2018-10-23/6137.html">
                        <img class="pic fl" src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                        <div class="index_dsc fr">
                          <p>世通海外最新攻略：如何在缅甸拥有一套公寓</p>
                          <span class="mar-5">现在外国公民可以拥有相应公寓大楼总可售楼面面积的40％。
      </span>
                        </div>
                      </a>
                    </li>
                                  <li>
                      <a href="http://www.shitonghk.com/news/liuxuezixun/2018-10-20/6115.html">
                        <img class="pic fl" src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                        <div class="index_dsc fr">
                          <p>周末吃那家？9家正宗高棉餐厅任你选择 世通海外</p>
                          <span class="mar-5">在这里，我们有九家餐厅，提供各种正宗的高棉美食。</span>
                        </div>
                      </a>
                    </li>
                                  <li>
                      <a href="http://www.shitonghk.com/news/liuxuezixun/2018-09-25/5911.html">
                        <img class="pic fl" src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                        <div class="index_dsc fr">
                          <p>不止吴哥窟，柬埔寨的新鲜小众的路线玩法</p>
                          <span class="mar-5">柏威夏寺是一座古代高棉印度教寺庙，是高棉最具代表性的建筑之一，也是世界文化遗产。</span>
                        </div>
                      </a>
                    </li>
                                  <li>
                      <a href="http://www.shitonghk.com/news/liuxuezixun/2018-09-21/5885.html">
                        <img class="pic fl" src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                        <div class="index_dsc fr">
                          <p>“佛系”青年清单：柬埔寨有哪些佛系景点？</p>
                          <span class="mar-5">我对佛理不是太懂，但始终保持着敬畏之心。若你是个诚心礼佛的人，请一定要去到这里看一看。</span>
                        </div>
                      </a>
                    </li>
                                  <li>
                      <a href="http://www.shitonghk.com/news/liuxuezixun/2018-09-19/5853.html">
                        <img class="pic fl" src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                        <div class="index_dsc fr">
                          <p>【好玩+人少+便宜+省心】国庆就去柬埔寨</p>
                          <span class="mar-5">最近发现有个地方，除了是LP评选出的“500个最值得去的地方”高票领先的第一名，更是一个备受外国人喜爱的旅拍胜地！</span>
                        </div>
                      </a>
                    </li>
                                  <li>
                      <a href="http://www.shitonghk.com/news/liuxuezixun/2018-09-13/5776.html">
                        <img class="pic fl" src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                        <div class="index_dsc fr">
                          <p>在泰国定居要准备多少钱？世通海外</p>
                          <span class="mar-5">就拿Lee和Levi’s这两个牌子来说吧，经常都是半价销售，运气好的时候还能用一百块买到国内七八百的衣服，真的是非常划算了。</span>
                        </div>
                      </a>
                    </li>
                                  <li>
                      <a href="http://www.shitonghk.com/news/liuxuezixun/2018-09-11/5743.html">
                        <img class="pic fl" src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                        <div class="index_dsc fr">
                          <p>柬埔寨土地所有权，转让7大步骤 世通海外</p>
                          <span class="mar-5">这是需要上交给柬埔寨财经部的税。缴纳地点为税务局。在缴纳过后，您会收到一份收据，这是您已经纳税的证明。</span>
                        </div>
                      </a>
                    </li>
                                  <li>
                      <a href="http://www.shitonghk.com/news/liuxuezixun/2018-09-10/5725.html">
                        <img class="pic fl" src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                        <div class="index_dsc fr">
                          <p>柬埔寨证券委员会已批准 2企业准备上市</p>
                          <span class="mar-5">一旦上述两家企业顺利上市，将能增加我国股市上市企业数目，为投资者提供更多选择，从而提振股市交易量。</span>
                        </div>
                      </a>
                    </li>
                                  <li class="bin">
                      <a href="http://www.shitonghk.com/news/liuxuezixun">查看更多</a>
                     </li>
                              </ul>
                              <ul class="newsList">
                  
                                                      <li>
                                  <a href="http://www.shitonghk.com/news/zhengce/2018-07-06/4903.html">
                      <img class="pic fl" src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                                      <div class="index_dsc fr">
                        <p>100万元人民币买“陆家嘴”地段房产，这房跟白捡一样</p>
                        <span class="mar-5">关键是谁具有慧眼，能预测到城市未来发展的样子，这也许很难，就如同你也会错过了上海楼市的大牛市一样。</span>
                      </div>
                                  </a>
                              </li>
                                                        <li>
                                  <a href="http://www.shitonghk.com/news/zhengce/2018-07-06/4899.html">
                      <img class="pic fl" src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                                      <div class="index_dsc fr">
                        <p>错过才是最大的损失！看过此文后，至少你不会后悔！</p>
                        <span class="mar-5">如果不是因为柬埔寨现在穷和弱小，如果不是交通、基建等没有打通，哪有大家的机会去投资？？</span>
                      </div>
                                  </a>
                              </li>
                                                        <li>
                                  <a href="http://www.shitonghk.com/news/zhengce/2018-07-06/4896.html">
                      <img class="pic fl" src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                                      <div class="index_dsc fr">
                        <p>东南亚房产中为什么要投资日新月异的金边房产！</p>
                        <span class="mar-5">世通海外有香港客户把香港房子抵押给银行，把钱借出来放在柬埔寨商业银行进行套利！</span>
                      </div>
                                  </a>
                              </li>
                                                        <li>
                                  <a href="http://www.shitonghk.com/news/zhengce/2018-07-06/4895.html">
                      <img class="pic fl" src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                                      <div class="index_dsc fr">
                        <p>对比金边和国内几大城市水平，世通海外发现“宝”！</p>
                        <span class="mar-5">80岁的大妈会讲法语，路边的卖菜阿姨会说英文，突突司机日语中文666，这是金边的常态。</span>
                      </div>
                                  </a>
                              </li>
                                                        <li>
                                  <a href="http://www.shitonghk.com/news/zhengce/2018-07-06/4893.html">
                      <img class="pic fl" src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                                      <div class="index_dsc fr">
                        <p>当18岁的柬埔寨遇到30岁的深圳，莫笑少年穷！</p>
                        <span class="mar-5">金边，曾经的东方小巴黎，现在东南亚明日之星
      深圳，今日中国的曼哈顿，曾经中国的小渔村</span>
                      </div>
                                  </a>
                              </li>
                                                        <li>
                                  <a href="http://www.shitonghk.com/news/zhengce/2018-07-06/4902.html">
                      <img class="pic fl" src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                                      <div class="index_dsc fr">
                        <p>为什么金边一区域能汇聚了如此多的豪华高楼大厦？</p>
                        <span class="mar-5">这是金边的一角，当然，也是金边最贵的一角！</span>
                      </div>
                                  </a>
                              </li>
                                            <li class="bin">
                    <a href="http://www.shitonghk.com/news/zhengce">查看更多</a>
                   </li>
                              </ul>
                          </div>
                
                          
                
                
                      </div>
              
               <div class="newLeft fr">
                
                <div class="remen">
                  <h2>Popular Articles</h2>
                                          
                  <a class="item1" href="http://www.shitonghk.com/news/au/201806/4822.html">
                      <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                      <i>1</i>
                      <p>继京东阿里之后，华为投8100万美元在泰国建信息科技中心</p>
                    </a>
                                           
                  <a class="item1" href="http://www.shitonghk.com/news/au/201806/4817.html">
                      <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                      <i>2</i>
                      <p>“狠的怕横的”这才是新一轮全球化竞争的本质！</p>
                    </a>
                                           
                  <a class="item1" href="http://www.shitonghk.com/news/liuxuezixun/2018-05-24/4768.html">
                      <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                      <i>3</i>
                      <p>人口红利，石油，价值洼地，柬埔寨逆袭投资人想象</p>
                    </a>
                                           
                  <a class="item" href="http://www.shitonghk.com/news/au/201804/4620.html">
                      <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                      <i>4</i>
                      <p>美国又抓住中国的“痛点”？莫急，好戏在后面</p>
                    </a>
                                           
                  <a class="item" href="http://www.shitonghk.com/news/au/201804/4562.html">
                      <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                      <i>5</i>
                      <p>从泰国到柬埔寨 投资者改变了东南亚房产市场</p>
                    </a>
                                           
                  <a class="item" href="http://www.shitonghk.com/news/liuxuezixun/2018-03-28/4444.html">
                      <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                      <i>6</i>
                      <p>外媒调查：对外国人旅游者来说， 柬埔寨地美  人更美!</p>
                    </a>
                                           
                  <a class="item" href="http://www.shitonghk.com/news/au/201803/4334.html">
                      <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                      <i>7</i>
                      <p>你的城市的房价和租金在东南亚处于什么水平</p>
                    </a>
                                           
                  <a class="item" href="http://www.shitonghk.com/news/au/201803/4296.html">
                      <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                      <i>8</i>
                      <p>中国的“一带一路”建设是如何影响东南亚房地产市场的</p>
                    </a>
                                           
                  <a class="item" href="http://www.shitonghk.com/news/au/201803/4252.html">
                      <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                      <i>9</i>
                      <p>中国未来5年超富人群将翻番 创业最好的时机到了吗？</p>
                    </a>
                                           
                  <a class="item" href="http://www.shitonghk.com/news/liuxuezixun/2018-03-05/4224.html">
                      <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                      <i>10</i>
                      <p>为什么澳洲敢提高限制中国人移民的门槛</p>
                    </a>
                             </div>
                <div class="remen">
                  <h2 style={{color:'#990000'}}>往期活动回顾</h2>
                              <a class="item" href="http://www.shitonghk.com/exhibition/4602.html">
                      <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                      <p>4.14/4.15，北京|上海|南京|成都，雅居乐天汇四地同开团购大会</p>
                  </a>
                               <a class="item" href="http://www.shitonghk.com/exhibition/3377.html">
                      <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                      <p>杭州站|柬埔寨房产投资专场峰会—掘金柬埔寨</p>
                  </a>
                               <a class="item" href="http://www.shitonghk.com/exhibition/3306.html">
                      <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg"/>
                      <p>北京站|中国海外投资CSR国别风险指数发布</p>
                  </a>
                               <a class="item" href="http://www.shitonghk.com/exhibition/3307.html">
                      <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg"/>
                      <p>深圳站|相约睿啟会，遇见财富未来 ——全国巡回海外投</p>
                  </a>
                             </div>
                
     
                      </div>
                  </div>
          
            
            <div class="hot immigrant">
                      <div class="title tc">
                          <h1>热门移民项目</h1>
                          <p>精选低风险项目</p>
                      </div>
                     
                      <div style={{display:'block'}} class="img">
                          <ul class="imgTop imgTop1">
                              <li>
                                   <a href="http://www.shitonghk.com/yimin/Global/13.html">
                                      <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg" alt="马耳他"/>
                                      <div class="imgInfo">
                                         <h1>马耳他</h1>
                                        <p>免签全球165个国家，享欧盟一流教</p>
                                      </div>
                                      
                                  </a>
                              </li>
                              <li>
                                   <a href="http://www.shitonghk.com/yimin/Global/8.html">
                                      <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg" alt="希腊"/>
                                      <div class="imgInfo">
                                         <h1>希腊</h1>
                                        <p>更便宜， 25万欧元买房畅行欧洲</p>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                   <a href="http://www.shitonghk.com/yimin/Global/9.html">
                                      <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg" alt="西班牙"/>
                                      <div class="imgInfo">
                                         <h1>西班牙</h1>
                                        <p>更宜/移居，50万欧买房遇见西班牙</p>
                                      </div>
                                  </a>
                              </li>
                            <li>
                                <a href="http://www.shitonghk.com/yimin/Global/1.html">
                                    <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg" alt="英国"/>
                                    <div class="imgInfo">
                                        <h1>英国</h1>
                                        <p>享世界顶尖教育与全民免费医疗服</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.shitonghk.com/yimin/Global/5.html">
                                    <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="爱尔兰"/>
                                    <div class="imgInfo">
                                        <h1>爱尔兰</h1>
                                        <p>一步到位拿永居，先批准后投资，跳板</p>
                                    </div>
                                </a>
                            </li>
      
      
                          </ul>
                      </div>
      
                  
                      <div class="img">
                          <ul class="imgTop imgTop1">
                                                  <li>
                                <a href="http://www.shitonghk.com/yimin/Global/13.html">
                                    <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="马耳他"/>
                                    <div class="imgInfo">
                                        <h1>马耳他</h1>
                                        <p>免签全球165个国家，享欧盟一流教</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.shitonghk.com/yimin/Global/1.html">
                                    <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="英国"/>
                                    <div class="imgInfo">
                                        <h1>英国</h1>
                                        <p>享世界顶尖教育与全民免费医疗服</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.shitonghk.com/yimin/Global/4.html">
                                    <img src="https://cdnimages.familyhomeplans.com/plans/75977/75977-b1200.jpg" alt="澳洲188A"/>
                                    <div class="imgInfo">
                                        <h1>澳洲188A</h1>
                                        <p>无英语要求,投资方式可灵活变通</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.shitonghk.com/yimin/Global/5.html">
                                    <img src="https://cdnimages.familyhomeplans.com/plans/75977/75977-b1200.jpg" alt="爱尔兰"/>
                                    <div class="imgInfo">
                                        <h1>爱尔兰</h1>
                                        <p>一步到位拿永居，先批准后投资，跳板</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.shitonghk.com/yimin/Global/6.html">
                                    <img src="https://cdnimages.familyhomeplans.com/plans/75977/75977-b1200.jpg" alt="美国"/>
                                    <div class="imgInfo">
                                        <h1>美国</h1>
                                        <p>50万美金全家拿美国绿卡，享一流教</p>
                                    </div>
                                </a>
                            </li>
            
                          </ul>
                      </div>
                      <div class="img">
                          <ul class="imgTop imgTop1"> 
                            <li>
                                <a href="http://www.shitonghk.com/yimin/Global/8.html">
                                    <img src="https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg?" alt="希腊"/>
                                    <div class="imgInfo">
                                        <h1>希腊</h1>
                                        <p>更便宜， 25万欧元买房畅行欧洲</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.shitonghk.com/yimin/Global/9.html">
                                    <img src="https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg" alt="西班牙"/>
                                    <div class="imgInfo">
                                        <h1>西班牙</h1>
                                        <p>更宜/移居，50万欧买房遇见西班牙</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.shitonghk.com/yimin/Global/10.html">
                                    <img src="https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg" alt="葡萄牙"/>
                                    <div class="imgInfo">
                                        <h1>葡萄牙</h1>
                                        <p>更方便，50万欧拿永居，无居住要求</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.shitonghk.com/yimin/Global/11.html">
                                    <img src="https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg" alt="圣基茨"/>
                                    <div class="imgInfo">
                                        <h1>圣基茨</h1>
                                        <p>免签加拿大、英国、所有欧盟及申</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.shitonghk.com/yimin/Global/12.html">
                                    <img src="https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg" alt="多米尼克"/>
                                    <div class="imgInfo">
                                        <h1>多米尼克</h1>
                                        <p>免签英国，加拿大，欧盟及申根国等全</p>
                                    </div>
                                </a>
                            </li>
      
                          </ul>
                      </div>
                      <div class="img">
                          <ul class="imgTop imgTop1">
                            <li>
                                <a href="http://www.shitonghk.com/yimin/Global/14.html">
                                    <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="多米尼克"/>
                                    <div class="imgInfo">
                                        <h1>多米尼克</h1>
                                        <p>20万美金全家四代直接拿护照，免签</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.shitonghk.com/yimin/Global/15.html">
                                    <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="圣基茨"/>
                                    <div class="imgInfo">
                                        <h1>圣基茨</h1>
                                        <p>40万美金四代直接拿护照，免签100</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.shitonghk.com/yimin/Global/7.html">
                                    <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="马耳他"/>
                                    <div class="imgInfo">
                                        <h1>马耳他</h1>
                                        <p>免签/落地签160多个国家及地区</p>
                                    </div>
                                </a>
                            </li>
            
                          </ul>
                      </div>
                  </div>
            
            
            
                  
              </div>
        </TabPanel>
        <TabPanel tabId="two">
          <p>Tab 2 content</p>
        </TabPanel>
        <TabPanel tabId="three">
          <p>Tab 3 content</p>
        </TabPanel></div>
      </Tabs>
      </main1>
      
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

export default home;
