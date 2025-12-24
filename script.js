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
{
title: "Automated Billing Code Matching & Fraud Detection",
algo: "Hashing",
why: "Fast lookup to detect duplicate or invalid billing codes.",
code: `#include <iostream>
using namespace std;

int hashTable[50];

int hashFunc(int code) {
    return code % 50;
}

int main() {
    int bills[] = {1201, 1350, 1201, 1480};
    int n = 4;

    cout << "Fraudulent Billing Codes:\\n";
    for(int i = 0; i < n; i++) {
        int index = hashFunc(bills[i]);
        if(hashTable[index] == bills[i])
            cout << bills[i] << " detected\\n";
        else
            hashTable[index] = bills[i];
    }
}`
},
{
title: "Supermarket Dynamic Pricing Engine",
algo: "Insertion Sort",
why: "Efficient for frequent small updates.",
code: `#include <iostream>
using namespace std;

int main() {
    int price[] = {50, 30, 40, 20};
    int n = 4;

    for(int i = 1; i < n; i++) {
        int key = price[i], j = i - 1;
        while(j >= 0 && price[j] > key) {
            price[j + 1] = price[j];
            j--;
        }
        price[j + 1] = key;
    }

    for(int i = 0; i < n; i++)
        cout << price[i] << " ";
}`
},
{
title: "Urban Event Ticketing & Crowd Flow Optimizer",
algo: "Queue",
why: "First-come-first-served crowd management.",
code: `#include <iostream>
using namespace std;

int main() {
    int queue[10], front = 0, rear = 0;

    queue[rear++] = 101;
    queue[rear++] = 102;
    queue[rear++] = 103;

    cout << "Allowed Entry Ticket ID: " << queue[front++];
}`
},
{
title: "Traffic Signal Optimization",
algo: "Greedy Algorithm",
why: "Gives signal to road with highest congestion.",
code: `#include <iostream>
using namespace std;

int main() {
    int traffic[] = {30, 50, 20, 40};
    int max = traffic[0], road = 0;

    for(int i = 1; i < 4; i++) {
        if(traffic[i] > max) {
            max = traffic[i];
            road = i;
        }
    }

    cout << "Green signal allocated to Road: " << road;
}`
}
]
},

SK: {
name: "Sourabh Kakarambi",
cases: [
{
title: "Urban Road Maintenance & Asset Management",
algo: "Segment Tree",
why: "Efficient range damage queries.",
code: `#include <iostream>
using namespace std;

int seg[100];

void build(int arr[], int node, int start, int end) {
    if(start == end)
        seg[node] = arr[start];
    else {
        int mid = (start + end) / 2;
        build(arr, 2*node, start, mid);
        build(arr, 2*node+1, mid+1, end);
        seg[node] = seg[2*node] + seg[2*node+1];
    }
}

int main() {
    int roadDamage[] = {4, 6, 3, 7, 2};
    build(roadDamage, 1, 0, 4);
    cout << seg[1];
}`
}
]
}
};

function openMember(id) {
  team.classList.add("hidden");
  cases.classList.remove("hidden");
  memberTitle.innerText = data[id].name + " – Business Cases";
  caseList.innerHTML = "";

  data[id].cases.forEach(c => {
    const div = document.createElement("div");
    div.className = "case-card";
    div.innerHTML = `
      <h3>${c.title}</h3>
      <p><strong>Algorithm Used:</strong> ${c.algo}</p>
      <p><strong>Why Suitable:</strong> ${c.why}</p>
      <div class="details">
        <pre><code>${c.code}</code></pre>
      </div>
    `;
    div.onclick = () => div.classList.toggle("active");
    caseList.appendChild(div);
  });
}






