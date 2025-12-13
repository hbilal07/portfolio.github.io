const memberData = {   
    'SK': {
        name: "Sourabh Kakarambi",
        creds: "Roll No: 426<br>USN: 01fe24bcs289<br>Division: D",
        projects: [
            {
                title: "Traffic Synchronization",
                desc: "Adaptive signal control using graph-based scheduling to minimize congestion at intersections."
            },
            {
                title: "Urban Network Planning",
                desc: "Graph theory and spatial algorithms to optimize infrastructure layout across city zones."
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
                Optimizes city-wide traffic flow by dynamically computing shortest paths.
                <br><br>
                <b>Algorithm:</b> Dijkstra’s Algorithm<br>
                <b>Data Structures:</b> Graph, Priority Queue<br>
                <b>DAA Relevance:</b> Efficient shortest-path computation reduces congestion and travel time.
                `
            },

            {
                title: "2. Waste Collection Optimization",
                desc: `
                Designs optimal garbage collection routes to minimize fuel cost and time.
                <br><br>
                <b>Algorithm:</b> Greedy Algorithm<br>
                <b>Data Structures:</b> Min-Heap, Graph<br>
                <b>DAA Relevance:</b> Greedy choice ensures near-optimal routing with low complexity.
                `
            },

            {
                title: "3. Emergency Response Routing",
                desc: `
                Ensures fastest ambulance and fire-service routes during emergencies.
                <br><br>
                <b>Algorithm:</b> BFS / Dijkstra’s Algorithm<br>
                <b>Data Structures:</b> Queue, Graph<br>
                <b>DAA Relevance:</b> Time-critical routing using optimal traversal strategies.
                `
            },

            {
                title: "7. Smart Energy Distribution System",
                desc: `
                Balances energy load across city grids to avoid overload and power loss.
                <br><br>
                <b>Algorithm:</b> Dynamic Programming<br>
                <b>Data Structures:</b> Arrays, Graphs<br>
                <b>DAA Relevance:</b> Optimal substructure enables efficient energy allocation.
                `
            },

            {
                title: "12. Public Safety Monitoring & Alerts",
                desc: `
                Detects and alerts authorities about incidents using connected surveillance nodes.
                <br><br>
                <b>Algorithm:</b> BFS / DFS<br>
                <b>Data Structures:</b> Graph, Adjacency List<br>
                <b>DAA Relevance:</b> Fast traversal ensures quick incident detection and response.
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
                desc: "Optimized emergency service allocation using shortest-path and priority scheduling algorithms."
            },
            {
                title: "IoT Network Security",
                desc: "Multi-layer security architecture using graph traversal and anomaly detection."
            }
        ]
    }
};

function createAnimatedParticles() {
    const container = document.querySelector('.particles-container');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: radial-gradient(circle, #8686AC 0%, transparent 70%);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${15 + Math.random() * 10}s linear infinite;
            animation-delay: ${Math.random() * 10}s;
        `;
        container.appendChild(particle);
    }
}

function openMember(id) {
    const data = memberData[id];
    const dashboard = document.getElementById('dashboard');
    const memberView = document.getElementById('member-view');
    
    document.getElementById('detail-name').innerText = data.name;
    document.getElementById('detail-creds').innerHTML = data.creds;
    document.getElementById('detail-initials').innerText = id;

    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    data.projects.forEach((p, index) => {
        setTimeout(() => {
            container.innerHTML += `
                <div class="project-card">
                    <h4>${p.title}</h4>
                    <p>${p.desc}</p>
                </div>
            `;
        }, index * 150);
    });

    dashboard.style.transition = 'opacity 0.8s cubic-bezier(0.23, 1, 0.320, 1)';
    dashboard.style.opacity = '0';
    
    setTimeout(() => {
        dashboard.style.display = 'none';
        memberView.style.display = 'block';
        memberView.style.opacity = '0';
        setTimeout(() => {
            memberView.style.opacity = '1';
            window.scrollTo({top: 0, behavior: 'smooth'});
        }, 50);
    }, 800);
}

function closeMember() {
    const dashboard = document.getElementById('dashboard');
    const memberView = document.getElementById('member-view');
    
    memberView.style.opacity = '0';
    
    setTimeout(() => {
        memberView.style.display = 'none';
        dashboard.style.display = 'block';
        dashboard.style.opacity = '0';
        setTimeout(() => {
            dashboard.style.opacity = '1';
        }, 50);
    }, 400);
}

// Mouse parallax for cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card-glass');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    cards.forEach((card, index) => {
        const speed = (index + 1) * 0.02;
        const xMove = (mouseX - 0.5) * speed * 20;
        const yMove = (mouseY - 0.5) * speed * 20;
        card.style.transform = `translate(${xMove}px, ${yMove}px) translateY(-8px) scale(1.01)`; 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    createAnimatedParticles();
});
