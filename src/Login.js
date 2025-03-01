import React from 'react';
import"./Login.css";
import kr from "./kr.jpg";
import Home from './Home';
const Login = (props) => {
  var userData=[
    {userName:"patrick",passcode:123,cart: [] },
    {userName:"jonas",passcode:789,cart: [] },
    {userName:"ulrich",passcode:786,cart: [] }
  ];
    // function signUp(){
    //  var userName = document.getElementById("userName").value;
    //  var userPasscode = document.getElementById("passcode").value;
    //  console.log(userName,userPasscode);
      
    // }
   
    const Signup=()=>{
      var userName=document.getElementById("userName").value; 
      var userPasscode=document.getElementById("passcode").value; 
      var activeUserDetail=userData.filter((data,i)=>
      {
        return userName==data.userName;
      });
      console.log(activeUserDetail);
      if(activeUserDetail.length>0){
        if(activeUserDetail[0].passcode==userPasscode)
          
        {
          localStorage.setItem("userName", activeUserDetail[0].userName);
          window.location.replace("./Home");
        }else {
          console.log("Wrong passcode");
          
        }     
      }
      
      
        };
      
         
      
        return (
          <div className="background">
            <div className="box">
            < img className="image" src={kr} alt="" />
              <div>
              <p className="pt">UserName </p>
      
                <input id="userName" placeholder="Userid..." />
              </div>
              <div>
              <p className="jt">PassCode </p>
                <input id="passcode" placeholder="passcode..." />
               
              </div>
              <button onClick={Signup}  className="bt">Login</button>
            </div>
          </div>
        );
      };
      
      export default Login;