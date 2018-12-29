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
import FloaterEvent from './floaterEvent'
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

   


class Filter extends Component {
  
    
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
              
<div id="main1" class="main1 overflow container1">
 

    
 
  <div class="house-list-show-type">
<div class="fl"><a href="http://www.shitonghk.com/au-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-2-0.html" class="houses_order houses-max">大图显示</a><a href="javascript:;" class="houses_order houses-min houses-on">列表显示</a></div><div class="doic fr"><span>排序方式:</span><a href="http://www.shitonghk.com/au-1-0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0.html" class="">价格</a><a href="http://www.shitonghk.com/au-1-0-0-0-0-0-0-0-0-0-0-0-0-0-3-0-0.html" class="">面积</a></div>  </div>
   
  <div class="house-page-top overflow">
    <ul>
      <li class="house-page-top-txt fl">共有<span>39</span>套符合要求的房源</li>
      <li class="house-page-top-link fl"><a href="http://www.shitonghk.com/au/index.html">&lt;&lt;</a><a href="http://www.shitonghk.com/au/index_2.html">&lt;</a><a href="http://www.shitonghk.com/au/index.html">1</a><a href="http://www.shitonghk.com/au/index_2.html">2</a><a class="page-on">3</a><a href="http://www.shitonghk.com/au/index_4.html">4</a><a href="http://www.shitonghk.com/au/index_4.html">&gt;</a><a href="http://www.shitonghk.com/au/index_4.html">&gt;&gt;</a></li>
    </ul>
  </div>
  <div class="list_content overflow mb10 "> 
    <div class="house_list fl overflow"> <div class="house_list_item overflow"><ul class="house-list-pic">
<li><a href="http://www.shitonghk.com/au/316.html"><img alt="普吉岛高级公寓—the base height" title="普吉岛高级公寓—the base height" src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/products/apple-products-section2-one-holiday-201811?wid=2560&hei=1929&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1540576119930"/></a></li>
        <p class="house-status">在售</p>
</ul>
<ul class="house-list-info">
<li class="house-tit"><h2><a href="http://www.shitonghk.com/au/316.html">普吉岛高级公寓—the base height</a></h2>
<p><span class="blue">配套齐全</span><span class="red">交通便利</span><span class="yellow">风景宜人</span></p></li>
<li class="house-text"><p>开发商：SANSIRI</p>
<p>位置：泰国普吉岛</p>
<p>面积：29 - 53 平方米</p>
<p>价格：0.00 - 0.00 万人民币</p>
<p class="list_text">简介： The Base Height坐落于普吉市黄金地段，为高层住宅公寓，中葡式的建筑风格，摩登豪华设计，从…</p>
<p class="house-link-phone"><a href="http://www.shitonghk.com/au/316.html" class="link">详情查看&gt;&gt;</a>
<span class="phone1">400-688-6160</span></p></li><a href="http://www.shitonghk.com/img/img.php?url=http://www.shitonghk.com/mobile/au/316.html" class="house-phone preview">手机查看</a>
<a target="_self" href="javascript:;" price="0.00" class="list_house_calculator house-ji jisuanqi">贷款计算器</a>
</ul>
</div><div class="house_list_item overflow"><ul class="house-list-pic">
<li><a href="http://www.shitonghk.com/au/315.html"><img alt="金边太子地产" title="金边太子地产" src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/products/apple-products-section2-one-holiday-201811?wid=2560&hei=1929&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1540576119930"/></a></li>
        <p class="house-status">在售</p>
</ul>
<ul class="house-list-info">
<li class="house-tit"><h2><a href="http://www.shitonghk.com/au/315.html">金边太子地产</a></h2>
<p><span class="blue">金融中心</span><span class="red">首都核心区域</span><span class="yellow">发展迅速</span></p></li>
<li class="house-text"><p>开发商：</p>
<p>位置：柬埔寨金边</p>
<p>面积：56 - 175 平方米</p>
<p>价格：0.00 - 0.00 万人民币</p>
<p class="list_text">简介：　作为柬埔寨首都金边地标，太子中央广场位于诺罗敦大道使馆区(首都核心区域中央位置)。…</p>
<p class="house-link-phone"><a href="http://www.shitonghk.com/au/315.html" class="link">详情查看&gt;&gt;</a>
<span class="phone1">400-688-6160</span></p></li><a href="http://www.shitonghk.com/img/img.php?url=http://www.shitonghk.com/mobile/au/315.html" class="house-phone preview">手机查看</a>
<a target="_self" href="javascript:;" price="0.00" class="list_house_calculator house-ji jisuanqi">贷款计算器</a>
</ul>
</div><div class="house_list_item overflow"><ul class="house-list-pic">
<li><a href="http://www.shitonghk.com/au/314.html"><img alt="普吉岛公寓—The base uptown" title="普吉岛公寓—The base uptown" src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/products/apple-products-section2-one-holiday-201811?wid=2560&hei=1929&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1540576119930"/></a></li>
        <p class="house-status">在售</p><p class="house-status2">包租</p>
</ul>
<ul class="house-list-info">
<li class="house-tit"><h2><a href="http://www.shitonghk.com/au/314.html">普吉岛公寓—The base uptown</a></h2>
<p><span class="blue">永久产权</span><span class="red">交通便利</span><span class="yellow">开发迅速</span></p></li>
<li class="house-text"><p>开发商：Sansiri</p>
<p>位置：泰国普吉岛</p>
<p>面积：32 - 57 平方米</p>
<p>价格：0.00 - 0.00 万人民币</p>
<p class="list_text">简介：</p>
<p class="house-link-phone"><a href="http://www.shitonghk.com/au/314.html" class="link">详情查看&gt;&gt;</a>
<span class="phone1">400-688-6160</span></p></li><a href="http://www.shitonghk.com/img/img.php?url=http://www.shitonghk.com/mobile/au/314.html" class="house-phone preview">手机查看</a>
<a target="_self" href="javascript:;" price="0.00" class="list_house_calculator house-ji jisuanqi">贷款计算器</a>
</ul>
</div><div class="house_list_item overflow"><ul class="house-list-pic">
<li><a href="http://www.shitonghk.com/au/313.html"><img alt="普吉岛公寓—The deck" title="普吉岛公寓—The deck" src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/products/apple-products-section3-one-holiday-201811?wid=2560&hei=1437&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1541807113456"/></a></li>
        <p class="house-status">在售</p><p class="house-status2">包租</p>
</ul>
<ul class="house-list-info">
<li class="house-tit"><h2><a href="http://www.shitonghk.com/au/313.html">普吉岛公寓—The deck</a></h2>
<p><span class="blue">配套齐全</span><span class="red">繁华夜景</span><span class="yellow">豪华公寓</span></p></li>
<li class="house-text"><p>开发商：</p>
<p>位置：泰国普吉岛</p>
<p>面积：30 - 79 平方米</p>
<p>价格：0.00 - 0.00 万人民币</p>
<p class="list_text">简介：对于那些向往在普吉芭东最动感和繁华的心脏地带购置物业（房产）的买家而言，The Deck是完美…</p>
<p class="house-link-phone"><a href="http://www.shitonghk.com/au/313.html" class="link">详情查看&gt;&gt;</a>
<span class="phone1">400-688-6160</span></p></li><a href="http://www.shitonghk.com/img/img.php?url=http://www.shitonghk.com/mobile/au/313.html" class="house-phone preview">手机查看</a>
<a target="_self" href="javascript:;" price="0.00" class="list_house_calculator house-ji jisuanqi">贷款计算器</a>
</ul>
</div><div class="house_list_item overflow"><ul class="house-list-pic">
<li><a href="http://www.shitonghk.com/au/312.html"><img alt="泰国清迈公寓—Dcondo Nim" title="泰国清迈公寓—Dcondo Nim" src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/products/apple-products-section3-one-holiday-201811?wid=2560&hei=1437&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1541807113456"/></a></li>
        <p class="house-status">在售</p>
</ul>
<ul class="house-list-info">
<li class="house-tit"><h2><a href="http://www.shitonghk.com/au/312.html">泰国清迈公寓—Dcondo Nim</a></h2>
<p><span class="blue">永久产权</span><span class="red">黄金路段</span><span class="yellow">商业中心</span></p></li>
<li class="house-text"><p>开发商：</p>
<p>位置：泰国清迈</p>
<p>面积：38 - 68 平方米</p>
<p>价格：0.00 - 0.00 万人民币</p>
<p class="list_text">简介：Dcondo Nim 坐落于Super Highway 路，为清迈商业中心区的黄金地段。经由私人走道只需步…</p>
<p class="house-link-phone"><a href="http://www.shitonghk.com/au/312.html" class="link">详情查看&gt;&gt;</a>
<span class="phone1">400-688-6160</span></p></li><a href="http://www.shitonghk.com/img/img.php?url=http://www.shitonghk.com/mobile/au/312.html" class="house-phone preview">手机查看</a>
<a target="_self" href="javascript:;" price="0.00" class="list_house_calculator house-ji jisuanqi">贷款计算器</a>
</ul>
</div><div class="house_list_item overflow"><ul class="house-list-pic">
<li><a href="http://www.shitonghk.com/au/321.html"><img alt="吉隆坡Le-Nouvel嘉峰名邸" title="吉隆坡Le-Nouvel嘉峰名邸" src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/products/apple-products-section3-one-holiday-201811?wid=2560&hei=1437&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1541807113456"/></a></li>
        <p class="house-status">在售</p>
</ul>
<ul class="house-list-info">
<li class="house-tit"><h2><a href="http://www.shitonghk.com/au/321.html">吉隆坡Le-Nouvel嘉峰名邸</a></h2>
<p><span class="blue">金融中心</span><span class="red">交通便利</span></p></li>
<li class="house-text"><p>开发商：</p>
<p>位置：马来西亚吉隆坡</p>
<p>面积：160 - 279 平方米</p>
<p>价格：0.00 - 0.00 万人民币</p>
<p class="list_text">简介：Le-Nouvel（嘉峰名邸）是新加坡开发商亚洲永泰在吉隆坡双子塔正对面的2栋住宅，地理位置在双…</p>
<p class="house-link-phone"><a href="http://www.shitonghk.com/au/321.html" class="link">详情查看&gt;&gt;</a>
<span class="phone1">400-688-6160</span></p></li><a href="http://www.shitonghk.com/img/img.php?url=http://www.shitonghk.com/mobile/au/321.html" class="house-phone preview">手机查看</a>
<a target="_self" href="javascript:;" price="0.00" class="list_house_calculator house-ji jisuanqi">贷款计算器</a>
</ul>
</div><div class="house_list_item overflow"><ul class="house-list-pic">
<li><a href="http://www.shitonghk.com/au/311.html"><img alt="麦哲伦双子公寓" title="麦哲伦双子公寓" src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/products/apple-products-section2-one-holiday-201811?wid=2560&hei=1929&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1540576119930"/></a></li>
        <p class="house-status">在售</p><p class="house-status2">包租</p>
</ul>
<ul class="house-list-info">
<li class="house-tit"><h2><a href="http://www.shitonghk.com/au/311.html">麦哲伦双子公寓</a></h2>
<p><span class="blue">金融商业中心</span><span class="red">富人区</span><span class="yellow">高档学府</span></p></li>
<li class="house-text"><p>开发商：Macly Equity Sdn Bhd</p>
<p>位置：马来西亚吉隆坡</p>
<p>面积：73 - 92 平方米</p>
<p>价格：0.00 - 0.00 万人民币</p>
<p class="list_text">简介：大马的金融中心，商业中心，跨国集团世界500强等集中于此。 满家乐-吉隆坡富人区，拥有知名…</p>
<p class="house-link-phone"><a href="http://www.shitonghk.com/au/311.html" class="link">详情查看&gt;&gt;</a>
<span class="phone1">400-688-6160</span></p></li><a href="http://www.shitonghk.com/img/img.php?url=http://www.shitonghk.com/mobile/au/311.html" class="house-phone preview">手机查看</a>
<a target="_self" href="javascript:;" price="0.00" class="list_house_calculator house-ji jisuanqi">贷款计算器</a>
</ul>
</div><div class="house_list_item overflow"><ul class="house-list-pic">
<li><a href="http://www.shitonghk.com/au/310.html"><img alt="曼谷精品公寓—the line 101" title="曼谷精品公寓—the line 101" src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/products/apple-products-section2-one-holiday-201811?wid=2560&hei=1929&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1540576119930"/></a></li>
        <p class="house-status">在售</p>
</ul>
<ul class="house-list-info">
<li class="house-tit"><h2><a href="http://www.shitonghk.com/au/310.html">曼谷精品公寓—the line 101</a></h2>
<p><span class="blue">永久产权</span><span class="red">豪华公寓</span><span class="yellow">一览首都风格</span></p></li>
<li class="house-text"><p>开发商：Sansiri（上思睿）</p>
<p>位置：</p>
<p>面积：27 - 63 平方米</p>
<p>价格：0.00 - 0.00 万人民币</p>
<p class="list_text">简介：1---绝佳位置
 
The Line Sukhumvit 101公寓距离天铁站Punnawithi站250米，仅一步之遥！6…</p>
<p class="house-link-phone"><a href="http://www.shitonghk.com/au/310.html" class="link">详情查看&gt;&gt;</a>
<span class="phone1">400-688-6160</span></p></li><a href="http://www.shitonghk.com/img/img.php?url=http://www.shitonghk.com/mobile/au/310.html" class="house-phone preview">手机查看</a>
<a target="_self" href="javascript:;" price="0.00" class="list_house_calculator house-ji jisuanqi">贷款计算器</a>
</ul>
</div><div class="house_list_item overflow"><ul class="house-list-pic">
<li><a href="http://www.shitonghk.com/au/309.html"><img alt="曼谷江景公寓—the key" title="曼谷江景公寓—the key" src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/products/apple-products-section3-one-holiday-201811?wid=2560&hei=1437&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1541807113456"/></a></li>
        <p class="house-status">在售</p>
</ul>
<ul class="house-list-info">
<li class="house-tit"><h2><a href="http://www.shitonghk.com/au/309.html">曼谷江景公寓—the key</a></h2>
<p><span class="blue">金融中心</span><span class="red">首都核心地带</span><span class="yellow">超强江景房</span></p></li>
<li class="house-text"><p>开发商：Land and Houses </p>
<p>位置：泰国曼谷Charoenraj路</p>
<p>面积：0 - 0 平方米</p>
<p>价格：75.30 - 0.00 万人民币</p>
<p class="list_text">简介：THE KEY所处的SATHORN CBD是曼谷独一无二的金融使馆区，拥有曼谷最优质的城市资源，他的地…</p>
<p class="house-link-phone"><a href="http://www.shitonghk.com/au/309.html" class="link">详情查看&gt;&gt;</a>
<span class="phone1">400-688-6160</span></p></li><a href="http://www.shitonghk.com/img/img.php?url=http://www.shitonghk.com/mobile/au/309.html" class="house-phone preview">手机查看</a>
<a target="_self" href="javascript:;" price="75.30" class="list_house_calculator house-ji jisuanqi">贷款计算器</a>
</ul>
</div><div class="house_list_item overflow"><ul class="house-list-pic">
<li><a href="http://www.shitonghk.com/au/308.html"><img alt="曼谷高档公寓—the rich nana" title="曼谷高档公寓—the rich nana" src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/products/apple-products-section3-one-holiday-201811?wid=2560&hei=1437&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1541807113456"/></a></li>
        <p class="house-status">在售</p><p class="house-status2">包租</p>
</ul>
<ul class="house-list-info">
<li class="house-tit"><h2><a href="http://www.shitonghk.com/au/308.html">曼谷高档公寓—the rich nana</a></h2>
<p><span class="blue">永久产权</span><span class="red">黄金地段</span><span class="yellow">首都中心</span></p></li>
<li class="house-text"><p>开发商：Richy</p>
<p>位置：泰国曼谷SUKHUNMVIT大道</p>
<p>面积：34 - 89 平方米</p>
<p>价格：165.00 - 387.00 万人民币</p>
<p class="list_text">简介：1、曼谷黄金主干道上的中心五站汇集了曼谷最为核心的商业旅游娱乐资源，而 Rich Nana所…</p>
<p class="house-link-phone"><a href="http://www.shitonghk.com/au/308.html" class="link">详情查看&gt;&gt;</a>
<span class="phone1">400-688-6160</span></p></li><a href="http://www.shitonghk.com/img/img.php?url=http://www.shitonghk.com/mobile/au/308.html" class="house-phone preview">手机查看</a>
<a target="_self" href="javascript:;" price="165.00" class="list_house_calculator house-ji jisuanqi">贷款计算器</a>
</ul>
</div> </div>
    <div class="housebar fr">
      <div>
        <div class="ger">
          <h3>东南亚购房需求登记</h3>
          <p>已有<em>24871</em>人在此登记
            您希望获得专业的东南亚投资建议
            请填写您的需求，我们会尽快联系您！<span class="xuline"></span></p>
        </div>
        <div class="gep">
          <form class="baogao_form" action="../feedback/feedback_ajax1.php" method="post">
            <table>
              <tbody>
                <tr>
                  <td><select name="demand[city]" id="city">
                      <option selected="selected">意向国家</option>
                      <option value="马来西亚">马来西亚</option>
                      <option value="泰国">泰国</option>
                      <option value="柬埔寨">柬埔寨</option>
                    </select></td>
                  <td><select name="demand[mudi]" id="mudi">
                      <option selected="selected">投资目的</option>
                      <option value="投资置业">投资置业</option>
                      <option value="度假旅游">度假旅游</option>
                      <option value="养老医疗">养老医疗</option>
                    </select></td>
                </tr>
                <tr>
                  <td><select name="demand[type]" id="type">
                      <option selected="selected">投资类型</option>
                      <option value="公寓">公寓</option>
                      <option value="别墅">别墅</option>
                      <option value="学区房">学区房</option>
                      <option value="商业">商业</option>
                      <option value="酒庄">酒庄</option>
                      <option value="农场">农场</option>
                    </select></td>
                  <td><select name="demand[shoufu]" id="shoufu">
                      <option selected="selected">预算首付</option>
                      <option value="100万以内人民币">100万以内人民币</option>
                      <option value=" 100-200万人民币"> 100-200万人民币</option>
                      <option value="200万以上人民币">200万以上人民币</option>
                    </select></td>
                </tr>
                <tr>
                  <td><input id="pinggu_name" class="input_text" name="pinggu_name" placeholder="* 姓名" type="text"/></td>
                  <td><input id="pinggu_shou" class="input_text" name="pinggu_shou" placeholder="* 手机号码" type="text"/></td>
                </tr>
                <tr>
                  <td colspan="2"><input class="report_btn" value="立即提交" type="button"/>
                    <input id="dizi" name="dizi" value="file:///C:/Users/DELL/Videos/%E4%B8%9C%E5%8D%97%E4%BA%9A%E6%88%BF%E4%BA%A7.htm" type="hidden"/>
                    <input name="type" value="14" type="hidden"/></td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
      <script>document.getElementById("dizi").value = window.location.href;</script><div class="rightBarkist overflow huodonglist">
        <h3> 最新活动 </h3>
        <dl>

