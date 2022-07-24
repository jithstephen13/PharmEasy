
    document.getElementById("select").addEventListener("click",function(){
        document.querySelector(".popup").style.display="flex"
    })
    document.querySelector("#close").addEventListener("click",function(){
        document.querySelector(".popup").style.display="none"

    })
    let locationbtn=document.getElementById("buttonl2").addEventListener("click",function(){
      alert ( "service available in this location")
    });


    document.getElementById("select1").addEventListener("click",function(){
        event.preventDefault()
        document.querySelector(".logsign").style.display="flex"
    })
    document.querySelector("#close2").addEventListener("click",function(){
        document.querySelector(".logsign").style.display="none"

    })
    let otpdtl=document.getElementById("button3").addEventListener("click",function(){
       console.log("hiiiiii")
    
    });
    function displaynewfun(){
        document.querySelector(".loginbody").innerHTML=""
    }




    let imgarr=[
        "https://cms-contents.pharmeasy.in/banner/6d49c160016-2_HP_634x274.jpg","https://cms-contents.pharmeasy.in/banner/c5d7f1f2b79-1_MonsoonFever_HP.jpg","https://cms-contents.pharmeasy.in/banner/c5d7f1f2b79-1_MonsoonFever_HP.jpg","https://cms-contents.pharmeasy.in/banner/34b5c9105c6-On-time-or-FREEEE_HP_634x274.jpg","https://cms-contents.pharmeasy.in/banner/6adcb7205ef-1_HP_634x274jpg.jpg",
        "https://cms-contents.pharmeasy.in/banner/4acf73cf129-2_MonsoonStomach_HP.jpg",
        "https://cms-contents.pharmeasy.in/banner/fdcaf703bf8-couple.jpg",
        ]
        let leftbtn=document.getElementById("leftbtn")
        let rightbtn=document.getElementById("rgtbtn")
        let cruser=document.getElementById("cruser");
     
  let j=0    
  leftbtn.addEventListener("click",function(){
    j --
    if(j<0){
     j=imgarr.length-1
    }
    
    cruser.src=imgarr[j]
   
   
 
  })
  rightbtn.addEventListener("click",function(){
    j++
    if(j==imgarr.length){
     j=0
 
 
    } 
    cruser.src=imgarr[j]       
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



let imgatt=["https://cdn01.pharmeasy.in/dam/diagnostics/usp-images/55f90440a9873704a771d084cb65b909",
"https://cdn01.pharmeasy.in/dam/diagnostics/usp-images/64664cb0cfd63f81bc200f3e1e0c755f",
"https://cdn01.pharmeasy.in/dam/diagnostics/usp-images/e916484d3a2336368ce2ecf1748437e2"]

let textarr=["Get accurate and timely reports from our Certified Partner Laboratories.","Get the best price for tests and packages by comparing across multiple labs.","Get your samples collected at the comfort of your home."]
 let lefbtn=document.getElementById("left1")
 let cruser1=document.getElementById("cruser1")
 let tex=document.getElementById("name")
 let i=0;

 let rihbtn=document.getElementById("right1")
 
 lefbtn.addEventListener("click",function(){
   i --
   if(i<0){
    i=imgatt.length-1
   }
   
   cruser1.src=imgatt[i]
 display(i)  
  

 })
 rihbtn.addEventListener("click",function(){
   i++
   if(i==imgatt.length){
    i=0


   } 
   cruser1.src=imgatt[i]
   display(i)       
 })

 
   
  display(i)
  function display(i){
    
     document.querySelector("#cr").innerHTML=""

    let image=document.createElement("p")
    image.innerText=textarr[i]

    document.querySelector("#cr").append(image)
  }
      