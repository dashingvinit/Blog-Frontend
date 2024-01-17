import React,{useState} from 'react'
import './Login.css'

// import { useHistory } from 'react-router-dom';

const Login = () => {

  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [formdata, setformdata] = useState({
    name:'',
    email:'',
    password:'',
  })


  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const handleInputChange = (e) => {
    console.log('wgy');
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };



  const handlesignup = async(e) =>{
    console.log('hello');
    e.preventDefault();
    try {
      const response = await fetch(`https://blogs-tauc.onrender.com/api/v1/user/signup`,{
        method : 'POST',
        
        body: formdata,
      })
      if (!response.ok) {
        console.error('Error signing up', response.statusText);
        return;
      }
  
      // const { token } = await response.json();
      // localStorage.setItem('token', token);
      // const user = jwt_decode(token);
      console.log('signup successful',response.data.data);
      
    } catch (error) {
      console.log('error in signing up', error);      
    }
  }




  const handlesignin = async(e) =>{
    e.preventDefault();
    const { email, password } = formdata;
    try {
      const response = await fetch(`https://blogs-tauc.onrender.com/api/v1/user/signin`,{
        method : 'POST',
        headers : {
          'Content-Type': 'application/json',
        },
        body : JSON.stringify({ email, password }),
      })
      console.log('signin successful',response);

    } catch (error) {
      console.log('error in signing up', error);      
    }
  }


  return (
   <div style={styles.body}>
       <div>
      <h2>
        Brogrammers Welcomes You All
      </h2>
    <div className={`main-container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="main-container">
      <div class="form-main-container sign-up-main-container">

        <form onSubmit={handlesignup}>
          <h1>Create Account</h1>
            <div class="public-main-container">
          </div>
          <span>use your own email</span>
          <input type="text" name="name" placeholder="Name" onChange={handleInputChange}/>
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange}/>
            <input type="password" name="password" placeholder="Password" onChange={handleInputChange}/>
            <button type="submit" >Sign Up</button>
        </form>
      </div>
      <div class="form-main-container sign-in-main-container">
        <form onSubmit={handlesignin}>
          <h1>Sign in</h1>
            <div class="public-main-container">
            </div>
            <span>use your own credentials</span>
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange}/>
            <input type="password" name="password" placeholder="Password" onChange={handleInputChange}/>
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign in</button>
        </form>
      </div>
      <div class="layerup-main-container">
        <div class="layerup">
          <div class="layerup-panel layerup-left">
            <h1>Welcome Back!</h1>
            <p>
              For Sign In click here
            </p>
            <button className="ghost" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div class="layerup-panel layerup-right">
            <h1>Hello, User</h1>
            <p>For Sign Up click here </p>
            <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div> 
   </div>
  )
}

const styles = {
    body:{
        padding:'60px',
    }
};

export default Login
