const memberData = {
    'SK': {
        name: "Sourabh Kakarambi",
        creds: "Roll No: 426<br>USN: 01fe24bcs289<br>Division: D",
        projects: [
            {
                title: "Traffic Synchronization",
                desc: "Adaptive signal control using graph-based scheduling to minimize congestion."
            },
            {
                title: "Urban Network Planning",
                desc: "Graph-based utility and infrastructure planning."
            }
        ]
    },

    'BA': {
        name: "Bilal Asangi",
        creds: "Roll No: 435<br>USN: 01fe24bcs298<br>Division: D",
        projects: [

            {
                title: "1. Smart Traffic Management System",
                desc: `
<b>Algorithm:</b> Dijkstra’s Algorithm<br>
<b>Data Structures:</b> Graph, Priority Queue<br><br>
Optimizes shortest routes across city roads.
<br><br>
<details>
<summary><b>View Code</b></summary>
<pre><code>
// Dijkstra's Algorithm
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

#define INF 1e9

void dijkstra(int src, vector<vector<pair<int,int>>> &graph) {
    vector<int> dist(graph.size(), INF);
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;

    dist[src] = 0;
    pq.push({0, src});

    while(!pq.empty()) {
        int u = pq.top().second;
        pq.pop();

        for(auto edge : graph[u]) {
            int v = edge.first, w = edge.second;
            if(dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
}
</code></pre>
</details>
`
            },

            {
                title: "2. Waste Collection Optimization",
                desc: `
<b>Algorithm:</b> Greedy Algorithm<br>
<b>Data Structures:</b> Min-Heap<br><br>
Minimizes fuel usage during waste collection.
<br><br>
<details>
<summary><b>View Code</b></summary>
<pre><code>
// Greedy selection
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> bins = {10, 20, 30};
    sort(bins.begin(), bins.end());
    cout << "Optimized collection order selected";
}
</code></pre>
</details>
`
            },

            {
                title: "3. Emergency Response Routing",
                desc: `
<b>Algorithm:</b> BFS<br>
<b>Data Structures:</b> Queue, Graph<br><br>
Ensures fastest emergency routing.
<br><br>
<details>
<summary><b>View Code</b></summary>
<pre><code>
// BFS traversal
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

void bfs(int start, vector<vector<int>>& graph) {
    vector<bool> visited(graph.size(), false);
    queue<int> q;
    q.push(start);
    visited[start] = true;

    while(!q.empty()) {
        int u = q.front(); q.pop();
        for(int v : graph[u]) {
            if(!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}
</code></pre>
</details>
`
            },

            {
                title: "7. Smart Energy Distribution",
                desc: `
<b>Algorithm:</b> Dynamic Programming<br>
<b>Data Structures:</b> Arrays<br><br>
Optimizes load distribution.
<br><br>
<details>
<summary><b>View Code</b></summary>
<pre><code>
// DP for load balancing
#include <iostream>
using namespace std;

int main() {
    int load[5] = {4, 2, 7, 1, 3};
    int dp[5];
    dp[0] = load[0];

    for(int i = 1; i < 5; i++)
        dp[i] = min(dp[i-1] + load[i], load[i]);

    cout << "Optimized energy flow calculated";
}
</code></pre>
</details>
`
            },

            {
                title: "12. Public Safety Monitoring",
                desc: `
<b>Algorithm:</b> DFS<br>
<b>Data Structures:</b> Graph<br><br>
Fast incident detection.
<br><br>
<details>
<summary><b>View Code</b></summary>
<pre><code>
// DFS traversal
#include <iostream>
#include <vector>
using namespace std;

void dfs(int u, vector<vector<int>>& graph, vector<bool>& visited) {
    visited[u] = true;
    for(int v : graph[u])
        if(!visited[v])
            dfs(v, graph, visited);
}
</code></pre>
</details>
`
            }

        ]
    },

    'ZS': {
        name: "Zayed Soudagar",
        creds: "Roll No: 416<br>USN: 01fe24bcs279<br>Division: D",
        projects: [
            {
                title: "Emergency Coordination",
                desc: "Emergency service optimization."
            },
            {
                title: "IoT Security",
                desc: "Secure smart infrastructure."
            }
        ]
    }
};

/* -------- EXISTING FUNCTIONS (UNCHANGED) -------- */

function createAnimatedParticles() {
    const container = document.querySelector('.particles-container');
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.style.cssText = `
            position:absolute;width:2px;height:2px;
            background:#8686AC;border-radius:50%;
            left:${Math.random()*100}%;
            top:${Math.random()*100}%;
            animation: floatLayers 20s linear infinite;
        `;
        container.appendChild(p);
    }
}

function openMember(id) {
    const data = memberData[id];
    document.getElementById('detail-name').innerText = data.name;
    document.getElementById('detail-creds').innerHTML = data.creds;
    document.getElementById('detail-initials').innerText = id;

    const container = document.getElementById('projects-container');
    container.innerHTML = '';

    data.projects.forEach(p => {
        container.innerHTML += `
            <div class="project-card">
                <h4>${p.title}</h4>
                <p>${p.desc}</p>
            </div>
        `;
    });

    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('member-view').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeMember() {
    document.getElementById('member-view').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', createAnimatedParticles);
