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
      comments:'',
      image:""
    };
  },
  // code here...
  setName:function(e){
    //e.preventDefault();
    this.setState({name:e.target.value});
  },
  setGender:function(e){
    this.setState({gender:e.target.value});
  },
  setTime:function(e){
    var key=e.target.value;
    var checked=e.target.checked;
    this.state.time[key]=checked;
    this.forceUpdate();
  },
  setComment:function(){},
  setImage:function(e){
    var file=e.target.files[0];
    var reader=new FileReader();
    reader.onload=function(){
      this.setState({image:reader.result});
    }.bind(this);
    reader.readAsDataURL(file);
  },
  render: function() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        <h1>意見回饋表</h1>

        <label>姓名: </label>
        {/* Controlled Component */}
        {/* code here... */}
        <input value={this.state.name} onChange={this.setName}></input>
        <br/>

        <label>電話: </label>
        {/* Uncontrolled Component */}
        {/* code here... */}
        <input ref="tel"></input>
        <br/>

        <label>性別: </label>
        {/* code here... */}
        <input type="radio" name="gender" id="radio-male" checked={this.state.gender==="male"} value="male" onChange={this.setGender}/>
        <label htmlFor="radio-male">男</label>
        <input type="radio" name="gender" id="radio-female" checked={this.state.gender==="female"} value="female" onChange={this.setGender}/>
        <label htmlFor="radio-female">女</label>
        <br/>

        <label>聯絡時間: </label>
        {/* code here... */}
        <input type="checkbox" id="check1" checked={this.state.time.morning} value="morning"></input>
        <label htmlFor="check1">上午</label>
        <input type="checkbox" id="check2" checked={this.state.time.afternoon} value="afternoon"></input>
        <label htmlFor="check2">下午</label>
        <input type="checkbox" id="check3" checked={this.state.time.night} value="night"></input>
        <label htmlFor="check3">晚上</label>
        <br/>

        <label>您的意見</label>
        <br/>
        {/* code here... */}
        <textarea value={this.state.comments}></textarea>

        <input type="file" accept="image/*" onChange={this.setImage}></input>
        <img src={this.state.image}></img>

        <input type='submit' value='送出'/>
      </form>
    );
  }
});
module.exports = MyForm;
