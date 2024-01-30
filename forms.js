const id=(name)=>document.querySelector(name);

let uname=id('.username');
let email=id('.email');
let password=id('.Password');
let button=id('.btn');
let error=document.querySelectorAll('.error');
let form=id('.form');

const validate=(id,val,msg)=>{
if(id.value.trim()===''){
    error[val].innerHTML=msg;
    id.style.border='2px solid red';
}
else{
    error[val].innerHTML='';
    id.style.border='2px solid green';
}
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validate(uname,0,'user name can not be empty');
    validate(email,1,'email can not be empty');
    validate(password,2,'password can not be empty');  
    console.log(uname.value,email.value,password.value); 
})
