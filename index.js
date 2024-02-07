let btn=document.querySelectorAll(".mybtn")

btn.forEach((ind)=>{
   ind.addEventListener("click",(e)=>{
        let ans=e.currentTarget;
        console.dir(ans)
    
    })

})
