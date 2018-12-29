import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Progress } from 'reactstrap';
import WxLogin from 'wxlogin.react';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {PostData} from './PostData';
import {Redirect} from 'react-router-dom';
//import App1 from './component.jsx'
//import ReactSummernote from './Summernote';

import { render } from 'react-dom'
// Import bootstrap(v3 or v4) dependencies
//import ReactSummernote from "react-summernote4";
import ReactSummernote from './Summernote';
//import 'react-summernote/dist/react-summernote.css';//import 'react-summernote/lang/summernote-ru-RU'; // you can import any other locale
//import 'react-summernote/lang/summernote-ru-RU'; // you can import any other locale

import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tooltip';
import FineUploaderTraditional from 'fine-uploader-wrappers'
import Gallery from 'react-fine-uploader'
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
// ...or load this specific CSS file using a <link> tag in your document
import 'react-fine-uploader/gallery/gallery.css'

const uploader = new FineUploaderTraditional({
  options: {
      chunking: {
          enabled: true
      },
      deleteFile: {
          enabled: true,
          endpoint: '/uploads'
      },
      request: {
          endpoint: '/uploads'
      },
      retry: {
          enableAuto: true
      }
  }
})
//import 'bootstrap/dist/css/bootstrap.css';
class ProgressBar extends Component {
  
  onChange(content) {
    console.log('onChange', content);
  }
  onImageUpload(images, insertImage) {

    console.log('onImageUpload', images);
    /* FileList does not support ordinary array methods */
    for (let i = 0; i < images.length; i++) {
        /* Stores as bas64enc string in the text.
         * Should potentially be stored separately and include just the url
         */
        const reader = new FileReader();

        reader.onloadend = () => {
            insertImage(reader.result);
        };

        reader.readAsDataURL(images[i]);
    }
};
constructor(props) {
  super(props);
     this.state = {
     loginError: false,
     redirect: false
};
this.signup = this.signup.bind(this);
}

signup(res, type) {
   let postData;
   if (type === 'facebook' && res.email) {
   postData = {
        name: res.name,
        provider: type,
        email: res.email,
        provider_id: res.id,
        token: res.accessToken,
        provider_pic: res.picture.data.url
   };
  }

  if (type === 'google' && res.w3.U3) {
  postData = {
    name: res.w3.ig,
    provider: type,
    email: res.w3.U3,
    provider_id: res.El,
    token: res.Zi.access_token,
    provider_pic: res.w3.Paa
  };
}

if (postData ,res) {
PostData('signup', postData).then((result) => {
 let responseJson = result;
 sessionStorage.setItem("userData1", JSON.stringify(responseJson));
 sessionStorage.setItem('userData', res.name);
 sessionStorage.setItem('userData2', res.picture.data.url);
 this.setState({redirect: true});
});
} else {}
}


