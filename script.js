const memberData = {
    'SK': {
        name: "Sourabh Kakarambi",
        creds: "Roll No: 426<br>USN: 01fe24bcs289<br>Division: D",
        projects: [
            { title: "Traffic Synchronization", desc: "Developing adaptive signal control algorithms to minimize urban congestion and optimize traffic flow patterns." },
            { title: "Graph-Based Planning", desc: "Utilizing graph theory and spatial algorithms to design efficient utility distribution networks across residential sectors." }
        ]
    },
    'BA': {
        name: "Bilal Asangi",
        creds: "Roll No: 416<br>USN: 01fe24bcs279<br>Division: D",
        projects: [
            { title: "Water Distribution", desc: "Optimizing flow pressure and resource allocation in municipal pipelines using advanced network flow algorithms." },
            { title: "Grid Sustainability", desc: "Real-time monitoring and predictive analytics for sustainable resource consumption patterns in smart infrastructure." }
        ]
    },
    'ZS': {
        name: "Zayed Soudagar",
        creds: "Roll No: 435<br>USN: 01fe24bcs298<br>Division: D",
        projects: [
            { title: "Emergency Response", desc: "Dynamic route optimization for emergency services using real-time shortest-path algorithms and predictive modeling." },
            { title: "Network Security", desc: "Comprehensive security architecture for smart city IoT infrastructure with multi-layered threat detection systems." }
        ]
    }
};

// Enhanced particle system
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 4 + 1) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDuration = (Math.random() * 15 + 15) + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Smooth transitions with GSAP-like easing
function openMember(id) {
    const data = memberData[id];
    const dashboard = document.getElementById('dashboard');
    const memberView = document.getElementById('member-view');
    
    // Pre-fill content for smoother transition
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
        }, index * 100);
    });

    // Cinematic transition
    dashboard.style.transition = 'opacity 0.6s cubic-bezier(0.23, 1, 0.320, 1)';
    dashboard.style.opacity = '0';
    
    setTimeout(() => {
        dashboard.style.display = 'none';
        memberView.style.display = 'block';
        memberView.style.opacity = '0';
        memberView.style.transition = 'opacity 0.6s cubic-bezier(0.23, 1, 0.320, 1)';
        
        setTimeout(() => {
            memberView.style.opacity = '1';
            window.scrollTo({top: 0, behavior: 'smooth'});
        }, 50);
    }, 600);
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
    }, 300);
}

// Mouse parallax effect
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card-glass');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    cards.forEach((card, index) => {
        const speed = (index + 1) * 0.03;
        const xMove = (mouseX - 0.5) * speed * 10;
        const yMove = (mouseY - 0.5) * speed * 10;
        card.style.transform = `translate(${xMove}px, ${yMove}px) translateY(-10px) scale(1.02)`; 
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
});
