<template>
  <div class="contenerdor_general">
    <!--header -->
    <header class="header">
      <nav class="navbar">
        <div class="logo">
          <h2>RentaMotos Habana</h2>
        </div>
        <ul class="nav-links">
          <li><router-link to="/iniciar-seccion">Iniciar sesión</router-link></li>
          <li><router-link to="motos-catalogo">Motos</router-link></li>
          <li><a href="#footer_id">Contacto</a></li>
        </ul>
        <div class="nav-buttons">
          <a href="#reservar" class="btn-reservar">Reservar Ahora</a>
        </div>
        <div class="switch-theme">
          <button @click="toggleTheme" class="theme-toggle">
            <span v-if="isDark">🌙</span>
            <span v-else>☀️</span>
          </button>
        </div>
      </nav>
    </header>

    <!-- Contenido intermedio -->
    <div class="contenedor_principal">
      <h1>Renta de motos habana</h1>
      <div class="contenedor_inicio_pagina">
        <div class="contenedor_texto">
          <h2>Seguridad Primero</h2>
          <p>
            Cada moto pasa por rigurosas revisiones técnicas antes de cada renta. Incluimos equipos
            de protección certificados y seguro contra accidentes. Tu tranquilidad es nuestra máxima
            prioridad en cada kilómetro.
          </p>
        </div>
        <div class="contenedor_texto">
          <h2>Cobertura Nacional</h2>
          <p>
            ¿Planeas un viaje interestatal? Tenemos alianzas en múltiples ciudades. Devuelve tu moto
            en cualquier de nuestras sucursales asociadas. Viaja sin límites por todo el territorio
            nacional.
          </p>
        </div>
        <div class="contenedor_texto">
          <h2>Reserva Instantánea</h2>
          <p>
            Olvídate de trámites interminables y papeleos complicados. Con nuestro sistema online,
            reserva tu moto en menos de 3 minutos. Recibe confirmación inmediata y prepárate para
            rodar.
          </p>
        </div>
      </div>
      <div class="contenedor_texto_imagen">
        <div>
          <img src="../images/OIP (1).webp" class="imagen" />
        </div>
        <div class="contenedor_texto">
          <h2>Precios Sin Sorpresas</h2>
          <p>
            Todo incluido en tu tarifa: seguro, casco, guantes y asistencia vial. Sin costos ocultos
            ni cargos adicionales al finalizar. Transparencia total desde el momento de tu
            cotización.
          </p>
        </div>
      </div>
      <div class="contenedor_texto_imagen">
        <div class="contenedor_texto">
          <h2>Flota Actualizada</h2>
          <p>
            Motos de última generación con tecnología de punta. Desde scooters urbanos hasta
            adventure para terracería. Encuentra la compañera perfecta para cada tipo de viaje.
          </p>
        </div>
        <div>
          <img src="../images/Screenshot-2024-03-18T100234.536.png" class="imagen" />
        </div>
      </div>
      <div class="contenedor_texto_imagen">
        <div>
          <img src="../images/OIP.webp" class="imagen" />
        </div>
        <div class="contenedor_texto">
          <h2>Experiencia Premium</h2>
          <p>
            Asesoramiento personalizado para elegir la moto ideal. Kit de bienvenida con mapas y
            rutas recomendadas. Hacemos de tu viaje una experiencia inolvidable.
          </p>
        </div>
      </div>
      <div class="contenedor_texto_imagen">
        <div class="contenedor_texto">
          <h2>Flexibilidad Total</h2>
          <p>
            Renta por horas, días, semanas o meses. Modifica o cancela tu reserva sin
            complicaciones. Planes personalizados según tus necesidades específicas..
          </p>
        </div>
        <div>
          <img src="../images/renta-de-motos-en-guadalajara-1.jpg" class="imagen" />
        </div>
      </div>
    </div>

    <!-- footer -->
    <footer class="footer" id="footer_id">
      <div class="footer-content">
        <!-- Información de contacto -->
        <div class="footer-section">
          <h3>Contacto</h3>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
            Teléfono: 7642 7824
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
              />
            </svg>
            Email: inforentamotosh@gmail.com
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-map"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"
              />
            </svg>
            Dirección: Calle Albear #123
          </p>
        </div>
        <!-- Redes sociales -->
        <div class="footer-section">
          <h3>Síguenos</h3>
          <div class="social-links">
            <a href="#" class="enlace"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                />
              </svg>
              Facebook</a
            >
            <a href="#" class="enlace"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 1 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                />
              </svg>
              Instagram</a
            >
            <a href="#" class="enlace"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"
                />
              </svg>
              Twitter</a
            >
          </div>
        </div>
      </div>
      <!-- Copyright -->
      <div class="footer-bottom">
        <p>&copy; 2024 Renta de Motos Habana. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const isDark = inject('isDark')
