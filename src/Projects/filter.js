import React, { Component } from "react";
import Slider from '../slider.js';
import '../build/horizontal.css';
import '../skin/slider-animations.css';
import Drawer from "../lib/drawer.jsx";
import FloatGroup from 'react-float-button';
import "../skin/global.css";
import "../skin/invite.css";
import "../skin/mini.css";
import '../skin/scss/style.css';
import Headerfilter from './headerfilter'
import superagent from 'superagent';
import Flooter from './flooter'
import $ from 'jquery';
import FloaterEvent from './floaterEvent'
import Inquirey from './inquirey';
import Rightnav from './rightnav';
import objects from 'objects';
//import { ReactSlackChat } from 'react-slack-chat';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import Modal from 'react-awesome-modal'
import { Button,CardBody, h1, p, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Row } from 'reactstrap';
//import Drawer from 'react-motion-drawer';
import imagehigh from "../skin/Images/order-interface-symbol-with-down-arrow(1).png";
import imagenotavaiable from "../skin/Images/no_photo_available.gif";

import "../skin/style2.css";
import "../skin/reset.css";
const items = [
  {


    src: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
    altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
  },
  {
    src: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
    altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
  },
  {
    src: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
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
    this.handleClick = this.handleClick.bind(this);
    this.btnDecrementClick = this.btnDecrementClick.bind(this);
    this.btnIncrementClick = this.btnIncrementClick.bind(this);
    this.btnNextClick = this.btnNextClick.bind(this);
    this.btnPrevClick = this.btnPrevClick.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);


  }
  state = {
    data: [

    ],
    todos: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    currentPage: 1,
    country_id: '',
    end_price: '',
    project_type_id: '',
    rent_or_buy: "",
    room_amount: '',
    sort: "",
    start_price: '',
    title: "",
    todosPerPage: 10,
    upperPageBound: 4,
    lowerPageBound: 0,
    isPrevBtnActive: 'disabled',
    isNextBtnActive: '',
    totalItem: '',
    totalPage: '',
    projectfilter: [],
    option_types: [],
    pageBound: 4,
    visible: false,
    editIdx: -1,
    projectalllist: [],
    columnToSort: "",
    sortDirection: "desc",
    count: 10,
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
      visible: true
    });
  }
  handleSubmit(e) {
    sessionStorage.setItem("country_id", this.state.country_id);
    sessionStorage.setItem("country_name", this.state.country_name);
    sessionStorage.setItem("end_price", this.state.end_price);
    sessionStorage.setItem("project_type_id", this.state.project_type_id);
    sessionStorage.setItem("rent_or_buy", this.state.rent_or_buy);
    sessionStorage.setItem("room_amount", this.state.room_amount);
    sessionStorage.setItem("sort", this.state.sort);
    sessionStorage.setItem("start_price", this.state.start_price);
    sessionStorage.setItem("title", this.state.title);
    this.componentDidMount()
  }
  closeModal() {
    this.setState({
      visible: false
    });
  }
  filerhigh() {
    sessionStorage.setItem("sort", 'phtl');
    this.componentDidMount()
  }
  filerlow() {
    sessionStorage.setItem("sort", 'plth');
    this.componentDidMount()
  }
  componentWillUpdate() {
    // 
  }
  componentDidUpdate() {

    $("ul li.active").removeClass('active');
    $('ul li#' + this.state.currentPage).addClass('active');

  }
  handleClick = (event) => {
    let listid = Number(event.target.id);
    this.setState(prevState => ({
      currentPage: prevState.currentPage = listid
    }), this.componentDidMount);

    $("ul li.page-on").removeClass('page-on');
    $('ul li#' + listid).addClass('page-on');
    this.setPrevAndNextBtnClass(listid);
  }
  setPrevAndNextBtnClass(listid) {
    let totalPage = this.state.totalPage
    this.setState({ isNextBtnActive: 'disabled' });
    this.setState({ isPrevBtnActive: 'disabled' });
    if (totalPage === listid && totalPage > 1) {
      this.setState({ isPrevBtnActive: '' });
    }
    else if (listid === 1 && totalPage > 1) {
      this.setState({ isNextBtnActive: '' });
    }
    else if (totalPage > 1) {
      this.setState({ isNextBtnActive: '' });
      this.setState({ isPrevBtnActive: '' });
    }
  }
  btnIncrementClick() {
    this.setState({ upperPageBound: this.state.upperPageBound + this.state.pageBound });
    this.setState({ lowerPageBound: this.state.lowerPageBound + this.state.pageBound });
    let listid = this.state.upperPageBound + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnDecrementClick() {
    this.setState({ upperPageBound: this.state.upperPageBound - this.state.pageBound });
    this.setState({ lowerPageBound: this.state.lowerPageBound - this.state.pageBound });
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnPrevClick() {
    if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      this.setState({ upperPageBound: this.state.upperPageBound - this.state.pageBound });
      this.setState({ lowerPageBound: this.state.lowerPageBound - this.state.pageBound });
    }
    let listid = this.state.currentPage - 1;
    this.setState({ currentPage: listid }, this.componentDidMount);
    this.setPrevAndNextBtnClass(listid);
  }
  btnNextClick() {
    if ((this.state.currentPage + 1) > this.state.upperPageBound) {
      this.setState({ upperPageBound: this.state.upperPageBound + this.state.pageBound });
      this.setState({ lowerPageBound: this.state.lowerPageBound + this.state.pageBound });
    }
    let listid = this.state.currentPage + 1;
    this.setState({ currentPage: listid }, this.componentDidMount);
    this.setPrevAndNextBtnClass(listid);
  }
  searchTitl = (event) => {
    this.setState({ title: event.target.value })
  }
  countrychange = (event) => {
    this.setState({ country_id: event.target.value })

    console.log(event.target.value);
    let cId = event.target.value;
    if(cId ==0) {
      this.setState({ option_types: [] });
    } else {
      this.state.projectfilter.map((country) => {
        console.log(country)
        if (country.country_id == cId) {
          this.setState({ option_types: country.types });
        }
      });
      console.log(this.state.option_types);
    }
    
  }
  projecttypeidchange = (event) => {
    this.setState({ project_type_id: event.target.value })
  }
  rentorbuychange = (event) => {
    this.setState({ rent_or_buy: event.target.value })
  }
  roomchange = (event) => {
    this.setState({ room_amount: event.target.value })
  }


  shortchange = (event) => {
    this.setState({ sort: event.target.value })
  }
  startpricechange = (event) => {
    this.setState({ start_price: event.target.value })
  }
  endpricechange = (event) => {
    this.setState({ end_price: event.target.value })
  }
  closeModal() {
    this.setState({
      visible: false
    });
  }

  createSelectItems() {
    let test = this.state.projectfilter.map((typetep) => {
      let cId = this.state.country_id
      this.state.projectfilter.map((country) => {
        if (country.country_id == cId) {
          country.types.map((type) => {
            return (
              <option value={type.id}>{type.type}</option>
            );
          })
        }
      });
    });
  }


  componentDidMount() {
    const { searchTerm, todosPerPage, currentPage } = this.state;
    console.log(sessionStorage.getItem("country_id"))
    superagent
    .get(`https://century21api.herokuapp.com/api/type-country-project`)
    //  .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
    // .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
    //.set('Authorization', 'Bearer perm: {this.getAuthenticationToken}
    // .send({ country_id: sessionStorage.getItem("country_id"), project_type_id: sessionStorage.getItem("project_type_id"),end_price:sessionStorage.getItem("end_price"),rent_or_buy:sessionStorage.getItem("end_price"),room_amount:sessionStorage.getItem("room_amount"),sort:sessionStorage.getItem("sort"), start_price:sessionStorage.getItem("start_price"),title: sessionStorage.getItem("title") })

    .end((err, res) => {
      if (err) { this.setState({ errorMessage: 'Cannot retrieve data form server' }); return; }

      this.setState({
        projectfilter: res.body.result

      });
    });
    superagent
      .post(`https://century21api.herokuapp.com/api/search?limit=${todosPerPage}&page=${currentPage}`)
      //  .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
      // .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      //.set('Authorization', 'Bearer perm: {this.getAuthenticationToken}
      .send({ country_id: sessionStorage.getItem("country_id"), project_type_id: sessionStorage.getItem("project_type_id"), end_price: sessionStorage.getItem("end_price"), rent_or_buy: sessionStorage.getItem("rent_or_buy"), room_amount: sessionStorage.getItem("room_amount"), sort: sessionStorage.getItem("sort"), start_price: sessionStorage.getItem("start_price"), title: sessionStorage.getItem("title") })

      .end((err, res) => {
        if (err) { this.setState({ errorMessage: 'Cannot retrieve data form server' }); return; }

        this.setState({
          projectalllist: res.body.result,
          currentPage: res.body.paging.page,
          todosPerPage: res.body.paging.limit,
          totalPage: res.body.paging.total_page,
          totalItem: res.body.paging.total_item,

        });
      });
      window.scrollTo(500, 500);
  }
  setDrawerStyle = e => {
    e.preventDefault()
    this.setState({
      drawerStyle: this.drawerStyleRef.value
    })
  }
  render() {

    const { projectalllist, currentPage, todosPerPage, upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive } = this.state;
    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = projectalllist.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = projectalllist.map((todo) => {
      let listphoto = null;
      if (todo.thumbnail == null) {
        listphoto = <li><a href={`#/${todo.id}`}><img alt="" title="普吉岛高级公寓—the base height" src={imagenotavaiable} /></a></li>

      } else {
        listphoto = <li><a href={`#/${todo.id}`}><img alt="" title="普吉岛高级公寓—the base height" src={todo.thumbnail} onError={(e) => { e.target.onerror = null; e.target.src = imagenotavaiable }} /></a></li>

      }
      return (
        <div class="house_list_item overflow"  ><ul class="house-list-pic">
          {listphoto}        <p class="house-status">Sale</p>
        </ul>
          <ul class="house-list-info">
            <li key={todo.id} class="house-tit"><h2><a href={`/${todo.id}`}>{todo.name}</a></h2>
              <p><span class="blue">Min : {todo.start_price} $</span><span class="red">交通便利</span><span class="yellow">Max : {todo.end_price} $</span></p></li>
            <li class="house-text"><p>Country：{todo.country.toUpperCase()}</p>
              <p>Project Type：{todo.project_type.charAt(0).toUpperCase() + todo.project_type.slice(1)}</p>
              <p>GRR：{todo.grr}</p>
              <p class="list_text">Description：  provide the following details to the applicants: the problem the project will address, a set of goals for the project, the overall objectives for the project, as well as a project plan that describes the activities the members will undertake.</p>
              <p class="house-link-phone"><a href={`#/${todo.id}`} class="link">Detail&gt;&gt;</a>
                <span class="phone1">400-688-6160</span></p></li>

          </ul>
        </div>);
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.state.totalPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      if (number === currentPage) {
        return (
          <a href='#/search' class="page-on" key={number} id={number} onClick={this.handleClick}>{number}</a>

        )
      }
      else if ((number < upperPageBound + 1) && number > lowerPageBound) {
        return (
          <a href='#/search' key={number} id={number} onClick={this.handleClick}>{number}</a>
        )
      }
    });
    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
      pageIncrementBtn = <a href='#/search' onClick={this.btnIncrementClick}> &hellip; </a>
    }
    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      pageDecrementBtn = <a href='#/search' onClick={this.btnDecrementClick}> &hellip; </a>
    }
    let renderPrevBtn = null;
    if (isPrevBtnActive === 'disabled') {
      renderPrevBtn = <span className={isPrevBtnActive}> &lt;&lt; </span>
    }
    else {
      renderPrevBtn = <a href='#/search' className={isPrevBtnActive} onClick={this.btnPrevClick}> &lt;&lt; </a>
    }
    let renderNextBtn = null;
    if (isNextBtnActive === 'disabled') {
      renderNextBtn = <span className={isNextBtnActive}> &gt;&gt; </span>
    }
    else {
      renderNextBtn = <a href='#/search' className={isNextBtnActive} onClick={this.btnNextClick}> &gt;&gt; </a>
      // <li class="house-page-top-link fl midalign"><a href="http://www.shitonghk.com/au/index.html">&lt;&lt;</a><a href="http://www.shitonghk.com/au/index_2.html">&lt;</a><a href="http://www.shitonghk.com/au/index.html">1</a><a href="http://www.shitonghk.com/au/index_2.html">2</a><a class="page-on">3</a><a href="http://www.shitonghk.com/au/index_4.html">4</a><a href="http://www.shitonghk.com/au/index_4.html">&gt;</a><a href="http://www.shitonghk.com/au/index_4.html">&gt;&gt;</a></li>


    }


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

          <Headerfilter />



          <div class="clear"></div>
          <div class="main1" >
            <div class="banner">
              <div class="flexslider">
            
                <ul class="slides">

 
            <div class="vip-dingzhi clear overflow mb20">
              <dl>
                <dt class="vip-title">If you don't have the right project, you can customize it!</dt>
              </dl>
              <dl class="xuqiu-liu">
                <dd>Region</dd>

                <dd>Categories</dd>
                <dd>Type</dd>
                <dd>Room</dd>
                <dd>Short</dd>
                <dd></dd>
              </dl>

              <dl class="vip-select">

                <select id="Region" value={this.state.country_id} onChange={this.countrychange.bind(this)}>
                  <option value="0" style={{ Color: '#fff' }} >Region ...</option>
                  {this.state.projectfilter.map((typetep) => {

                    return (
                      <option value={typetep.country_id}>{typetep.country_name}</option>
                    );
                  })}
                </select>

                <select id="Categories" value={this.state.project_type_id} onChange={this.projecttypeidchange.bind(this)}>
                  <option value="0">Categories ...</option>

                  {this.state.option_types.map((type) => {

                    return (
                      <option value={type.id}>{type.type}</option>
                    );
                  })}

                </select>

                <select id="Type" value={this.state.rent_or_buy} onChange={this.rentorbuychange.bind(this)}>
                  <option value=" ">Type ...</option>
                  <option value="rent">Rent</option>
                  <option value="buy">Buy</option>

                </select>
                <select id="Room" value={this.state.room_amount} onChange={this.roomchange.bind(this)}>
                  <option value="">Room ...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="else">Else</option>
                </select>
                <select id="Short" value={this.state.sort} onChange={this.shortchange.bind(this)}>
                  <option value="">Short ...</option>

                  <option value="phtl">Price high to low</option>
                  <option value="plth">Price low to high</option>
                  <option value="grr">GRR</option>

                </select>
                <span>√（Required）</span>
              </dl>


              <dl class="vip-xuqiu">
                <dt>
                 <button class="tj-xuqiu" type="submit" onClick={this.handleSubmit.bind(this)} >Search</button>
                </dt>
                <dd>
                  <input class="vip-name" name="" id="" placeholder="必填" size="" value={this.state.start_price} onChange={this.startpricechange.bind(this)} />
                </dd>
                <dd>
                  <input class="vip-tel" name="" id="" placeholder="必填" size="" value={this.state.end_price} onChange={this.endpricechange.bind(this)} />
                </dd>
                <dd>
                  <textarea class="vip-text" name="" id="" value={this.state.title} onChange={this.searchTitl.bind(this)}></textarea>
                </dd>
              </dl>
            </div>
        
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
                <div class="fl"><a class="houses_order houses-max">{sessionStorage.getItem("country_id")}</a><a class="houses_order houses-max">{sessionStorage.getItem("project_type_id")}</a></div><div class="doic fr"><span>Short Price:</span><a href="#/Search" onClick={this.filerhigh.bind(this)} class=""> Hight</a><a href="#/Search" onClick={this.filerlow.bind(this)} class=""> Low</a></div>  </div>

              <div class="house-page-top overflow">



                <ul >
                  <li class="house-page-top-txt fl">Total: <span>{this.state.totalItem}</span>items</li>
                  <li class="house-page-top-link fl midalign"> {renderPrevBtn}
                    {pageDecrementBtn}
                    {renderPageNumbers}
                    {pageIncrementBtn}
                    {renderNextBtn}</li>
                </ul>


              </div>

              <div class="list_content overflow mb10 ">
                <div class="house_list fl overflow">
                  <ul>
                    {renderTodos}
                  </ul>

                </div>
          
