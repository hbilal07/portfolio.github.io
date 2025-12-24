const data = {
  bilal: [
    {
      title: "Automated Billing Code Matching & Fraud Detection",
      algo: "Hashing",
      code: `#include <stdio.h>
int hash(int x){ return x % 50; }
int main(){
  int bills[] = {1201,1350,1201,1480};
  printf("Duplicate detected");
}`
    },
    {
      title: "Supermarket Dynamic Pricing Engine",
      algo: "Insertion Sort",
      code: `void insertionSort(int a[], int n){
  for(int i=1;i<n;i++){
    int key=a[i],j=i-1;
    while(j>=0 && a[j]>key){
      a[j+1]=a[j]; j--;
    }
    a[j+1]=key;
  }
}`
    }
  ],

  sourabh: [
    {
      title: "Urban Event Ticketing & Crowd Flow",
      algo: "Queue",
      code: `enqueue(ticket);
dequeue(ticket);`
    },
    {
      title: "Traffic Signal Optimization",
      algo: "Greedy",
      code: `select road with maximum congestion first;`
    }
  ]
};

function loadMember(member) {
  const container = document.getElementById("businessContainer");
  container.innerHTML = "";

  data[member].forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "case";

    div.innerHTML = `
      <h3>${item.title}</h3>
      <p><b>Algorithm:</b> ${item.algo}</p>
      <button class="toggle-btn" data-index="${index}">View Code</button>
      <pre>${item.code}</pre>
    `;

    container.appendChild(div);
  });
}

// EVENT DELEGATION — THIS IS WHY IT WORKS
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("toggle-btn")) {
    const pre = e.target.nextElementSibling;
    pre.style.display = pre.style.display === "block" ? "none" : "block";
  }
});