const toggleTheme = inject('toggleTheme')
</script>

<style scoped>
/* Reset global para body y html */
:global(body) {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

:global(html) {
  margin: 0;
  padding: 0;
}

/* Estilos locales del componente */
.contenerdor_general {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

.header {
  background-color: #333;
  color: white;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: 100%;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 70px;
}

.logo h2 {
  color: #ff6b00;
  margin: 0;
  font-size: 1.5em;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 30px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 10px 0;
}

.nav-links a:hover {
  color: #ff6b00;
}

.nav-buttons {
  display: flex;
  gap: 15px;
}

.btn-reservar {
  background-color: #ff6b00;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn-reservar:hover {
  background-color: #e55a00;
}

/* RESPONSIVE HEADER */
@media (max-width: 768px) {
  .navbar {
    padding: 0 15px;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #1a1a1a;
    flex-direction: column;
    padding: 20px;
    gap: 15px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }

  .nav-links.active {
    display: flex;
  }

  .nav-buttons {
    display: none;
  }

  .logo h2 {
    font-size: 1.3em;
  }
}

.contenedor_principal {
  margin-top: 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
}

h2 {
  text-align: center;
}

.contenedor_inicio_pagina {
  display: flex;
  gap: 20px;
  margin: 20px 0;
}

.contenedor_texto {
  padding: 20px;
  flex: 1;
}

.contenedor_texto_imagen {
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 40px 0;
  padding: 20px;
}

.contenedor_texto_imagen > div {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.imagen {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.contenedor_texto_imagen .contenedor_texto {
  padding: 20px;
}

p {
  text-align: justify;
  line-height: 1.6;
}

/* ========== RESPONSIVE DESIGN ========== */

/* Tablets */
@media (max-width: 768px) {
  .contenedor_inicio_pagina {
    flex-direction: column;
  }

  .contenedor_texto_imagen {
    flex-direction: column;
    text-align: center;
    margin: 30px 0;
  }

  .imagen {
    width: 100%;
    max-width: 100%;
    height: 250px;
  }

  .contenedor_texto {
    padding: 15px;
  }

  .contenedor_texto_imagen > div {
    flex: none;
  }
}

/* Móviles */
@media (max-width: 480px) {
  .contenedor_texto_imagen {
    margin: 20px 0;
    gap: 20px;
  }

  .imagen {
    height: 200px;
  }

  h1 {
    font-size: 1.8em;
  }

  h2 {
    font-size: 1.4em;
  }

  p {
    font-size: 0.9em;
  }
}

/* Efectos hover */
.contenedor_texto {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.contenedor_texto:hover {
  transform: translateY(-5px);
}

/* FOOTER */
.footer {
  background-color: #333;
  color: white;
  padding: 40px 0 20px;
  margin-top: 50px;
  width: 100%;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-section {
  flex: 1;
  min-width: 250px;
}

.footer-section h3 {
  color: #f8f9fa;
  margin-bottom: 15px;
}

.footer-section p {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.footer-section a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #fff;
}

.footer-bottom {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #555;
  color: #aaa;
  max-width: 1200px;
  margin: 30px auto 0;
  padding: 20px 20px 0;
}

/* Estilos para los enlaces de redes sociales */
.enlace {
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s;
}

.enlace:hover {
  color: #fff;
}

.enlace svg {
  margin-right: 5px;
}

/* Responsive Footer */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    padding: 0 15px;
  }

  .footer-section {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 0 10px;
  }

  .footer-bottom {
    padding: 20px 10px 0;
  }
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
