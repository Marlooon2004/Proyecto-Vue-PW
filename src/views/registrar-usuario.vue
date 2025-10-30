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
        <button class="boton" type="submit">Registrarse</button>
        <button class="boton" type="button" @click="volverAlMenu">Volver al menú principal</button>
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
    mensajeNombre.value = 'Nombre válido.'
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
    mensajeApellidos.value = 'Apellidos válidos.'
    validacionApellidos.value = 'valido'
  }
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

function validarMunicipio() {
  if (!municipio.value) {
    mensajeMunicipio.value = 'Seleccione un municipio.'
    validacionMunicipio.value = 'invalido'
  } else {
    mensajeMunicipio.value = 'Municipio válido.'
    validacionMunicipio.value = 'valido'
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

function validarContrasenyaRepetida() {
  if (!contrasenyaRepetida.value) {
    mensajeContrasenyaRepetida.value = 'Este campo es obligatorio.'
    validacionContrasenyaRepetida.value = 'invalido'
  } else if (contrasenyaRepetida.value !== contrasenya.value) {
    mensajeContrasenyaRepetida.value = 'Las contraseñas no coinciden.'
    validacionContrasenyaRepetida.value = 'invalido'
  } else {
    mensajeContrasenyaRepetida.value = 'Las contraseñas coinciden.'
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

input,
select {
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
  background-color: #fff;
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
