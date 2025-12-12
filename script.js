const memberData = {
    'SK': {
        name: "Sourabh Kakarambi",
        creds: "Roll No: 426<br>USN: 01fe24bcs289<br>Division: D",
        projects: [
            { title: "Traffic Synchronization", desc: "Developing adaptive signal control algorithms to minimize urban congestion." },
            { title: "Graph-Based Planning", desc: "Using graph theory to map efficient utility networks across residential sectors." }
        ]
    },
    'BA': {
        name: "Bilal Asangi",
        creds: "Roll No: 416<br>USN: 01fe24bcs279<br>Division: D",
        projects: [
            { title: "Water Distribution", desc: "Optimizing flow pressure in city pipelines using network flow algorithms." },
            { title: "Grid Sustainability", desc: "Monitoring resource consumption patterns for sustainable infrastructure." }
        ]
    },
    'ZS': {
        name: "Zayed Soudagar",
        creds: "Roll No: 435<br>USN: 01fe24bcs298<br>Division: D",
        projects: [
            { title: "Emergency Response", desc: "Optimizing dispatch routes for emergency services using shortest-path logic." },
            { title: "Network Security", desc: "Securing smart city IoT devices against external data threats." }
        ]
    }
};

function openMember(id) {
    const data = memberData[id];
    const dashboard = document.getElementById('dashboard');
    const memberView = document.getElementById('member-view');
    
    // Fill content
    document.getElementById('detail-name').innerText = data.name;
    document.getElementById('detail-creds').innerHTML = data.creds;
    document.getElementById('detail-initials').innerText = id;

    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    data.projects.forEach(p => {
        container.innerHTML += `
            <div class="project-card">
                <h4 style="font-family: 'Cinzel'; margin-bottom: 10px;">${p.title}</h4>
                <p style="font-size: 0.85rem; color: #94a3b8; line-height: 1.6;">${p.desc}</p>
            </div>
        `;
    });

    // Toggle views with fade
    dashboard.style.opacity = '0';
    setTimeout(() => {
        dashboard.style.display = 'none';
        memberView.style.display = 'block';
        memberView.style.opacity = '1';
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, 300);
}

function closeMember() {
    const dashboard = document.getElementById('dashboard');
    const memberView = document.getElementById('member-view');
    
    memberView.style.display = 'none';
    dashboard.style.display = 'block';
    dashboard.style.opacity = '1';
}
