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

// ====== DATA OBJECT (Bilal + Sourabh) ======
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
      {
        title: "Urban Road Maintenance and Asset Management",
        algo: "Segment Tree",
        why: "Supports efficient range damage queries and updates for road conditions across zones.",
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

int query(int node, int start, int end, int l, int r) {
    if(r < start || l > end) return 0;
    if(l <= start && end <= r) return seg[node];
    int mid = (start + end) / 2;
    return query(2*node, start, mid, l, r) +
           query(2*node+1, mid+1, end, l, r);
}

int main() {
    int roadDamage[] = {4, 6, 3, 7, 2};
    build(roadDamage, 1, 0, 4);
    cout << query(1, 0, 4, 1, 3);
}`
      },
      {
        title: "Water Supply and Wastewater Management",
        algo: "BFS",
        why: "Checks water reachability across pipeline networks level by level.",
        code: `#include <iostream>
using namespace std;

void bfs(int graph[10][10], int n, int source) {
    int q[10], front = 0, rear = 0;
    int visited[10] = {0};

    q[rear++] = source;
    visited[source] = 1;

    while(front < rear) {
        int u = q[front++];
        cout << u << " ";
        for(int v = 0; v < n; v++) {
            if(graph[u][v] && !visited[v]) {
                visited[v] = 1;
                q[rear++] = v;
            }
        }
    }
}

int main() {
    int pipes[10][10] = {
        {0,1,1,0},
        {1,0,0,1},
        {1,0,0,1},
        {0,1,1,0}
    };
    bfs(pipes, 4, 0);
}`
      },
      {
        title: "Smart Energy Grid Management",
        algo: "Prim’s Algorithm",
        why: "Minimizes total power cable installation cost using MST.",
        code: `#include <iostream>
using namespace std;

#define INF 999

int main() {
    int n = 4;
    int cost[4][4] = {
        {INF,10,6,INF},
        {10,INF,5,15},
        {6,5,INF,4},
        {INF,15,4,INF}
    };

    int visited[4] = {1,0,0,0};
    int minCost = 0;

    for(int e = 0; e < n-1; e++) {
        int min = INF, x = -1, y = -1;
        for(int i = 0; i < n; i++)
            if(visited[i])
                for(int j = 0; j < n; j++)
                    if(!visited[j] && cost[i][j] < min) {
                        min = cost[i][j];
                        x = i; y = j;
                    }
        if(y != -1) {
          visited[y] = 1;
          minCost += min;
        }
    }

    cout << minCost;
}`
      },
      {
        title: "Solid Waste Collection and Recycling Optimization",
        algo: "Dijkstra",
        why: "Finds shortest collection routes to reduce fuel and time.",
        code: `#include <iostream>
using namespace std;

#define INF 999

int main() {
    int n = 5;
    int cost[5][5] = {
        {0,4,INF,INF,8},
        {4,0,2,INF,5},
        {INF,2,0,6,INF},
        {INF,INF,6,0,3},
        {8,5,INF,3,0}
    };

    int dist[5], visited[5] = {0};
    for(int i = 0; i < n; i++) dist[i] = INF;
    dist[0] = 0;

    for(int i = 0; i < n; i++) {
        int u = -1, min = INF;
        for(int j = 0; j < n; j++)
            if(!visited[j] && dist[j] < min) {
                min = dist[j];
                u = j;
            }
        if(u == -1) break;
        visited[u] = 1;
        for(int v = 0; v < n; v++)
            if(cost[u][v] != INF && dist[u] + cost[u][v] < dist[v])
                dist[v] = dist[u] + cost[u][v];
    }

    for(int i = 0; i < n; i++)
        cout << dist[i] << " ";
}`
      },
      {
        title: "Public Transport Scheduling and Optimization",
        algo: "Min Heap",
        why: "Efficiently selects next bus/train with earliest departure.",
        code: `#include <iostream>
using namespace std;

int heap[20], size = 0;

void insert(int time) {
    heap[++size] = time;
    int i = size;
    while(i > 1 && heap[i] < heap[i/2]) {
        swap(heap[i], heap[i/2]);
        i /= 2;
    }
}

int main() {
    insert(15);
    insert(5);
    insert(25);
    cout << heap[1];
}`
      },
      {
        title: "Emergency Response and Disaster Management",
        algo: "DFS",
        why: "Identifies all affected zones from a disaster source.",
        code: `#include <iostream>
using namespace std;

int city[10][10], visited[10];

void dfs(int u, int n) {
    visited[u] = 1;
    cout << u << " ";
    for(int i = 0; i < n; i++)
        if(city[u][i] && !visited[i])
            dfs(i, n);
}

int main() {
    int n = 5;
    int temp[5][5] = {
        {0,1,0,0,1},
        {1,0,1,0,0},
        {0,1,0,1,0},
        {0,0,1,0,1},
        {1,0,0,1,0}
    };

    for(int i=0;i<n;i++)
        for(int j=0;j<n;j++)
            city[i][j] = temp[i][j];

    for(int i=0;i<n;i++) visited[i] = 0;
    dfs(0, n);
}`
      },
      {
        title: "Smart Parking – Slot Allocation System",
        algo: "Queue",
        why: "Implements first-come-first-served slot allocation.",
        code: `#include <iostream>
using namespace std;

int main() {
    int q[10], front = 0, rear = 0;

    q[rear++] = 201;
    q[rear++] = 202;

    cout << q[front++];
}`
      },
      {
        title: "Environmental Monitoring and Climate Resilience",
        algo: "Fenwick Tree (Binary Indexed Tree)",
        why: "Efficient pollution level updates and range queries.",
        code: `#include <iostream>
using namespace std;

int BIT[10], n = 5;

void update(int i, int val) {
    while(i <= n) {
        BIT[i] += val;
        i += (i & -i);
    }
}

int query(int i) {
    int sum = 0;
    while(i > 0) {
        sum += BIT[i];
        i -= (i & -i);
    }
    return sum;
}

int main() {
    update(1, 40);
    update(2, 30);
    update(3, 20);

    cout << query(3);
}`
      }
    ]
  }
};
  
  ZS: {
    name: "Zayed Soudagar",
    cases: [
      {
        title: "Smart Building Elevator Scheduling System",
        algo: "Priority Queue",
        why: "Efficiently schedules elevator stops based on floor requests.",
        code: `#include <iostream>
#include <queue>
using namespace std;

int main() {
    priority_queue<int, vector<int>, greater<int>> requests;

    requests.push(7);
    requests.push(3);
    requests.push(10);

    cout << "Next elevator stop: Floor " << requests.top();
}`
      },
      {
        title: "Urban Noise Pollution Detection & Control System",
        algo: "Sliding Window",
        why: "Detects high noise levels using average over a moving window.",
        code: `#include <iostream>
using namespace std;

int main() {
    int noise[] = {55, 70, 85, 90, 60};
    int n = 5, window = 3;

    for(int i = 0; i <= n - window; i++) {
        int avg = 0;
        for(int j = i; j < i + window; j++)
            avg += noise[j];

        avg /= window;
        if(avg > 80)
            cout << "High Noise Alert at Window " << i << endl;
    }
}`
      },
      {
        title: "Smart Water Tank Level Monitoring System",
        algo: "Queue",
        why: "Monitors water levels sequentially and controls motor accordingly.",
        code: `#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<int> waterLevels;

    waterLevels.push(40);
    waterLevels.push(85);
    waterLevels.push(95);

    while(!waterLevels.empty()) {
        int level = waterLevels.front();
        waterLevels.pop();

        if(level > 90)
            cout << "Stop Motor (Overflow Risk)\\n";
        else if(level < 50)
            cout << "Start Motor (Low Water)\\n";
    }
}`
      },
      {
        title: "City-Wide Lost & Found Item Management System",
        algo: "Hash Table",
        why: "Fast lookup of lost items using unique claim IDs.",
        code: `#include <iostream>
