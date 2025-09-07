let menubtn=document.querySelector("#menubtn");
let section2=document.querySelector(".section2");


let menubtn_val=0;
menubtn.onclick=()=>{

    if(menubtn_val==0){
    section2.classList.remove("hide");
        menubtn_val=1;
        return;
    }
        if(menubtn_val==1){
             section2.classList.add("hide");
             menubtn_val=2;
             return;
    }
     if(menubtn_val==2){
             section2.classList.remove("hide");
             menubtn_val=1;
             return;
    }

};