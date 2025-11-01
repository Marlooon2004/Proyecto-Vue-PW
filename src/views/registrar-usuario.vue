<template>
  <div class="contenedor_general">
    <form class="formularios" @submit.prevent="iniciarSesion">
      <fieldset class="borde_formularios">
        <legend>Información personal</legend>

        <!-- Nombre -->
        <label for="nombre_id">Nombre</label>
        <input
          type="text"
          id="nombre_id"
          v-model="nombre"
          :class="validacionNombre"
          @input="validarNombre"
        />
        <span class="mensaje" :class="validacionNombre">{{ mensajeNombre }}</span>

        <!-- Apellidos -->
        <label for="apellidos_id">Apellidos</label>
        <input
          type="text"
          id="apellidos_id"
          v-model="apellidos"
          :class="validacionApellidos"
          @input="validarApellidos"
        />
        <span class="mensaje" :class="validacionApellidos">{{ mensajeApellidos }}</span>
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

        <!-- Municipio -->
        <label for="municipios_lista">Municipio</label>
        <select
          id="municipios_lista"
          v-model="municipio"
          :class="validacionMunicipio"
          @change="validarMunicipio"
        >
          <option value="">Seleccione un municipio</option>
          <option v-for="m in municipios" :key="m" :value="m">{{ m }}</option>
        </select>
        <span class="mensaje" :class="validacionMunicipio">{{ mensajeMunicipio }}</span>

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

        <!-- Repetir Contraseña -->
        <label for="contrasenya_repetida_id">Repetir contraseña</label>
        <input
          type="password"
          id="contrasenya_repetida_id"
          v-model="contrasenyaRepetida"
          :class="validacionContrasenyaRepetida"
          @input="validarContrasenyaRepetida"
        />
        <span class="mensaje" :class="validacionContrasenyaRepetida">{{
          mensajeContrasenyaRepetida
        }}</span>

        <!-- Botones -->
        <div class="botones">
          <button class="boton" type="submit">Registrarse</button>
          <button class="boton" type="button" @click="volverAlMenu">
            Volver al menú principal
          </button>
        </div>
        <p>Ya eres miembro? <router-link to="/iniciar-seccion">Inicia seccion</router-link></p>
      </fieldset>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Campos
const nombre = ref('')
const apellidos = ref('')
const usuario = ref('')
const municipio = ref('')
const contrasenya = ref('')
const contrasenyaRepetida = ref('')

// Mensajes y clases
const mensajeNombre = ref('')
const mensajeApellidos = ref('')
const mensajeUsuario = ref('')
const mensajeMunicipio = ref('')
const mensajeContrasenya = ref('')
const mensajeContrasenyaRepetida = ref('')

const validacionNombre = ref('')
const validacionApellidos = ref('')
const validacionUsuario = ref('')
const validacionMunicipio = ref('')
const validacionContrasenya = ref('')
const validacionContrasenyaRepetida = ref('')

// Municipios
const municipios = ref([
  '10 de Octubre',
  'La Lisa',
  'Guanabacoa',
  'Habana Vieja',
  'Habana del Este',
  'Cotorro',
  'Boyeros',
  'Cerro',
  'Marianao',
  'Plaza de la Revolución',
  'Regla',
  'San Miguel del Padrón',
  'Arroyo Naranjo',
  'Centro Habana',
])

// Validaciones
function validarNombre() {
  const regex = /^[a-zA-Z\s]{3,}$/
  if (!nombre.value) {
    mensajeNombre.value = 'Este campo es obligatorio.'
    validacionNombre.value = 'invalido'
  } else if (!regex.test(nombre.value)) {
    mensajeNombre.value = 'Mínimo 3 letras, sin números ni símbolos.'
    validacionNombre.value = 'invalido'
  } else {
    mensajeNombre.value = ''
    validacionNombre.value = 'valido'
  }
}

function validarApellidos() {
  const regex = /^[a-zA-Z\s]{3,}$/
  if (!apellidos.value) {
    mensajeApellidos.value = 'Este campo es obligatorio.'
    validacionApellidos.value = 'invalido'
  } else if (!regex.test(apellidos.value)) {
    mensajeApellidos.value = 'Mínimo 3 letras, sin números ni símbolos.'
    validacionApellidos.value = 'invalido'
  } else {
    mensajeApellidos.value = ''
    validacionApellidos.value = 'valido'
  }
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

function validarMunicipio() {
  if (!municipio.value) {
    mensajeMunicipio.value = 'Seleccione un municipio.'
    validacionMunicipio.value = 'invalido'
  } else {
    mensajeMunicipio.value = ''
    validacionMunicipio.value = 'valido'
  }
}

function validarContrasenyaRepetida() {
  if (!contrasenyaRepetida.value) {
    mensajeContrasenyaRepetida.value = 'Este campo es obligatorio.'
    validacionContrasenyaRepetida.value = 'invalido'
  } else if (contrasenyaRepetida.value !== contrasenya.value) {
    mensajeContrasenyaRepetida.value = 'Las contraseñas no coinciden.'
    validacionContrasenyaRepetida.value = 'invalido'
  } else {
    mensajeContrasenyaRepetida.value = ''
    validacionContrasenyaRepetida.value = 'valido'
  }
}

function iniciarSesion() {
  validarNombre()
  validarApellidos()
  validarUsuario()
  validarMunicipio()
  validarContrasenya()
  validarContrasenyaRepetida()

  const validaciones = [
    validacionNombre,
    validacionApellidos,
    validacionUsuario,
    validacionMunicipio,
    validacionContrasenya,
    validacionContrasenyaRepetida,
  ]

  if (validaciones.every((v) => v.value === 'valido')) {
    alert('Registro exitoso 🎉')
  }
}

function volverAlMenu() {
  router.push('/')
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
  max-width: 600px;
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

input,
select {
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  box-sizing: border-box;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  background-color: #fff;
}

input:focus,
select:focus {
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

/* Mensajes de retroalimentación */
.mensaje {
  display: inline-block;
  font-size: 0.875rem;
  margin: 0.25rem 0 0;
  padding: 0;
  line-height: 1.2;
  color: #dc3545;
}

.valido.mensaje {
  color: #28a745;
}

.invalido.mensaje {
  color: #dc3545;
}

.mensaje:empty {
  display: none;
}

/* Botones alineados y espaciados */
button {
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.375rem;
  background-color: #e55a00;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #cc4a00; /* un tono más oscuro del naranja original */
}

.boton + .boton {
  margin-left: 1rem;
}

.botones {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}
</style>
