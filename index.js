const inputBox=document.getElementById('textBox');
let randomValue,validMessage;
//const otpInputValue=document.querySelectorAll('.otp_input');
const inputBoxHandle=()=>{
  inputBox.addEventListener('input',(e)=>{
    const value=e.target.value;
    const target=e.target;
    if(isNaN(value)){
      target.value="";
      return;
    }
    const nextElement=target.nextElementSibling;
    if(nextElement){
      nextElement.focus();
    }
    // otp check function
      validate();
  })
}
//otp create this function
  function otpGenerate(){
 document.querySelector('#span').innerHTML="OTP code Sending....";
setTimeout(()=>{
 randomValue= Math.floor(Math.random() * 900000) + 100000;
document.querySelector('#span').innerHTML="OTP:" + randomValue;
},1000); 
}
// logical function
const otpTimeout=()=>{
  const otpTimerResult=document.querySelector('.otpTimerResult');
  const intralval=1000;
  const totalTime=16000;
  let slice= totalTime/intralval;
  const id=setInterval(function() {
    otpTimerResult.innerHTML=`Otp is Expaired: ${slice}`
    slice=slice-1;
  },intralval);
  setTimeout( function () {
    clearInterval(id);
  },totalTime);
}
//button click event 
 function otpBtn(x) {
   x.disabled=true;
        otpGenerate();
      otpTimeout();
      setInterval(()=>{
     otpGenerate();  
     otpTimeout();
     validMessage.innerHTML ="Invlide validate"; 
     validMessage.style.color="red";
     //inputValue clear..
     const inputValue=document.querySelectorAll('.otp_input');
      for(let i=0; i<inputValue.length; i++){
        inputValue[i].value="";
      }
      },15000)
      const inputValue=document.querySelectorAll('.otp_input');
      for(let i=0; i<inputValue.length; i++){
        inputValue[i].value="";
      }
};
//button click event clear item
function clearOTP(x){
  document.querySelector('#span').innerHTML="OTP is empty";
  otpInputValue="";
  const inputValue=document.querySelectorAll('.otp_input');
      for(let i=0; i<inputValue.length; i++){
        inputValue[i].value="";
      }
}
//validate otp action 
const validate=()=>{
  let dataStore="";
  const accessData=document.getElementById('textBox');
[...accessData.children].forEach((otp)=>{
  dataStore= dataStore + otp.value;
})
 validMessage= document.querySelector('.validateResult');
const result = (randomValue === parseInt(dataStore,10));
if(result){
 validMessage.innerHTML=`<a href="/profile.html">profile</a>`
//validMessage.innerHTML ="validation successfull";
//validMessage.style.color="blue";
}else{
 validMessage.innerHTML ="Invlide validate"; 
 validMessage.style.color="red";
}
}
//initial call this function
const init =()=>{
  inputBoxHandle();
}
init();