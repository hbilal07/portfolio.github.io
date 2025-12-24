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
desc:"Optimizing routes using Dijkstra's Algorithm",
code:`#include <iostream>
using namespace std;
#define INF 999
int main(){
int n=4;
int cost[4][4]={{0,5,INF,10},{INF,0,3,INF},{INF,INF,0,1},{INF,INF,INF,0}};
int dist[4];
for(int i=0;i<n;i++) dist[i]=cost[0][i];
for(int k=1;k<n;k++)
for(int i=0;i<n;i++)
for(int j=0;j<n;j++)
if(dist[i]+cost[i][j]<dist[j])
dist[j]=dist[i]+cost[i][j];
for(int i=0;i<n;i++) cout<<dist[i]<<" ";
}`
},
{
title:"Emergency Response Routing",
desc:"Fast traversal using BFS",
code:`#include<iostream>
using namespace std;
int main(){
int a[5][5]={{0,1,1,0,0},{1,0,0,1,1},{1,0,0,0,1},{0,1,0,0,0},{0,1,1,0,0}};
int q[10],f=0,r=0,vis[5]={0};
q[r++]=0; vis[0]=1;
while(f<r){
int u=q[f++];
cout<<u<<" ";
for(int i=0;i<5;i++)
if(a[u][i] && !vis[i]){
q[r++]=i;
vis[i]=1;
}}
}`
}
]
}
};

function openMember(id){
document.getElementById("team").classList.add("hidden");
document.getElementById("cases").classList.remove("hidden");
document.getElementById("memberTitle").innerText = data[id].name + " – Business Cases";

const list = document.getElementById("caseList");
list.innerHTML = "";

data[id].cases.forEach(c=>{
const div = document.createElement("div");
div.className="case-card";
div.innerHTML = `
<h4>${c.title}</h4>
<p>${c.desc}</p>
<div class="code">
<pre><code>${c.code}</code></pre>
</div>`;
div.onclick = ()=> div.classList.toggle("active");
list.appendChild(div);
});
}

function goBack(){
document.getElementById("cases").classList.add("hidden");
document.getElementById("team").classList.remove("hidden");
}
