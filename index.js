const count=document.querySelector(".count");
// const add=document.querySelector(".add");
// const resetcount=document.querySelector(".reset");
// const sub=document.querySelector(".substract");
const buttons=document.querySelector(".buttons");

buttons.addEventListener("click",(e)=>{
  
    if(e.target.classList.contains("add"))
    {
        count.innerHTML++;
        // console.log("Add");
        setColor();
    }
    if(e.target.classList.contains("reset"))
    {
        count.innerHTML=0;
        setColor();
    }
    if(e.target.classList.contains("substract"))
    {
        count.innerHTML--;
        setColor();
    }

});

function setColor()
{
    if(count.innerHTML>0)
    {
        count.style.color="yellow";
    }

   else if(count.innerHTML<0)
    {
        count.style.color="red";
    }
    
    else
    {
        count.style.color="#fff";
    }

}

// add.addEventListener("click",
// addition(){console.log(1);})

// add.addEventListener("click",()=>{
// count.innerHTML++;
// });
// resetcount.addEventListener("click",()=>{
//     count.innerHTML='0';
// });

// sub.addEventListener("click",()=>{
//     count.innerHTML--;
// });    