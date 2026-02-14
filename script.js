const boton = document.getElementById('boton-okno');
const pantallaInicio = document.getElementById('pantalla-inicio');
const jardin = document.getElementById('jardin');
const musica = document.getElementById('musica');
const contenedorFlores = document.getElementById('contenedor-flores');
const contenedorCorazones = document.getElementById('contenedor-corazones');

boton.onclick = () => {
    musica.play();
    
    // Ocultar inicio y mostrar jardín
    pantallaInicio.style.display = 'none';
    jardin.style.display = 'block';

    // Plantar 80 tulipanes
    for (let i = 0; i < 80; i++) {
        setTimeout(crearTulipan, i * 20);
    }

    // Crear 50 corazones
    for (let i = 0; i < 50; i++) {
        crearCorazon();
    }
};

function crearTulipan() {
    const t = document.createElement('div');
    t.className = 'tulipan';
    const x = Math.random() * 95;
    const y = Math.random() * 55; // Se esparcen por el jardín
    const colores = ['rosa1', 'rosa2', 'rosa3'];
    const colorAzar = colores[Math.floor(Math.random() * colores.length)];
    t.style.left = x + '%';
    t.style.setProperty('--pos-y', y + '%');

    // Escala independiente para no interferir con la rotación (sway)
    const escala = 0.5 + Math.random() * 0.9;
    const swayOffset = (Math.random() * 120).toFixed(2) + 'ms';
    const swayExtra = (Math.random() * 1.2).toFixed(2) + 's';

    // Aplicar estructura con pétalos y hoja
    t.innerHTML = `
        <div class="tulipan-inner" style="transform: scale(${escala});">
            <div class="flor ${colorAzar}">
                <span class="petalo petalo-left"></span>
                <span class="petalo petalo-right"></span>
                <span class="petalo petalo-center"></span>
            </div>
            <div class="tallo"></div>
            <div class="hoja"></div>
        </div>
    `;

    // Añadir ligera variación en animación de balanceo
    if (Math.random() > 0.25) {
        t.dataset.sway = 'true';
        t.style.setProperty('--sway', swayExtra);
    }
    
    // Pequeña variación en delay para aparición
    t.style.animationDelay = swayOffset;
    contenedorFlores.appendChild(t);
}

function crearCorazon() {
    const c = document.createElement('div');
    c.className = 'corazon';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.animationDuration = Math.random() * 3 + 2 + 's';
    c.style.animationDelay = Math.random() * 5 + 's';
    contenedorCorazones.appendChild(c);
}