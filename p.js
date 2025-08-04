




const lad= () =>{
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
     .then((res)=>res.json())
    .then((data)=>{
        dp(data.drinks)
    })
}

const ser = () => {
     const a=document.getElementById("sc").value.toLowerCase();
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${a}`)
        .then((res)=>res.json())
    .then((data)=>{
          const pcc=document.getElementById("pc");
           pcc.innerHTML = ""; 
          if(!data.drinks){
                pcc.innerHTML=`
                <h1>your searched drink is not found </h1>
                `
                return;
          }




        dp(data.drinks)
    })


}




const dp =(pd)=>{
const pcc=document.getElementById("pc");
pd.forEach((pdd) => {
    const div=document.createElement("div")
    div.classList.add("card");
    div.innerHTML=`
<img class="ci" src="${pdd.strDrinkThumb}" alt="">
<h4>Name :${pdd.strGlass}</h4>
<p>Catagory :${pdd.strCategory}</p>
<p>Instruction :${pdd.strInstructions.slice(0,20)}</p>
<div class=""bcu>
<button class="cu" onclick="hac('${pdd.strDrinkThumb}', '${pdd.strGlass}')">Add to cart</button>
<button class="bu"  onclick="det('${pdd.strGlass}','${pdd.strDrinkThumb}','${pdd.strCategory}','${pdd.strAlcoholic}','${pdd.strInstructions.slice(0,300)}')"> Details</button>
 </div>
`;
 pcc.appendChild(div);   
   
});


};

const hac =(pic,nam) =>{

const c=document.getElementById("count").innerText;
let cc=parseInt(c);
cc=cc+1;
if(cc>7){
    alert("you have reached the max limit");
    return;
}

document.getElementById("count").innerText=cc;

const con =document.getElementById("cma");
const div=document.createElement("div");
div.classList.add("cai")
div.innerHTML=`
<h3>${cc}</h3>
<img class="cimg" src="${pic}" alt="">
<p>${nam}</p>

`
con.appendChild(div);


}
lad();




const det=(nam,pic,cat,alc,ins) =>{
    const md=document.getElementById("md");
    const mdd=document.getElementById("exampleModalLabel");
    mdd.innerHTML=`
     <h1>${nam}</h1>
    `
    md.innerHTML=`
   
    <img class="mimg" src="${pic}" alt="">
    <p>Details</p>
    <p>Catagory :<b>${cat}</b></p>
    <p>Alcoholic :<b>${alc}</b></p>
    <p>${ins}</p>
    `
const m= new bootstrap.Modal(document.getElementById("exampleModal"));
m.show();

}







