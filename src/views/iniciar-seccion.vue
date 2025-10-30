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
        <button class="boton" type="submit">Iniciar Sesión</button>
        <button class="boton" type="button" @click="volverAlMenu">Volver al menú principal</button>
        <router-link to="/registrar-usuario">Aún no tiene cuenta. Registrese</router-link>
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
    mensajeUsuario.value = 'Mínimo 3 caracteres. Se permiten letras, números y símbolos (@ . _ -).'
    validacionUsuario.value = 'invalido'
  } else {
    mensajeUsuario.value = 'Usuario válido.'
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
    mensajeContrasenya.value = 'Contraseña válida.'
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
.formularios {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.borde_formularios {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-sizing: border-box;
}

input {
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #aaa;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.valido {
  border-color: #4caf50;
  background-color: #e8f5e9;
}

.invalido {
  border-color: #f44336;
  background-color: #ffebee;
}

.mensaje {
  font-size: 0.9rem;
  margin-top: -10px;
  margin-bottom: 10px;
}

.valido.mensaje {
  color: #4caf50;
}

.invalido.mensaje {
  color: #f44336;
}

button {
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #1976d2;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1565c0;
}
</style>
