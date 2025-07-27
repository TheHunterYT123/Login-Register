// Page created by Nelson Dominguez Martinez - 2025
const numParticles = 50;

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particula');

  const size = Math.random() * 9 + 2;
  particle.style.width = `${size}px`;   
  particle.style.height = `${size}px`;

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  particle.style.left = `${startX}px`;
  particle.style.top = `${startY}px`;

  const endX = (Math.random() * 2 - 1) * window.innerHeight * 0.7;
  const endY = (Math.random() * 2 - 1) * window.innerHeight * 0.7;

  particle.style.setProperty('--endX', `${endX}px`);
  particle.style.setProperty('--endY', `${endX}px`);
  particle.style.animationDuration = `${Math.random() * 30 + 20}s`;
  particle.style.animationDelay = `0s`; 

  document.body.appendChild(particle);
}


// Page created by Nelson Dominguez Martinez - 2025