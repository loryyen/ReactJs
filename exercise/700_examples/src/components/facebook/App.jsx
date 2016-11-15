require('./app.scss');

var Login = require('./Login.jsx');
var Profile = require('./Profile.jsx');

var loadingImg = require('img/fb-loading.gif');

var App = React.createClass({
  // code here...
  // appid: 1743219825918021
  getInitialState:function(){
      return {
        loading:true,
        connected:false
      };
  },
  componentWillMount:function(){
    FB.init({
      appId:"1743219825918021",
      xfbml:false,
      version:"v2.6"
    });
  },
  componentDidMount:function(){
    FB.getLoginStatus(this.loginStatus);
  },
  login:function(){
    this.setState({loading:true});
    FB.login(this.loginStatus);
  },
  loginStatus:function(res){
    if(res.status === "connected"){
      this.setState({loading:false,connected:true});
    }else{
      this.setState({loading:false,connected:false});
    }
  },
  render:function(){
    // code here...
    var content;
    if(this.state.loading){
      content=<img className="loading" src={loadingImg}></img>
    }else if (this.state.connected) {
      content=<Profile/>
    }
    else{
      content=<Login login={this.login}></Login>
    }
    return(
      <div className='app'>
        {content}
      </div>
    );

  }
});
module.exports = App;
