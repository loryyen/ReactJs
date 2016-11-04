require('./myForm.scss');

var MyForm = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      gender: 'male',
      time:{
        morning: false,
        afternoon: false,
        night: false
      },
      comments:''
    };
  },
  setName:function(e){
    this.setState({name:e.target.value});
  },
  setGender:function(e){
    this.setState({gender: e.target.value});
  },
  setTime:function(e){
    var key = e.target.value;
    var checked = e.target.checked;
    this.state.time[key] = checked;
    this.forceUpdate();
  },
  setComments:function(e){
    this.setState({comments:e.target.value});
  },
  onSubmit:function(e){
    e.preventDefault();
    alert(JSON.stringify(this.state,null,'  '));
  },
  render: function() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        <h1>意見回饋表</h1>

        <label>姓名: </label>
        {/* Controlled Component */}
        <input
          type='text'
          placeholder='您的大名'
          value={this.state.name}
          onChange={this.setName}
          />
        <br/>

        <label>電話: </label>
        {/* Uncontrolled Component */}
        <input type='text' placeholder='您的電話' ref='tel'/>
        <br/>

        <label>性別: </label>
        <input
          type='radio'
          name='gender'
          id='radio-male'
          value='male'
          checked={this.state.gender==='male'}
          onChange={this.setGender}
          />
        <label htmlFor='radio-male'>男</label>
        <input
          type='radio'
          name='gender'
          id='radio-femail'
          value='female'
          checked={this.state.gender==='female'}
          onChange={this.setGender}
          />
        <label htmlFor='radio-femail'>女</label>
        <br/>

        <label>聯絡時間: </label>
        <input
          type='checkbox'
          id='check1'
          checked={this.state.time.morning}
          value='morning'
          onChange={this.setTime}
          />
        <label htmlFor='check1'>上午</label>
        <input
          type='checkbox'
          id='check2'
          checked={this.state.time.afternoon}
          value='afternoon'
          onChange={this.setTime}
          />
        <label htmlFor='check2'>下午</label>
        <input
          type='checkbox'
          id='check3'
          checked={this.state.time.night}
          value='night'
          onChange={this.setTime}
          />
        <label htmlFor='check3'>晚上</label>
        <br/>

        <label>您的意見</label>
        <br/>
        <textarea
          value={this.state.comments}
          onChange={this.setComments}
          />

        <input type='submit' value='送出'/>
      </form>
    );
  }
});
module.exports = MyForm;
