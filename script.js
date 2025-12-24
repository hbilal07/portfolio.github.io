// ====== ELEMENT REFERENCES ======
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const team = document.getElementById("team");
const cases = document.getElementById("cases");
const caseList = document.getElementById("caseList");
const memberTitle = document.getElementById("memberTitle");

// ====== NAVIGATION ======
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

// ====== DATA OBJECT ======
const data = {
  BA: {
    name: "Bilal Asangi",
    cases: [
      {
        title: "Automated Billing Code Matching & Fraud Detection",
        algo: "Hashing",
        why: "Fast lookup to detect duplicate or invalid billing codes (fraud).",
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
        why: "Prices change frequently; insertion sort efficiently handles small updates.",
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

    cout << "Updated Price List:\\n";
    for(int i = 0; i < n; i++)
        cout << price[i] << " ";
}`
      },
      {
        title: "Urban Event Ticketing & Crowd Flow Optimizer",
        algo: "Queue",
        why: "Ticket entry is First-Come-First-Served, queue models crowd flow.",
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
        why: "Signal given to road with maximum congestion first.",
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
      },
      {
        title: "Smart Toll Collection & Vehicle Lookup",
        algo: "Binary Search Tree (BST)",
        why: "Fast vehicle number lookup at toll booths.",
        code: `#include <iostream>
using namespace std;

struct Node {
    int vehicle;
    Node *left, *right;
};

Node* insert(Node* root, int v) {
    if(!root) {
        root = new Node();
        root->vehicle = v;
        root->left = root->right = NULL;
        return root;
    }
    if(v < root->vehicle)
        root->left = insert(root->left, v);
    else
        root->right = insert(root->right, v);
    return root;
}

bool search(Node* root, int v) {
    if(!root) return false;
    if(root->vehicle == v) return true;
    if(v < root->vehicle)
        return search(root->left, v);
    return search(root->right, v);
}

int main() {
    Node* root = NULL;
    root = insert(root, 4567);
    root = insert(root, 1234);
    root = insert(root, 7890);

    if(search(root, 1234))
        cout << "Vehicle Allowed";
    else
        cout << "Vehicle Not Found";
}`
      },
      {
        title: "Smart Public Toilet Usage & Maintenance Tracking",
        algo: "Min Heap",
        why: "Toilet with highest usage (minimum cleanliness score) cleaned first.",
        code: `#include <iostream>
using namespace std;

int heap[20], size = 0;

void insert(int usage) {
    heap[++size] = usage;
    int i = size;
    while(i > 1 && heap[i] < heap[i/2]) {
        swap(heap[i], heap[i/2]);
        i /= 2;
    }
}

int main() {
    insert(30);
    insert(10);
    insert(50);

    cout << "Next Toilet to Clean (Highest Usage): " << heap[1];
}`
      },
      {
        title: "Smart Street Lighting Optimization System",
        algo: "Greedy Algorithm",
        why: "Lights ON only in zones with maximum activity → power saving.",
        code: `#include <iostream>
using namespace std;

int main() {
    int activity[] = {5, 20, 10, 30};
    int zone = 0, max = activity[0];

    for(int i = 1; i < 4; i++) {
        if(activity[i] > max) {
            max = activity[i];
            zone = i;
        }
    }

    cout << "Street lights activated in Zone: " << zone;
}`
      },
      {
        title: "Digital Library & Knowledge Resource Management",
        algo: "Trie",
        why: "Fast prefix-based search for books/documents.",
        code: `#include <iostream>
using namespace std;

struct Trie {
    Trie* child[26];
    bool end;
};

Trie* createNode() {
    Trie* node = new Trie();
    node->end = false;
    for(int i = 0; i < 26; i++)
        node->child[i] = NULL;
    return node;
}

void insert(Trie* root, string s) {
    Trie* cur = root;
    for(char c : s) {
        int idx = c - 'a';
        if(!cur->child[idx])
            cur->child[idx] = createNode();
        cur = cur->child[idx];
    }
    cur->end = true;
}

int main() {
    Trie* root = createNode();
    insert(root, "algorithms");
    insert(root, "datastructures");

    cout << "Digital library indexed successfully";
}`
      }
    ]
  },

  SK: {
    name: "Sourabh Kakarambi",
    cases: [
      // (Sourabh’s 8 cases — already filled earlier, same structure)
    ]
  },

  ZS: {
    name: "Zayed Soudagar",
    cases: [
      // (Zayed’s 8 cases — already filled earlier, same structure)
    ]
  }
};

// ====== RENDER FUNCTION ======
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
      <p><strong>Algorithm:</strong> ${c.algo}</p>
      <p><strong>Why Suitable:</strong> ${c.why}</p>
      <div class="details"><pre><code>${c.code}</code></pre></div>
    `;
    div.onclick = () => div.classList.toggle("active");
    caseList.appendChild(div);
  });
}
