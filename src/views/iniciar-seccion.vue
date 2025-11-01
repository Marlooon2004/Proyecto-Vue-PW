<template>
  <div class="contenedor_general">
    <form class="formularios" @submit.prevent="iniciarSesion">
      <fieldset class="borde_formularios">
        <legend>Información personal</legend>

        <!-- Usuario -->
        <label for="usuario_id">Usuario</label>
        <input
          type="text"
          id="usuario_id"
          v-model="usuario"
          :class="validacionUsuario"
          @input="validarUsuario"
        />
        <span class="mensaje" :class="validacionUsuario">{{ mensajeUsuario }}</span>

        <!-- Contraseña -->
        <label for="contrasenya_id">Contraseña</label>
        <input
          type="password"
          id="contrasenya_id"
          v-model="contrasenya"
          :class="validacionContrasenya"
          @input="validarContrasenya"
        />
        <span class="mensaje" :class="validacionContrasenya">{{ mensajeContrasenya }}</span>

        <!-- Botones -->
        <div class="botones">
          <button class="boton" type="submit">Iniciar Sesión</button>
          <button class="boton" type="button" @click="volverAlMenu">
            Volver al menú principal
          </button>
        </div>
        <p>No eres miembro? <router-link to="/registrar-usuario">Regístrate aquí</router-link></p>
      </fieldset>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const usuario = ref('')
const contrasenya = ref('')
const mensajeUsuario = ref('')
const mensajeContrasenya = ref('')
const validacionUsuario = ref('')
const validacionContrasenya = ref('')

function volverAlMenu() {
  router.push('/')
}
function validarUsuario() {
  const regex = /^[a-zA-Z0-9@._-]{3,}$/
  if (!usuario.value) {
    mensajeUsuario.value = 'Este campo es obligatorio.'
    validacionUsuario.value = 'invalido'
  } else if (!regex.test(usuario.value)) {
    mensajeUsuario.value = 'Mínimo 3 caracteres. Se permiten letras, números y símbolos.'
    validacionUsuario.value = 'invalido'
  } else {
    mensajeUsuario.value = ''
    validacionUsuario.value = 'valido'
  }
}

function validarContrasenya() {
  const regex = /^(?=.*\d).{8,}$/
  if (!contrasenya.value) {
    mensajeContrasenya.value = 'Este campo es obligatorio.'
    validacionContrasenya.value = 'invalido'
  } else if (!regex.test(contrasenya.value)) {
    mensajeContrasenya.value = 'Mínimo 8 caracteres y al menos 1 número.'
    validacionContrasenya.value = 'invalido'
  } else {
    mensajeContrasenya.value = ''
    validacionContrasenya.value = 'valido'
  }
}

function iniciarSesion() {
  validarUsuario()
  validarContrasenya()
  if (validacionUsuario.value === 'valido' && validacionContrasenya.value === 'valido') {
    alert('Inicio de sesión exitoso 🎉')
  }
}
</script>

<style scoped>
body {
  background-color: #f9f9fa;
}

.contenedor_general {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
}

.formularios {
  width: 100%;
  max-width: 500px;
}

.borde_formularios {
  background: #fff;
  border: 1px solid rgba(160, 175, 185, 0.3);
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

legend {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

label {
  font-weight: 500;
  color: #555;
  margin-bottom: 0.25rem;
}

input {
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  box-sizing: border-box;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

input:focus {
  border-color: #80bdff;
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.valido {
  border-color: #28a745;
}

.invalido {
  border-color: #dc3545;
}

.mensaje {
  display: inline;
  font-size: 0.875rem;
  padding: 0;
  margin: 0.25rem 0 0;
  line-height: 1.2;
  background-color: transparent;
}

.valido.mensaje {
  color: #28a745;
  background-color: transparent;
}

.invalido.mensaje {
  color: #dc3545;
  background-color: transparent;
}

.boton + .boton {
  margin-left: 1rem;
}

.botones {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

button {
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.375rem;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0069d9;
}

router-link {
  display: block;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #555;
  text-align: center;
}

router-link::before {
  content: '¿No tienes una cuenta? ';
  color: #333;
}
.mensaje:empty {
  display: none;
}
</style>