  <dt><a href="http://www.shitonghk.com/exhibition/4602.html"><img src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/products/apple-products-section4-one-holiday-201811?wid=2560&hei=1100&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1540576125231"/><span>4.14/4.15，北京|上海|南京|成都，雅居乐天汇四地同开团购大会</span></a></dt> 
    <dd><a class="hd-day" href="http://www.shitonghk.com/exhibition/3377.html"><i>2017.09</i><b>17</b></a> <a class="hd-title" href="http://www.shitonghk.com/exhibition/3377.html">杭州站|柬埔寨房产投资专场峰会—掘金柬埔寨
	地址：杭州市下城区长寿路6号杭州城中</a> <a class="hd-yuding" href="http://www.shitonghk.com/exhibition/3377.html" onclick="javascript:window.open('http://chat56.live800.com/live800/chatClient/chatbox.jsp?companyID=865532&amp;configID=132008&amp;jid=5747855482','','width=880,height=660')">席位有限 提前预定</a> </dd> 
	  <dd><a class="hd-day" href="http://www.shitonghk.com/exhibition/3306.html"><i>2017.06</i><b>06</b></a> <a class="hd-title" href="http://www.shitonghk.com/exhibition/3306.html">北京站|中国海外投资CSR国别风险指数发布
	地址：清华大学经管学院伟伦楼501室（上午）</a> <a class="hd-yuding" href="http://www.shitonghk.com/exhibition/3306.html" onclick="javascript:window.open('http://chat56.live800.com/live800/chatClient/chatbox.jsp?companyID=865532&amp;configID=132008&amp;jid=5747855482','','width=880,height=660')">席位有限 提前预定</a> </dd> 
	  <dd><a class="hd-day" href="http://www.shitonghk.com/exhibition/3307.html"><i>2017.05</i><b>28</b></a> <a class="hd-title" href="http://www.shitonghk.com/exhibition/3307.html">深圳站|相约睿啟会，遇见财富未来 ——全国巡回海外投地址：广东深圳</a> <a class="hd-yuding" href="http://www.shitonghk.com/exhibition/3307.html" onclick="javascript:window.open('http://chat56.live800.com/live800/chatClient/chatbox.jsp?companyID=865532&amp;configID=132008&amp;jid=5747855482','','width=880,height=660')">席位有限 提前预定</a> </dd> 
	  <dd><a class="hd-day" href="http://www.shitonghk.com/exhibition/3309.html"><i>2017.05</i><b>25</b></a> <a class="hd-title" href="http://www.shitonghk.com/exhibition/3309.html">上海站|“聚焦“一带一路”下的海外投资地址：（上海市杨浦区国顺路670号）</a> <a class="hd-yuding" href="http://www.shitonghk.com/exhibition/3309.html" onclick="javascript:window.open('http://chat56.live800.com/live800/chatClient/chatbox.jsp?companyID=865532&amp;configID=132008&amp;jid=5747855482','','width=880,height=660')">席位有限 提前预定</a> </dd> 
	        </dl>
      </div>

<div class="rightBarkist overflow rightBartool">
        <h3>热门房产</h3>
        <ul>
            <li> 
                <a href="http://www.shitonghk.com/au/324.html"><img src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-leather-case-section4-holiday-201811?wid=282&hei=258&fmt=png-alpha&.v=1541625893520"/></a>
                 <a href="http://www.shitonghk.com/au/324.html">金边皇宫区公寓East One</a>
                 <span>面积：45 - 99平米
                  价格：69.00 - 200.00万人民币</span>
            </li>
            <li> 
                <a href="http://www.shitonghk.com/au/280.html"><img src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-leather-case-section4-holiday-201811?wid=282&hei=258&fmt=png-alpha&.v=1541625893520"/></a>
                 <a href="http://www.shitonghk.com/au/280.html">100万买金边“陆家嘴”首选—【钻石双星】</a>
                 <span>面积：46 - 108平米
                  价格：83.00 - 213.00万人民币</span>
            </li>
            <li> 
                <a href="http://www.shitonghk.com/au/331.html"><img src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-leather-case-section4-holiday-201811?wid=282&hei=258&fmt=png-alpha&.v=1541625893520"/></a>
                 <a href="http://www.shitonghk.com/au/331.html">金边·星汇城Star City：10万美金首选项目</a>
                 <span>面积：51 - 90平米
                  价格：64.00 - 110.00万人民币</span>
            </li>
            <li> 
                <a href="http://www.shitonghk.com/au/335.html"><img src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/pro/ipad-pro-section3-holiday-201811?wid=282&hei=258&fmt=png-alpha&.v=1540675005814"/></a>
                 <a href="http://www.shitonghk.com/au/335.html">富力地产金边首发项目 总投资7亿美金</a>
                 <span>面积：55 - 134平米
                  价格：77.00 - 188.00万人民币</span>
            </li>

        </ul>
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

  </div>

  <div class="list-datu-content displaynone">
    <dl>

    </dl>
  </div>

  <div class="house-page clear overflow">
    <ul>
      <li class="house-page-top-txt fl">共有<span>39</span>套符合要求的房源</li>
      <li class="house-page-top-link fl midalign"><a href="http://www.shitonghk.com/au/index.html">&lt;&lt;</a><a href="http://www.shitonghk.com/au/index_2.html">&lt;</a><a href="http://www.shitonghk.com/au/index.html">1</a><a href="http://www.shitonghk.com/au/index_2.html">2</a><a class="page-on">3</a><a href="http://www.shitonghk.com/au/index_4.html">4</a><a href="http://www.shitonghk.com/au/index_4.html">&gt;</a><a href="http://www.shitonghk.com/au/index_4.html">&gt;&gt;</a></li>
    </ul>
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

export default Filter;
