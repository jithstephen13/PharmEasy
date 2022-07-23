
// document.querySelector("#priority").addEventListener("change",cartfuncton)
// // let cartare=JSON.parse(localStorage.getItem("cartmed"))||[];
// function cartfuncton(){
//     let pationt=document.querySelector("#priority").value 
//     if(pationt=="p2"){
//         let p=2;
//         displaycart(p)
//     }
//     if(pationt=="p1"){
//         let p=1;
//         displaycart(p)
//     }
// }


// displaycart()

// function displaycart(p){
//     if(p==undefined){
//         p=1
//     }
    
//     let sum=(700*p);
  
//     document.querySelector("#crtbodt").innerText=":"+" "+"₹"+sum;
//     document.querySelector("#totel").innerText=":  ₹"+sum;
//     document.querySelector("#carhed").innerText=p;
//     // let obj={
//     //     testnam:"rtpcr",
//     //     testamout:sum
//     // }
//     // cartare.push(obj)
//     // localStorage.setItem("cartmed",JSON.stringify(cartare))
    
// }//

let cartarr=JSON.parse(localStorage.getItem("cartlist"))||[]



displayfun();

function displayfun(){
    document.querySelector(".crotbdy").innerHTML=""
    document.querySelector(".totel").innerHTML=""
    cartarr.forEach(function (el){
    let bix=document.createElement("div")
    let name=document.createElement("p")
    name.innerText=el.name+"  "+":"+el.amount
    let amount=document.createElement("p")
    
    
    bix.append(name,amount)
    document.querySelector(".crotbdy").append(bix)
    });

    let amout=cartarr.reduce(function(acc,el){
        return acc+Number(el.amount)
    },0)
    
    let tote=document.createElement("p")
    tote.innerText=""
    document.querySelector(".totel").append(tote)

    


}



// document.querySelector("#buttont").addEventListener("click",function(){
//     event.preventDefault();
//     console.log("hiii")
// })
// document.querySelector("#dc1").addEventListener("click",function(){
//     event.preventDefault();
//   document.querySelector(".dectxt").innerText="The COVID-19 laboratory test can detect positive coronavirus cases. Any individual with symptoms like cough, high fever, shortness of breath, respiratory and breathing difficulties, and with a history of international travel or contact with Covid -19 positive cases, can book this test with prior consultation by General Physician. The result of this test will be informed to the relevant authorities as mandated by the government. Home sample collection will be done by an expert technician."
// })
// document.querySelector("#dc2").addEventListener("click",function(){
//     event.preventDefault();
//   document.querySelector(".dectxt").innerText="Sample Type:Throat and Nasal Swab    , Fasting Required:Not Required ,Tube Type:Plain"
// })
document.getElementById("select1").addEventListener("click",function(){
    event.preventDefault()
    document.querySelector(".logsign").style.display="flex"
})
document.querySelector("#close2").addEventListener("click",function(){
    document.querySelector(".logsign").style.display="none"

})


document.getElementById("select").addEventListener("click",function(){
    document.querySelector(".popup").style.display="flex"
})
document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none"

})
let locationbtn=document.getElementById("buttonl2").addEventListener("click",function(){
  alert ( "service available in this location")
});



