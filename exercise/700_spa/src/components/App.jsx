require('./app.scss');

var Menu = require('./Menu.jsx');
var Content = require('./Content.jsx');

var pages = [
  // code here...
  { id:1,title:"產品列表",component:require('scroll/Scroll')},
  { id:2,title:"會員登入",component:require('facebook/Profile')},
  { id:3,title:"連絡我們",component:require('form/MyForm')},
];

var App = React.createClass({
  // code here...
  getInitialState:function(){
    return{page:pages[0]}
  },
  setPage:function(currentPage){
    this.setState({page:currentPage});
  },
  render: function() {
    return (
      <div className='app'>
        {/* code here... */}
        <Menu pages={pages} page={this.state.page} setPage={this.setPage}></Menu>
        <Content page={this.state.page}></Content>
      </div>
    );
  }
});

module.exports = App;