  render() {
    
    if (this.state.redirect || sessionStorage.getItem('userData')||sessionStorage.getItem('userData3')) {
      return (<Redirect to={'/base/paginations'}/>)
  }
  
  const responseFacebook = (response) => {
      console.log("facebook console");
      console.log(response,'facebook');
      this.signup(response, 'facebook');
  }
  
  const responseGoogle = (response) => {
      console.log("google console");
      console.log(response,'google');
      this.signup(response, 'google');
  }
    return (
      <div className="animated fadeIn">
      
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i><strong>Progress</strong>
            <div className="card-header-actions">
              <a href="https://reactstrap.github.io/components/progress/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
          <Gallery uploader={ uploader } />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i><strong>Progress</strong>
            <small> color variants</small>
          </CardHeader>
          <CardBody>
            <Progress value={2 * 5} className="mb-3" />
            <Progress color="success" value="25" className="mb-3" />
            <Progress color="info" value={50} className="mb-3" />
            <Progress color="warning" value={75} className="mb-3" />
            <Progress color="danger" value="100" className="mb-3" />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i><strong>Progress</strong>
            <small> labels</small>
          </CardHeader>
          <CardBody>
          <script src="http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js" />
		  <div id='wechatLogin'> test</div>
          <WxLogin
  option={{
    appid: 'wx05114bbd65818e30',
    scope: 'snsapi_login',
    state: 'smartstudy',
    
    userServiceAPI: 'https://api.smartstudy.com/usert/third/oauth?',
    userServiceParams: {
     
      from: 'pc',
      group: 'B',
      flag: 'signin',
      type: 'weixin',
      env: 'development',
      accountId: undefined,
    },
    smartRedirect: window.location.host,
  }}
  style={{
    width: '300px',
    height: '400px',
  }}
  
/>
          <FacebookLogin
appId="2183904704954204"
autoLoad={false}
fields="name,email,picture"
callback={responseFacebook}/>
<br/><br/>

<GoogleLogin
clientId="515126591299-obgo8m1n28nnbtrlhacpdlng69scnhil.apps.googleusercontent.com"
buttonText="Login with Google"
onSuccess={responseGoogle}
onFailure={responseGoogle}/>


          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i><strong>Progress</strong>
            <small> striped</small>
          </CardHeader>
          <CardBody>
          <FilePond allowMultiple={true} server="http://192.168.33.10"/>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i><strong>Progress</strong>
            <small> animated</small>
          </CardHeader>
          <CardBody>
          <ReactSummernote
        value=""
        options={{
          lang: 'ru-RU',
          height: 350,
          dialogsInBody: true,
          toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['fontname', ['fontname']],
            ['color', ['color']],
            ['height', ['height']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture','doc', 'video']],
            ['view', ['fullscreen', 'codeview']],
            ['help', ['help']]
          ]
        }}
        onChange={this.onChange}
        onImageUpload={this.onImageUpload}
      />
      
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i><strong>Progress</strong>
            <small> multiple bars / stacked</small>
          </CardHeader>
          <CardBody>
            <div className="text-center">Plain</div>
            <Progress multi>
              <Progress bar value="15" />
              <Progress bar color="success" value="20" />
              <Progress bar color="info" value="25" />
              <Progress bar color="warning" value="20" />
              <Progress bar color="danger" value="15" />
            </Progress>
            <div className="text-center">With Labels</div>
            <Progress multi>
              <Progress bar value="15">Meh</Progress>
              <Progress bar color="success" value="35">Wow!</Progress>
              <Progress bar color="warning" value="25">25%</Progress>
              <Progress bar color="danger" value="25">LOOK OUT!!</Progress>
            </Progress>
            <div className="text-center">Stripes and Animations</div>
            <Progress multi>
              <Progress bar striped value="15">Stripes</Progress>
              <Progress bar animated color="success" value="30">Animated Stripes</Progress>
              <Progress bar color="info" value="25">Plain</Progress>
            </Progress>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i><strong>Progress</strong>
            <small> max value</small>
          </CardHeader>
          <CardBody>
            
            <div className="text-center">1 of 5</div>
            <Progress value="1" max="5" />
            <div className="text-center">50 of 135</div>
            <Progress value={50} max="135" />
            <div className="text-center">75 of 111</div>
            <Progress value={75} max={111} />
            <div className="text-center">463 of 500</div>
            <Progress value="463" max={500} />

            <div className="text-center">Various (40) of 55</div>
            <Progress multi>
              <Progress bar value="5" max={55}>5</Progress>
              <Progress bar color="success" value="15" max={55}>15</Progress>
              <Progress bar color="warning" value="10" max={55}>10</Progress>
              <Progress bar color="danger" value="10" max={55}>10</Progress>
            </Progress>
          </CardBody>
        </Card>
      </div>
    )
  }
}

new WxLogin({
  id: "wechatLogin", 
  appid: "config.wechatAppid", 
  scope: "snsapi_login", 
  redirect_uri: "#{Config.api.gicWechat}/base/getUserForWebapp",
  state:"",
  style: "",
  href: ""
 })

export default ProgressBar;