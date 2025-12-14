/* ===================== DATA ===================== */
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

/* ===================== DIJKSTRA ===================== */
{
title: "1. Smart Traffic Management System",
desc: `
<b>Algorithm:</b> Dijkstra’s Algorithm<br>
<b>Data Structure:</b> Cost Matrix, Arrays<br><br>

<details>
<summary><b>View Code</b></summary>
<pre><code>
#include <iostream>
using namespace std;
#define MAXN 100
#define INF 999

int main() {
    int n, source;
    int cost[MAXN][MAXN], dist[MAXN], path[MAXN], visited[MAXN];

    cout << "Enter number of vertices: ";
    cin >> n;

    cout << "Enter cost matrix (999 for infinity):\\n";
    for(int i=0;i<n;i++)
        for(int j=0;j<n;j++)
            cin >> cost[i][j];

    cout << "Enter source vertex: ";
    cin >> source;

    for(int i=0;i<n;i++){
        dist[i]=cost[source][i];
        path[i]=source;
        visited[i]=0;
    }

    visited[source]=1;

    for(int count=0;count<n-1;count++){
        int u=-1, min=INF;
        for(int i=0;i<n;i++)
            if(!visited[i] && dist[i]<min){
                min=dist[i];
                u=i;
            }

        if(u==-1) break;
        visited[u]=1;

        for(int v=0;v<n;v++)
            if(!visited[v] && cost[u][v]!=INF)
                if(dist[u]+cost[u][v]<dist[v]){
                    dist[v]=dist[u]+cost[u][v];
                    path[v]=u;
                }
    }

    cout<<"\\nVertex Distance Path\\n";
    for(int i=0;i<n;i++)
        cout<<i<<"\\t"<<dist[i]<<"\\t"<<path[i]<<"\\n";

    return 0;
}
</code></pre>
</details>
`
},

/* ===================== BFS ===================== */
{
title: "2. Emergency Response Routing",
desc: `
<b>Algorithm:</b> Breadth First Search (BFS)<br>
<b>Data Structure:</b> Adjacency Matrix, Queue<br><br>

<details>
<summary><b>View Code</b></summary>
<pre><code>
#include <iostream>
using namespace std;

void bfs(int m[10][10], int v, int source) {
    int queue[20], front=0, rear=0;
    int visited[10];

    for(int i=0;i<v;i++)
        visited[i]=0;

    queue[rear]=source;
    visited[source]=1;

    cout<<"BFS Traversal:\\n";

    while(front<=rear){
        int u=queue[front++];
        cout<<u<<"\\t";

        for(int i=0;i<v;i++){
            if(m[u][i]==1 && visited[i]==0){
                visited[i]=1;
                queue[++rear]=i;
            }
        }
    }
}

int main(){
    int v=5;
    int m[10][10]={
        {0,1,1,0,0},
        {1,0,0,1,1},
        {1,0,0,0,1},
        {0,1,0,0,0},
        {0,1,1,0,0}
    };

    int source;
    cout<<"Enter source: ";
    cin>>source;

    bfs(m,v,source);
    return 0;
}
</code></pre>
</details>
`
},

/* ===================== DFS ===================== */
{
title: "3. Public Safety Monitoring",
desc: `
<b>Algorithm:</b> Depth First Search (DFS)<br>
<b>Data Structure:</b> Adjacency Matrix, Recursion<br><br>

<details>
<summary><b>View Code</b></summary>
<pre><code>
#include <iostream>
using namespace std;

int v=5;
int visited[10];

void dfs(int m[10][10], int source){
    visited[source]=1;

    for(int i=0;i<v;i++){
        if(m[source][i]==1 && visited[i]==0){
            cout<<i<<"\\t";
            dfs(m,i);
        }
    }
}

int main(){
    int m[10][10]={
        {0,1,1,0,0},
        {1,0,0,1,1},
        {1,0,0,0,1},
        {0,1,0,0,0},
        {0,1,1,0,0}
    };

    for(int i=0;i<v;i++)
        visited[i]=0;

    int source;
    cout<<"Enter source: ";
    cin>>source;

    cout<<"DFS Traversal:\\n";
    cout<<source<<"\\t";
    dfs(m,source);
    return 0;
}
</code></pre>
</details>
`
},

/* ===================== GREEDY ===================== */
{
title: "4. Waste Collection Optimization",
desc: `
<b>Algorithm:</b> Greedy Algorithm<br>
<b>Data Structure:</b> Arrays<br><br>

<details>
<summary><b>View Code</b></summary>
<pre><code>
#include <iostream>
using namespace std;

int main(){
    int bins[5]={20,5,15,30,10};
    int n=5;

    for(int i=0;i<n-1;i++)
        for(int j=i+1;j<n;j++)
            if(bins[i]>bins[j]){
                int t=bins[i];
                bins[i]=bins[j];
                bins[j]=t;
            }

    cout<<"Optimized Collection Order:\\n";
    for(int i=0;i<n;i++)
        cout<<bins[i]<<"\\t";

    return 0;
}
</code></pre>
</details>
`
},

/* ===================== DP ===================== */
{
title: "5. Smart Energy Distribution",
desc: `
<b>Algorithm:</b> Dynamic Programming<br>
<b>Data Structure:</b> Arrays<br><br>

<details>
<summary><b>View Code</b></summary>
<pre><code>
#include <iostream>
using namespace std;

int main(){
    int load[5]={4,2,7,1,3};
    int dp[5];

    dp[0]=load[0];

    for(int i=1;i<5;i++){
        if(dp[i-1]+load[i]<load[i])
            dp[i]=dp[i-1]+load[i];
        else
            dp[i]=load[i];
    }

    cout<<"Optimized Energy Load: "<<dp[4];
    return 0;
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

/* ===================== FUNCTIONS ===================== */
function openMember(id){
    if(!memberData[id]) return;

    const data=memberData[id];
    document.getElementById('detail-name').innerText=data.name;
    document.getElementById('detail-creds').innerHTML=data.creds;
    document.getElementById('detail-initials').innerText=id;

    const container=document.getElementById('projects-container');
    container.innerHTML='';

    data.projects.forEach(p=>{
        container.innerHTML+=`
        <div class="project-card">
            <h4>${p.title}</h4>
            <div class="project-desc">${p.desc}</div>
        </div>`;
    });

    document.getElementById('dashboard').style.display='none';
    document.getElementById('member-view').style.display='block';
    window.scrollTo({top:0,behavior:'smooth'});
}

function closeMember(){
    document.getElementById('member-view').style.display='none';
    document.getElementById('dashboard').style.display='block';
}

/* ===================== PARTICLES ===================== */
function createAnimatedParticles(){
    const container=document.querySelector('.particles-container');
    if(!container) return;

    for(let i=0;i<40;i++){
        const p=document.createElement('div');
        p.style.cssText=`
        position:absolute;
        width:2px;height:2px;
        background:#8686AC;
        border-radius:50%;
        left:${Math.random()*100}%;
        top:${Math.random()*100}%;
        animation: floatLayers 20s linear infinite;
        `;
        container.appendChild(p);
    }
}

document.addEventListener('DOMContentLoaded', createAnimatedParticles);


