let from=document.getElementById('fo');
// from.addEventListener('submit',function(e){
//     e.preventDefault();
//     let name=document.getElementById('name').value;
//     let email=document.getElementById('email').value;
//     let password=document.getElementById('password').value;
//     let cpassword=document.getElementById('cpassword').value;})
from.addEventListener("submit",(e)=>{
    e.preventDefault();

    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let number=document.getElementById('number').value;
    let password=document.getElementById('password').value;
    let cpassword=document.getElementById('cpassword').value;
    if(name==""||email==""||password==""||cpassword==""){
        alert("All fields are required");
    }
    else if(password!=cpassword){
        return alert("Password does not match");
    }
    else{
        alert("Form Submitted");
    }

    

    let obj={
        name,email,number,password,cpassword
    }
    let tr=document.createElement('tr');
    let td1=document.createElement('td');
    td1.innerText=obj.name;
    let td2=document.createElement('td');
    td2.innerText=obj.email;
    let td3=document.createElement('td');
    td3.innerText=obj.number;
    let td4=document.createElement('td');
    td4.innerText=obj.password;
    let td5=document.createElement('td');
    td5.innerText=obj.cpassword;
    tr.append(td1,td2,td3,td4,td5);
    document.getElementById('tbody').append(tr);

    console.log(name,email,password,cpassword);
})