#include <unordered_map>
using namespace std;

int main() {
    unordered_map<int, string> lostItems;

    lostItems[101] = "Wallet";
    lostItems[102] = "Phone";

    int claimID = 101;

    if(lostItems.find(claimID) != lostItems.end())
        cout << "Item Found: " << lostItems[claimID];
    else
        cout << "No Match Found";
}`
      },
      {
        title: "Smart Queue Management for Government Offices",
        algo: "Circular Queue",
        why: "Implements efficient citizen service queueing.",
        code: `#include <iostream>
using namespace std;

int main() {
    int queue[5], front = 0, rear = 0;

    queue[rear++] = 201;
    queue[rear++] = 202;

    cout << "Serving Citizen ID: " << queue[front++];
}`
      },
      {
        title: "Urban Food Supply Chain Distribution System",
        algo: "Greedy Allocation",
        why: "Allocates food stock to zones based on demand until exhausted.",
        code: `#include <iostream>
using namespace std;

int main() {
    int demand[] = {30, 20, 40};
    int stock = 70;

    for(int i = 0; i < 3; i++) {
        if(stock >= demand[i]) {
            stock -= demand[i];
            cout << "Zone " << i << " fully supplied\\n";
        } else {
            cout << "Zone " << i << " partially supplied\\n";
            break;
        }
    }
}`
      },
      {
        title: "Smart City Advertisement Billboard Allocation System",
        algo: "Selection Sort",
        why: "Allocates billboard to highest bidder using sorting.",
        code: `#include <iostream>
using namespace std;

int main() {
    int bids[] = {500, 1200, 800};
    int n = 3;

    for(int i = 0; i < n - 1; i++) {
        int max = i;
        for(int j = i + 1; j < n; j++)
            if(bids[j] > bids[max])
                max = j;

        swap(bids[i], bids[max]);
    }

    cout << "Highest Bid Allocated: " << bids[0];
}`
      },
      {
        title: "City Vehicle Emission Testing & Compliance System",
        algo: "Binary Search",
        why: "Checks vehicle compliance efficiently using binary search.",
        code: `#include <iostream>
using namespace std;

int main() {
    int vehicles[] = {1001, 1005, 1010, 1020};
    int key = 1010;
    int low = 0, high = 3;

    while(low <= high) {
        int mid = (low + high) / 2;
        if(vehicles[mid] == key) {
            cout << "Vehicle Compliant";
            return 0;
        }
        if(vehicles[mid] < key)
            low = mid + 1;
        else
            high = mid - 1;
    }
    cout << "Vehicle Not Found";
}`
      }
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
