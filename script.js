const memberData = {
    'LB': {
        name: "Lahari Bankar",
        role: "PROJECT LEAD",
        color: "#00f3ff",
        projects: [
            { title: "Tourism Map", desc: "Shortest path city routing." },
            { title: "Temple Grid", desc: "Crowd management logic." }
        ]
    },
    'PA': {
        name: "Pavitra Adur",
        role: "ALGO ARCHITECT",
        color: "#ff0055",
        projects: [
            { title: "Hospital Ops", desc: "Emergency response optimization." },
            { title: "Smart Schools", desc: "Resource allocation algorithms." }
        ]
    },
    'SP': {
        name: "Sharanagouda P",
        role: "DATABASE DEV",
        color: "#0aff00",
        projects: [
            { title: "Water Supply", desc: "Flow analysis & leak detection." },
            { title: "Waste Mgmt", desc: "Collection route optimization." }
        ]
    },
    'SG': {
        name: "SandeepaGouda",
        role: "INTERFACE DEV",
        color: "#bc13fe",
        projects: [
            { title: "Power Grid", desc: "Load balancing algorithms." },
            { title: "Traffic AI", desc: "Signal timing optimization." }
        ]
    }
};

// 1. Loading Screen Logic
window.addEventListener('DOMContentLoaded', () => {
    const logs = ["BOOTING...", "LOADING ASSETS...", "DECRYPTING GRID...", "ACCESS GRANTED."];
    const container = document.getElementById('log-container');
    
    logs.forEach((text, i) => {
        setTimeout(() => {
            const div = document.createElement('div');
            div.className = 'log-line';
            div.innerText = `> ${text}`;
            container.appendChild(div);
            if (i === logs.length - 1) {
                setTimeout(() => document.getElementById('loader').style.display = 'none', 1000);
            }
        }, i * 400);
    });
});

// 2. Navigation Logic (Opens the System Grid for any member)
function openMember(id) {
    const data = memberData[id];
    const dashboard = document.getElementById('dashboard');
    const memberView = document.getElementById('member-view');
    
    // Update Profile Info
    document.getElementById('detail-name').innerText = data.name;
    document.getElementById('detail-role').innerText = data.role;
    document.getElementById('detail-role').style.color = data.color;
    
    const avatar = document.getElementById('detail-avatar');
    avatar.innerText = id;
    avatar.style.borderColor = data.color;
    avatar.style.color = data.color;

    // Update Back Button Color
    document.querySelector('.nav-back').style.color = data.color;
    document.querySelector('.nav-back').style.borderColor = data.color;

    // Inject Projects
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    data.projects.forEach(p => {
        container.innerHTML += `
            <div class="system-card" style="border-left: 3px solid ${data.color}">
                <h4 style="color: ${data.color}">${p.title}</h4>
                <p style="font-size: 0.8rem; margin-top:5px; color:#888;">${p.desc}</p>
            </div>
        `;
    });

    dashboard.style.display = 'none';
    memberView.style.display = 'block';
}

function closeMember() {
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('member-view').style.display = 'none';
}
