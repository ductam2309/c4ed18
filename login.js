let login= document.getElementById("login");
login.addEventListener  ('click',(e) =>{
    e.preventDefault();
let userName= document.getElementById('username').value;
let passsword= document.getElementById('password').value;
console.log(userName);
console.log(passsword);
if(userName==='ductam' && passsword==='ductam'){
    alert('ban dang nhap thanh cong')
    location.href="http://127.0.0.1:5500/main.html"
}
else{
    alert('ban dang nhap ko thanh cong')
}
}) 