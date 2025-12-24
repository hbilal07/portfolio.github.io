const intro = document.getElementById("intro");
const main = document.getElementById("main");
const team = document.getElementById("team");
const cases = document.getElementById("cases");
const caseList = document.getElementById("caseList");
const memberTitle = document.getElementById("memberTitle");

document.getElementById("enterBtn").onclick = () => {
  intro.classList.add("hidden");
  main.classList.remove("hidden");
};

document.querySelectorAll(".team-card").forEach(card => {
  card.onclick = () => openMember(card.dataset.id);
});

document.querySelector(".back-btn").onclick = () => {
  cases.classList.add("hidden");
  team.classList.remove("hidden");
};

const data = {
BA: {
name: "Bilal Asangi",
cases: [
{ title:"Automated Billing Code Matching & Fraud Detection", algo:"Hashing", why:"Fast lookup to detect duplicate billing codes.", code:`${/* code trimmed for readability */''}
#include <iostream>
using namespace std;
int hashTable[50];
int hashFunc(int code){ return code%50; }
int main(){
int bills[]={1201,1350,1201,1480};
for(int i=0;i<4;i++){
int idx=hashFunc(bills[i]);
if(hashTable[idx]==bills[i]) cout<<bills[i]<<" detected\\n";
else hashTable[idx]=bills[i];
}}`
},
{ title:"Supermarket Dynamic Pricing Engine", algo:"Insertion Sort", why:"Efficient for small frequent updates.", code:`/* insertion sort code */`},
{ title:"Urban Event Ticketing & Crowd Flow", algo:"Queue", why:"FCFS crowd entry.", code:`/* queue code */`},
{ title:"Traffic Signal Optimization", algo:"Greedy", why:"Max congestion first.", code:`/* greedy code */`},
{ title:"Smart Toll Collection", algo:"BST", why:"Fast vehicle lookup.", code:`/* bst code */`},
{ title:"Public Toilet Maintenance", algo:"Min Heap", why:"Highest usage cleaned first.", code:`/* heap code */`},
{ title:"Street Lighting Optimization", algo:"Greedy", why:"Power saving.", code:`/* greedy code */`},
{ title:"Digital Library System", algo:"Trie", why:"Fast prefix search.", code:`/* trie code */`}
]
},

SK: {
name: "Sourabh Kakarambi",
cases: [
{ title:"Urban Road Maintenance", algo:"Segment Tree", why:"Fast range queries.", code:`/* segment tree code */`},
{ title:"Water Supply Management", algo:"BFS", why:"Level-wise reachability.", code:`/* bfs code */`},
{ title:"Smart Energy Grid", algo:"Prim’s Algorithm", why:"Minimum cost MST.", code:`/* prims code */`},
{ title:"Waste Collection", algo:"Dijkstra", why:"Shortest routes.", code:`/* dijkstra code */`},
{ title:"Public Transport Scheduling", algo:"Min Heap", why:"Earliest departure.", code:`/* heap code */`},
{ title:"Emergency Response", algo:"DFS", why:"Identify affected zones.", code:`/* dfs code */`},
{ title:"Smart Parking", algo:"Queue", why:"FCFS slots.", code:`/* queue code */`},
{ title:"Environmental Monitoring", algo:"Fenwick Tree", why:"Efficient updates.", code:`/* BIT code */`}
]
}
};

function openMember(id){
team.classList.add("hidden");
cases.classList.remove("hidden");
memberTitle.innerText = data[id].name + " – Business Cases";
caseList.innerHTML = "";

data[id].cases.forEach(c => {
const div = document.createElement("div");
div.className = "case-card";
div.innerHTML = `
<h3>${c.title}</h3>
<p><strong>Algorithm:</strong> ${c.algo}</p>
<p><strong>Why Suitable:</strong> ${c.why}</p>
<div class="details"><pre><code>${c.code}</code></pre></div>
`;
div.onclick = () => div.classList.toggle("active");
caseList.appendChild(div);
});
}





