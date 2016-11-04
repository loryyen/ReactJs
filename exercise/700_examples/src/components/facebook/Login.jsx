require('./login.scss');

var Login = function(props){
  return(
    <div className='login-btn' onClick={props.login}>
      Connect Facebook
    </div>
  );
}
module.exports = Login;
