const memberData = {
    'SK': {
        name: "Sourabh Kakarambi",
        creds: "Roll No: 426<br>USN: 01fe24bcs289<br>Div: D",
        color: "#00f3ff",
        projects: [
            { title: "Network Routing", desc: "Optimizing city data traffic using Dijkstra's algorithm." },
            { title: "Structural Analysis", desc: "Evaluating infrastructure durability via graph theory." }
        ]
    },
    'BA': {
        name: "Bilal Asangi",
        creds: "Roll No: 416<br>USN: 01fe24bcs279<br>Div: D",
        color: "#0eff00",
        projects: [
            { title: "Waste Management", desc: "Dynamic scheduling for urban sanitation systems." },
            { title: "Resource Mapping", desc: "Spatial data management for utility distribution." }
        ]
    },
    'ZS': {
        name: "Zayed Soudagar",
        creds: "Roll No: 435<br>USN: 01fe24bcs298<br>Div: D",
        color: "#9d00ff",
        projects: [
            { title: "Public Transit", desc: "Algorithmic load balancing for smart bus networks." },
            { title: "Security Protocols", desc: "Implementing secure authentication for smart devices." }
        ]
    }
};

function openMember(id) {
    const data = memberData[id];
    const dashboard = document.getElementById('dashboard');
    const memberView = document.getElementById('member-view');
    
    // Set Profile Data
    document.getElementById('detail-name').innerText = data.name;
    document.getElementById('detail-creds').innerHTML = data.creds;
    
    const avatar = document.getElementById('detail-avatar');
    avatar.innerText = id;
    avatar.style.borderColor = data.color;
    avatar.style.color = data.color;
    avatar.style.boxShadow = `0 0 20px ${data.color}33`;

    // Projects
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    data.projects.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'system-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.borderTop = `2px solid ${data.color}`;
        card.innerHTML = `
            <h4 style="color: ${data.color}; font-family: 'Orbitron'; margin-bottom: 10px;">${p.title}</h4>
            <p style="color: #94a3b8; font-size: 0.85rem;">${p.desc}</p>
        `;
        container.appendChild(card);
    });

    dashboard.style.display = 'none';
    memberView.style.display = 'block';
    window.scrollTo(0,0);
}

function closeMember() {
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('member-view').style.display = 'none';
}
