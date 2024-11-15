const container = document.querySelector('.background-particles');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = Math.random() * 2 + 3 + 's';
    container.appendChild(particle);

    // Eliminar la partícula después de la animación
    setTimeout(() => {
        particle.remove();
    }, 5000);
}

// Crear partículas a intervalos
setInterval(createParticle, 500);
