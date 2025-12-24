const data={
BA:{
name:"Bilal Asangi",
role:"Head of Energy & Utilities",
quote:"Sustainable power requires smart distribution using greedy algorithms and trees.",
cases:[
{
title:"Grid Connectivity",
problem:"Connecting substations with minimum cable cost.",
solution:"Minimum Spanning Tree using Prim’s Algorithm.",
code:"#include<iostream>\nusing namespace std;"
}
]
}
};

function openPortfolio(id){
document.getElementById("team").classList.add("hidden");
document.getElementById("portfolio").classList.remove("hidden");

const m=data[id];
document.getElementById("banner").innerHTML=`
<h1>${m.name}</h1>
<h3>${m.role}</h3>
<p>${m.quote}</p>
`;

const grid=document.getElementById("cases");
grid.innerHTML="";

m.cases.forEach(c=>{
const div=document.createElement("div");
div.className="case-card";
div.innerHTML=`
<div class="tags"><span>Algorithm</span></div>
<h3>${c.title}</h3>
<p>${c.problem}</p>
`;
div.onclick=()=>openModal(c);
grid.appendChild(div);
});
}

function openModal(c){
document.getElementById("modal").classList.remove("hidden");
document.getElementById("modalTitle").innerText=c.title;
document.getElementById("modalProblem").innerText=c.problem;
document.getElementById("modalSolution").innerText=c.solution;
document.getElementById("modalCode").innerText=c.code;
}

function closeModal(){
document.getElementById("modal").classList.add("hidden");
}

function goBack(){
document.getElementById("portfolio").classList.add("hidden");
document.getElementById("team").classList.remove("hidden");
}

