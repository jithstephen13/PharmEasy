
    document.getElementById("select").addEventListener("click",function(){
        document.querySelector(".popup").style.display="flex"
    })
    document.querySelector("#close").addEventListener("click",function(){
        document.querySelector(".popup").style.display="none"

    })
    let locationbtn=document.getElementById("buttonl2").addEventListener("click",function(){
      alert ( "service available in this location")
    });
    let imgarr=[
        "https://cms-contents.pharmeasy.in/banner/6d49c160016-2_HP_634x274.jpg","https://cms-contents.pharmeasy.in/banner/c5d7f1f2b79-1_MonsoonFever_HP.jpg","https://cms-contents.pharmeasy.in/banner/c5d7f1f2b79-1_MonsoonFever_HP.jpg","https://cms-contents.pharmeasy.in/banner/34b5c9105c6-On-time-or-FREEEE_HP_634x274.jpg","https://cms-contents.pharmeasy.in/banner/6adcb7205ef-1_HP_634x274jpg.jpg",
        "https://cms-contents.pharmeasy.in/banner/4acf73cf129-2_MonsoonStomach_HP.jpg",
        "https://cms-contents.pharmeasy.in/banner/fdcaf703bf8-couple.jpg"
        
     
        ]
        let leftbtn=document.getElementById("leftbtn")
        let rightbtn=document.getElementById("rgtbtn")
        let cruser=document.getElementById("cruser");
     
        let imagestate=0
        rightbtn.addEventListener("click", function(){
         imagestate++;
         if(imagestate===imgarr.length){
           imagestate=0
         }
         cruser.src=imgarr[imagestate];
        })
     
        leftbtn.addEventListener("click", function(){
         imagestate--
         if(imagestate<0){
           
     
           imagestate=imagestate.length-1
         }
         cruser.src=imgarr[imagestate];
        })

        
  document.getElementById("questn1").addEventListener("click",function(){
    document.querySelector("#yy1").style.display="flex"
})
document.getElementById("up1").addEventListener("click",function(){
    document.querySelector("#yy1").style.display="none"
})
document.getElementById("questn2").addEventListener("click",function(){
    document.querySelector("#yy2").style.display="flex"
})
document.getElementById("up2").addEventListener("click",function(){
    document.querySelector("#yy2").style.display="none"
})
document.getElementById("questn3").addEventListener("click",function(){
    document.querySelector("#yy3").style.display="flex"
})
document.getElementById("up3").addEventListener("click",function(){
    document.querySelector("#yy3").style.display="none"
})
document.getElementById("questn4").addEventListener("click",function(){
    document.querySelector("#yy4").style.display="flex"
})
document.getElementById("up4").addEventListener("click",function(){
    document.querySelector("#yy4").style.display="none"
})
document.getElementById("questn5").addEventListener("click",function(){
    document.querySelector("#yy5").style.display="flex"
})
document.getElementById("up5").addEventListener("click",function(){
    document.querySelector("#yy5").style.display="none"
})
document.getElementById("questn6").addEventListener("click",function(){
    document.querySelector("#yy6").style.display="flex"
})
document.getElementById("up6").addEventListener("click",function(){
    document.querySelector("#yy6").style.display="none"
})
document.getElementById("questn7").addEventListener("click",function(){
    document.querySelector("#yy7").style.display="flex"
})
document.getElementById("up7").addEventListener("click",function(){
    document.querySelector("#yy7").style.display="none"
})
document.getElementById("questn8").addEventListener("click",function(){
    document.querySelector("#yy8").style.display="flex"
})
document.getElementById("up8").addEventListener("click",function(){
    document.querySelector("#yy8").style.display="none"
})


      