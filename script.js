function enterSite(){
document.getElementById("intro").classList.add("hidden");
document.getElementById("main").classList.remove("hidden");
}

const data = {
BA:{
name:"Bilal Asangi",
cases:[
{
title:"Smart Traffic Management",
tags:"Dijkstra | SDG 11",
problem:"Finding shortest routes to reduce congestion.",
solution:"Using Dijkstra’s algorithm on weighted graphs.",
code:`#include<iostream>
using namespace std;
#define INF 999
int main(){
int g[4][4]={{0,5,INF,10},{INF,0,3,INF},{INF,INF,0,1},{INF,INF,INF,0}};
int d[4];
for(int i=0;i<4;i++) d[i]=g[0][i];
for(int k=0;k<4;k++)
for(int i=0;i<4;i++)
for(int j=0;j<4;j++)
if(d[i]+g[i][j]<d[j])
d[j]=d[i]+g[i][j];
for(int i=0;i<4;i++) cout<<d[i]<<" ";
}`
}
]
}
};

function openMember(id){
document.getElementById("team").classList.add("hidden");
document.getElementById("cases").classList.remove("hidden");
document.getElementById("memberTitle").innerText =
data[id].name + " – Business Cases";

const grid = document.getElementById("caseList");
grid.innerHTML="";

data[id].cases.forEach(c=>{
const div=document.createElement("div");
div.className="case-card";
div.innerHTML=`
<div class="tags">${c.tags}</div>
<div class="case-title">${c.title}</div>
<div class="case-desc">${c.problem}</div>
<div class="details">
<h4>Solution</h4>
<p>${c.solution}</p>
<h4>Code</h4>
<pre><code>${c.code}</code></pre>
</div>
`;
div.onclick=()=>div.classList.toggle("active");
grid.appendChild(div);
});
}

function goBack(){
document.getElementById("cases").classList.add("hidden");
document.getElementById("team").classList.remove("hidden");
}




