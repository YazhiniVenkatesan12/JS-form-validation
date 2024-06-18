function val(){
    let name=document.myform.name.value;
    let pwd=document.myform.pass.value;
    let cnfrmpwd=document.myform.confirmPass.value;
    let gender=document.myform.gender.value;
    let address=document.myform.address.value;
    if (name==null||name==""){
        alert("Please enter name to continue");
        return false;
    }
    else if(pwd.length<8){
        alert("Password must be at least 8 characters long.");
        return false;
    }
    if(pwd!=cnfrmpwd){
        alert("password must be same!");
        return false;
    }
    if(gender==null||gender==""){
        alert("Please select your gender!");
        return false;
    }
    if(address==null||address==""){
        alert("Please enter your address!");
        return false;
    }
}