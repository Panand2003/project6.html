const form=document.querySelector("#form")
const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const cpassword=document.querySelector('#cpassword')
form.addEventListener ('submit',(e)=>{
    if(!validateinput()){
        e.preventdefault();
    }
   
})
function validateinput(){
    const usernameval=username.value.trim()
    const emailval=email.value.trim();
    const password=password.value.trim();
    const cpassword=cpassword.value.trim();

    if (usernameval===''){
        success=false;
        seterror(username,'username is required')
    }
    else{
        setsuccess(username)
    }
    if(emailval===""){
        success=false;
        seterror(email,"email is required")
    }
    else if(!validateEmail(emailval)){
        success=false;
        seterror(email,'please enter a valid email')
    }
    else{
        setsuccess(email)
    }
    if(password===''){
        success=false;
        seterror(password,'password is required')
    }
    else if(passwordval.length<7){
        success=false;
        seterror(password,'passsword must be atleast 7 characters')
    }
    else{
        setsuccess(password)
    }
    if(cpassword===''){
        seterror(cpassword,'password does not match')
    }
    else if(cpassword!==passwordval){
        seterror(cpassword,'password does not match')
    }
    else{
        setsuccess(cpassword)
    }
    return success
}
function seterror(element,message){
    const inputgroup=element.parentElement
    const errorelement=inputgroup.querySelector('.error')
    errorelement.innerText=message;
    inputgroup.classList.add('error')
    inputgroup .classList.remove('success')
    }
function setsuccess(element){
    const inputgroup=element.parentElement
    const errorelement=inputgroup.querySelector('.error')
    errorelement.innerText='';
    inputgroup.classList.add('success')
    inputgroup.classList.remove('error')

}
const validateEmail=(email)=>{
    return String(email)
    .toLowerCase
    .match('/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')

}