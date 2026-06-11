console.log("🤖 FULL STYLE IA iniciada correctamente");

document.addEventListener("DOMContentLoaded", () => {
  iniciarAsistenteIa();
  mostrarTendenciaIa();
  prepararMenuHamburguesa();
  iniciarSlider();
});

/* ===== ASISTENTE IA ===== */

function iniciarAsistenteIa() {
  const horaActual = new Date().getHours();
  let mensajeIa = "";

  if (horaActual < 12) {
    mensajeIa = "☀️ Buenos días. Bienvenida a FULL STYLE. Hoy te recomendamos camisetas urbanas y outfits casuales.";
  } else if (horaActual < 18) {
    mensajeIa = "✨ Buenas tardes. Descubre nuestras nuevas colecciones y prendas más vendidas.";
  } else {
    mensajeIa = "🌙 Buenas noches. Explora nuestros diseños urbanos para lucir con estilo.";
  }

  mostrarAsistenteIa(mensajeIa);
}

function mostrarAsistenteIa(mensajeIa) {
  if (document.getElementById("ia-fullstyle")) return;

  const contenedorIa = document.createElement("div");
  contenedorIa.id = "ia-fullstyle";

  contenedorIa.innerHTML = `
    <div class="ia-card">
      <div class="ia-header">🤖 Asistente FULL STYLE</div>
      <div class="ia-body">
        <p>${mensajeIa}</p>
      </div>
      <div class="ia-footer">
        <button class="ia-button" onclick="cerrarAsistenteIa()">Entendido</button>
      </div>
    </div>
  `;

  document.body.appendChild(contenedorIa);
}

function cerrarAsistenteIa() {
  const contenedorIa = document.getElementById("ia-fullstyle");

  if (contenedorIa) {
    contenedorIa.remove();
  }
}

/* ===== TENDENCIAS IA ===== */

function mostrarTendenciaIa() {
  const tendenciasModa = [
    "🔥 Las camisetas urbanas son tendencia esta semana.",
    "👕 Los estilos oversize siguen siendo los favoritos.",
    "⚫ Las prendas negras combinan con cualquier outfit.",
    "✨ Los diseños deportivos están marcando tendencia."
  ];

  const elementoTendencia = document.getElementById("tendenciaIa");

  if (elementoTendencia) {
    const indice = Math.floor(Math.random() * tendenciasModa.length);
    elementoTendencia.textContent = tendenciasModa[indice];
  }
}

/* ===== MENÚ HAMBURGUESA ===== */

function toggleMenu() {
  const menu = document.getElementById("menu");

  if (menu) {
    menu.classList.toggle("active");
  }
}

function prepararMenuHamburguesa() {
  const enlaces = document.querySelectorAll("#menu a");

  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      const menu = document.getElementById("menu");

      if (menu) {
        menu.classList.remove("active");
      }
    });
  });
}

/* ===== SLIDER ===== */

let slideActual = 0;

function iniciarSlider() {
  const slides = document.querySelectorAll(".slide");

  if (!slides.length) return;

  setInterval(() => {
    slides[slideActual].classList.remove("active");

    slideActual++;

    if (slideActual >= slides.length) {
      slideActual = 0;
    }

    slides[slideActual].classList.add("active");
  }, 4000);
}