<Rightnav/>
              </div>

              <div class="list-datu-content displaynone">
                <dl>

                </dl>
              </div>

              <div class="house-page clear overflow">
                <ul >
                  <li class="house-page-top-txt fl">Total: <span>{this.state.totalItem}</span>items</li>
                  <li class="house-page-top-link fl midalign"> {renderPrevBtn}
                    {pageDecrementBtn}
                    {renderPageNumbers}
                    {pageIncrementBtn}
                    {renderNextBtn}</li>
                </ul>
              </div>



              <div class="fline"></div>


              <FloaterEvent />


            </div>


          </div>
          <div class="foot_popup_up foot_popup_up_small" style={{ display: 'block', opacity: '1', left: '0px' }}> </div>
          <div class="foot_popup" style={{ display: 'block', opacity: '1', left: '-100%' }}>
            <div class="foot_popup_bg" style={{ backgroundimage: 'url(http://www.shitonghk.com//public/pc/Picture/guanggao.png)' }}></div>
            <div class="foot_popup_con">
              <form class="foot_popup_huidian" method="post" action="/feedback/feedback_ajax.php">
                <dl class="mfth" >
                  <dd>
                    <input class="text m_text1 placehold" type="text" placehold="输入您的手机号" name="mycall" value="输入您的手机号" />
                    <input class="code_btn1" type="button" id="amaya2" value="点击免费通话" />
                  </dd>
                </dl>
              </form>
              <form class="foot_popup_form" method="post" action="/feedback/feedback_ajax.php">
                <dl class="popup_form">
                  <dt style={{ marginTop: '0', fontSize: '14px' }}>领取价值<em style={{ fontSize: '22px', color: '#F4C403' }}>6600</em>元的东南亚房产投资报告</dt>
                  <dd style={{ marginTop: '5px' }}>
                    <label>姓名：</label>
                    <input class="text n_text placehold" type="text" placehold="输入姓名" name="title" value="输入姓名" />
                    <div class="popup_error">请输入姓名</div>
                  </dd>
                  <dd>
                    <label>手机：</label>
                    <input class="text m_text placehold" type="text" placehold="输入手机号" name="mycall" value="输入手机号" />
                    <div class="popup_error">请输入手机号</div>
                  </dd>
                  <dd>
                    <label>邮箱：</label>
                    <input class="text e_text placehold" type="text" placehold="输入邮箱" name="email" value="输入邮箱" />
                    <div class="popup_error">输入邮箱</div>
                  </dd>
                  <dd class="no_bg" style={{ marginTop: '5px' }}>
                    <input class="code_btn" type="button" id="amaya" value="确认发送" />
                  </dd>
                </dl>
              </form>
              <span class="foot_popup_close">关闭</span> </div>
          </div>
          <Flooter />
<Inquirey/>
        </body>
      
      </html>
    );

  }

}

export default Filter;
