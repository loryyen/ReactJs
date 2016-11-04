require('./profile.scss');

var anonymousImg = require('img/anonymous.jpg');

var Profile = React.createClass({
  getInitialState: function() {
    return {
      picture: anonymousImg,
      name: ' '
    };
  },
  componentDidMount: function() {
    FB.api('/me',{fields:['picture','name']},this.profileGet);
  },
  profileGet:function(rs){
    this.setState({
      picture: rs.picture.data.url,
      name: rs.name
    });
  },
  logout:function(){
    FB.api('/me/permissions', 'DELETE', function(){
      window.location.reload();
    });
  },
  render:function(){
    return(
      <div className='profile'>
        <div
          className='picture'
          style={{
            backgroundImage:"url('"+this.state.picture+"')"
          }}
          />

        <div className='name'>
          {this.state.name}
        </div>
        <br/>
        <button onClick={this.logout}>logout</button>
      </div>
    );
  }
});
module.exports = Profile;
