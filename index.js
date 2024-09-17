window.onload=function(){
   render()

}

const firebaseConfig = {
  apiKey: "AIzaSyAvnYtm1bNpuVkF8LzV3BwEQKpRoeIZ43g",
  authDomain: "otp-auth-15115.firebaseapp.com",
  projectId: "otp-auth-15115",
  storageBucket: "otp-auth-15115.appspot.com",
  messagingSenderId: "958408512565",
  appId: "1:958408512565:web:640c8bac0869c73849cd7c"
};

firebase.initializeApp(firebaseConfig);
const auth= firebase.auth();
const database =firebase.database();

function render(){
    window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}

function login(){
  var mobile=document.getElementById("mobilenum").value
  console.log(mobile)
  var number="+91"+mobile;
  console.log(number)
  if(mobile.length<10){
    window.alert("Enter correct mobile number")
  }
  else{
    firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function(confirmResult){
      Window.confirmResult=confirmResult;
      coderesult=confirmResult;
      console.log(coderesult);

      var a=document.getElementById("mobileenter")
      a.remove();

      document.getElementById("otpenter").style.visibility="visible";
    }).catch(function(error){
      document.getElementById("error").innerHTML=error.message;
    })
  }
}

function verify(){
  var otp=document.getElementById("otpvalue").value;
  coderesult.confirm(otp).then(function(result){
    var user=result.user;
    window.location.replace("user.html");
  }).catch(function(error){
    document.getElementById("errorotp").innerHTML=error.message;
  })
}