require('./app.scss');

var Content = require('./Content.jsx');
var Menu = require('./Menu.jsx');

var App = React.createClass({
  getInitialState: function() {
    return {
      currentPage: 0,
      pages: [{
        title:'Targaryen',
        content:'Fire and Blood'
      },{
        title:'Greyjoy',
        content:'We Do Not Sow'
      },{
        title:'Stark',
        content:'Winter is Coming'
      },{
        title:'Lannister',
        content:'Hear Me Roar!'
      }]
    };
  },
  setPage:function(idx){
    this.setState({currentPage:idx});
  },
  render: function() {
    return (
      <div className='app'>
        <Content content={this.state.pages[this.state.currentPage].content}/>
        <Menu setPage={this.setPage} {...this.state}/>
      </div>
    );
  }
});
module.exports = App;
