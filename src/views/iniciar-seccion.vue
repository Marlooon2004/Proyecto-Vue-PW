<template>
  <div class="contenedor_general">
    <form class="formularios">
      <fieldset class="borde_formularios">
        <legend>Informacion personal</legend>

        <label for="usuario">Usuario</label>
        <input type="text" class="usuario" id="usuario_id" />

        <label for="contrasenya">Contraseña</label>
        <input type="password" class="contrasenya" id="contrasenya_id" />

        <button class="boton">Iniciar Seccion</button>
        <button class="boton">Volver al menu principal</button>
      </fieldset>
    </form>
  </div>
</template>

<script setup></script>

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
select,
button {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #aaa;
  border-radius: 4px;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.usuario,
.contrasenya {
  width: 100%;
}
</style>
