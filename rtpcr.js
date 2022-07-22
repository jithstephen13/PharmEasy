
document.querySelector("#priority").addEventListener("change",cartfuncton)

function cartfuncton(){
    let pationt=document.querySelector("#priority").value 
    if(pationt=="p2"){
        let p=2;
        displaycart(p)
    }
    if(pationt=="p1"){
        let p=1;
        displaycart(p)
    }
}


displaycart()

function displaycart(p){
    if(p==undefined){
        p=1
    }
    
    let sum=(700*p);
    console.log(sum)
    document.querySelector("#crtbodt").innerText=":"+" "+"₹"+sum;
    document.querySelector("#totel").innerText=":  ₹"+sum;
    document.querySelector("#carhed").innerText=p;
    
}
document.querySelector("#buttont").addEventListener("click",function(){
    event.preventDefault();
    console.log("hiii")
})
document.querySelector("#dc1").addEventListener("click",function(){
    event.preventDefault();
  document.querySelector(".dectxt").innerText="The COVID-19 laboratory test can detect positive coronavirus cases. Any individual with symptoms like cough, high fever, shortness of breath, respiratory and breathing difficulties, and with a history of international travel or contact with Covid -19 positive cases, can book this test with prior consultation by General Physician. The result of this test will be informed to the relevant authorities as mandated by the government. Home sample collection will be done by an expert technician."
})
document.querySelector("#dc2").addEventListener("click",function(){
    event.preventDefault();
  document.querySelector(".dectxt").innerText="Sample Type:Throat and Nasal Swab    , Fasting Required:Not Required ,Tube Type:Plain"
})



